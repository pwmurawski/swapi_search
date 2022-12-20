import { IPagination } from "../types/PaginationTypes";
import swApi from "./swApi";

export type WhereType = "people" | "planets";

const getSearch = async <Data>(search: string, where: WhereType) => {
  const data = await swApi<IPagination<Data>>(`/${where}/?search=${search}`);

  return data;
};

export default getSearch;
