import { useState, useEffect } from "react";

export const useRelatedResources = (urls) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!urls) return;
    Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
      .then((responses) => {
        setData(responses.flat());
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [urls]);

  return { data, loading, error };
};
