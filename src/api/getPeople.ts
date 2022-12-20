import { IPeople } from "../types/PeopleTypes";
import swApi from "./swApi";

const getPeople = async (id: string | undefined) => {
  const data = await swApi<IPeople>(`/people/${id}/`);

  return data;
};

export default getPeople;
