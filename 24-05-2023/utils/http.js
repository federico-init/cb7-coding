const BASE_URL = "https://dummyjson.com/todos";

export const GET = async (endpoint = "") => {
  const res = await fetch(BASE_URL + endpoint);
  const data = res.json();

  return data;
};
