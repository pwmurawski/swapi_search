import fetchApi from "./fetchApi";

const swApi = async <Data>(url: string, options?: RequestInit) => {
  const baseUrl = process.env.REACT_APP_SW_API_BASE_URL;

  const reponse = await fetchApi<Data>(`${baseUrl}${url}`, options);

  return reponse;
};

export default swApi;
