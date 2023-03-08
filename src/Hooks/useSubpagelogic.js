import { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { useCapital } from "../Hooks/useCapital";
import { useDispatch } from "react-redux";
import { changeName, changeToInitial } from "../Store/nameSlice";

export const useSubpagelogic = () => {
  const [data, setData] = useState({});
  const [homeworldName, setHomeworldName] = useState("");
  const [speciesName, setSpeciesName] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const [fetchData, error] = useFetch();

  useEffect(() => {
    fetchData(setData, `https://swapi.dev/api${window.location.toString().replace(window.location.origin, "")}`)
      .then((fetchedObject) => {
        if (fetchedObject.homeworld) {
          fetchData(setHomeworldName, fetchedObject.homeworld);
        }
        if (fetchedObject.species.length !== 0) {
          fetchData(setSpeciesName, fetchedObject.species[0]);
        }
        setLoading(false);
        dispatch(changeName(fetchedObject.name));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    return () => {
      dispatch(changeToInitial());
    };
  }, []);

  return { data };
};
