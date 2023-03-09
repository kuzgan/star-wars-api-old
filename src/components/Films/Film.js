import React from "react";
import { useSubpageLogic } from "../../Hooks/useSubpageLogic";
import { useCapital } from "../../Hooks/useCapital";
import { RelatedResidents } from "../Widgets/RelatedResidents";
import { RelatedVehicles } from "../Widgets/RelatedVehicles";
import { RelatedStarships } from "../Widgets/RelatedStarships";

export const Film = () => {
  const { data, error, loading } = useSubpageLogic();
  const [capitalize] = useCapital();

  if (error) {
    return <div>There was an error fetching data. {error}</div>;
  }
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{data?.title}</h2>
          <span>Opening crawl: {capitalize(data?.opening_crawl)}</span>
          <span>Director: {capitalize(data?.director)}</span>
          <span>Producer: {capitalize(data?.producer)}</span>
          <span>Release date: {capitalize(data?.release_date)}</span>
          <span>Episode id: {capitalize(data?.episode_id)}</span>
        </div>
      )}
      <RelatedResidents urls={data.residents} />
      <RelatedVehicles urls={data.vehicles} />
      <RelatedStarships urls={data.starships} />
    </div>
  );
};

// {
//   "title": "Attack of the Clones",
//   "episode_id": 2,
//   "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
//   "director": "George Lucas",
//   "producer": "Rick McCallum",
//   "release_date": "2002-05-16",
//   "characters": [
//       "https://swapi.dev/api/people/2/",
//       "https://swapi.dev/api/people/3/",
//       "https://swapi.dev/api/people/6/",
//       "https://swapi.dev/api/people/7/",
//       "https://swapi.dev/api/people/10/",
//       "https://swapi.dev/api/people/11/",
//       "https://swapi.dev/api/people/20/",
//       "https://swapi.dev/api/people/21/",
//       "https://swapi.dev/api/people/22/",
//       "https://swapi.dev/api/people/33/",
//       "https://swapi.dev/api/people/35/",
//       "https://swapi.dev/api/people/36/",
//       "https://swapi.dev/api/people/40/",
//       "https://swapi.dev/api/people/43/",
//       "https://swapi.dev/api/people/46/",
//       "https://swapi.dev/api/people/51/",
//       "https://swapi.dev/api/people/52/",
//       "https://swapi.dev/api/people/53/",
//       "https://swapi.dev/api/people/58/",
//       "https://swapi.dev/api/people/59/",
//       "https://swapi.dev/api/people/60/",
//       "https://swapi.dev/api/people/61/",
//       "https://swapi.dev/api/people/62/",
//       "https://swapi.dev/api/people/63/",
//       "https://swapi.dev/api/people/64/",
//       "https://swapi.dev/api/people/65/",
//       "https://swapi.dev/api/people/66/",
//       "https://swapi.dev/api/people/67/",
//       "https://swapi.dev/api/people/68/",
//       "https://swapi.dev/api/people/69/",
//       "https://swapi.dev/api/people/70/",
//       "https://swapi.dev/api/people/71/",
//       "https://swapi.dev/api/people/72/",
//       "https://swapi.dev/api/people/73/",
//       "https://swapi.dev/api/people/74/",
//       "https://swapi.dev/api/people/75/",
//       "https://swapi.dev/api/people/76/",
//       "https://swapi.dev/api/people/77/",
//       "https://swapi.dev/api/people/78/",
//       "https://swapi.dev/api/people/82/"
//   ],
//   "planets": [
//       "https://swapi.dev/api/planets/1/",
//       "https://swapi.dev/api/planets/8/",
//       "https://swapi.dev/api/planets/9/",
//       "https://swapi.dev/api/planets/10/",
//       "https://swapi.dev/api/planets/11/"
//   ],
//   "starships": [
//       "https://swapi.dev/api/starships/21/",
//       "https://swapi.dev/api/starships/32/",
//       "https://swapi.dev/api/starships/39/",
//       "https://swapi.dev/api/starships/43/",
//       "https://swapi.dev/api/starships/47/",
//       "https://swapi.dev/api/starships/48/",
//       "https://swapi.dev/api/starships/49/",
//       "https://swapi.dev/api/starships/52/",
//       "https://swapi.dev/api/starships/58/"
//   ],
//   "vehicles": [
//       "https://swapi.dev/api/vehicles/4/",
//       "https://swapi.dev/api/vehicles/44/",
//       "https://swapi.dev/api/vehicles/45/",
//       "https://swapi.dev/api/vehicles/46/",
//       "https://swapi.dev/api/vehicles/50/",
//       "https://swapi.dev/api/vehicles/51/",
//       "https://swapi.dev/api/vehicles/53/",
//       "https://swapi.dev/api/vehicles/54/",
//       "https://swapi.dev/api/vehicles/55/",
//       "https://swapi.dev/api/vehicles/56/",
//       "https://swapi.dev/api/vehicles/57/"
//   ],
//   "species": [
//       "https://swapi.dev/api/species/1/",
//       "https://swapi.dev/api/species/2/",
//       "https://swapi.dev/api/species/6/",
//       "https://swapi.dev/api/species/12/",
//       "https://swapi.dev/api/species/13/",
//       "https://swapi.dev/api/species/15/",
//       "https://swapi.dev/api/species/28/",
//       "https://swapi.dev/api/species/29/",
//       "https://swapi.dev/api/species/30/",
//       "https://swapi.dev/api/species/31/",
//       "https://swapi.dev/api/species/32/",
//       "https://swapi.dev/api/species/33/",
//       "https://swapi.dev/api/species/34/",
//       "https://swapi.dev/api/species/35/"
//   ],
//   "created": "2014-12-20T10:57:57.886000Z",
//   "edited": "2014-12-20T20:18:48.516000Z",
//   "url": "https://swapi.dev/api/films/5/"
// }
