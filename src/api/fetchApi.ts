/* eslint-disable no-empty */
const fetchApi = async <Data>(
  url: string,
  options: RequestInit = { method: "GET" }
) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const headers = { ...defaultHeaders, ...options.headers };
  const newOptions = { ...options, headers };

  try {
    const response = await fetch(`${url}`, newOptions);
    const data: Data = response.status !== 204 ? await response.json() : null;

    return {
      data,
      status: response.status,
    };
  } catch {}
  return undefined;
};

export default fetchApi;
