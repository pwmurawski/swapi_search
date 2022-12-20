import { useEffect, useState } from "react";
import fetchApi from "../api/fetchApi";
import getSearch, { WhereType } from "../api/getSearch";
import { IPeople } from "../types/PeopleTypes";
import { IPlanets } from "../types/PlanetsTypes";

const useSearch = (search: string | null, where: WhereType) => {
  const [charactersData, setCharactersData] = useState<IPeople[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);

    if (where === "planets") {
      const res = await getSearch<IPlanets>(search ?? "", where);
      if (res?.data) {
        const charactersUrl = res.data.results.reduce(
          (sum, { residents }) => [...sum, ...residents],
          [] as string[]
        );

        const characters = await Promise.all(
          charactersUrl.map((url) =>
            fetchApi<IPeople>(url).then((resp) => resp?.data)
          )
        );

        setCharactersData(characters.filter((element) => element) as IPeople[]);
      }
    } else {
      const res = await getSearch<IPeople>(search ?? "", where);
      if (res?.data) {
        setCharactersData(res.data.results);
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    if (search) getData();
  }, [search, where]);

  return { charactersData, loading };
};

export default useSearch;
