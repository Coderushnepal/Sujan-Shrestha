import http from "../utils/http";

export const fetchBeers = async () => {
  // call async api
  const { data } = await http.get("/beers");

  return data;
};

export const fetchBeerById = async (id) => {
  // call single beer async api
  const { data } = await http.get(`/beers/${id}`);

  return data[0];
};
