import axios from "axios";

// `https://www.omdbapi.com/?i=tt3896198&apiskey=3f5e058&s=titan&page=1`
const api = axios.create({
  baseURL: `https://www.omdbapi.com/`,
});

export const getMovie = () => {
  return api.get(`?i=tt3896198&apikey=3f5e058&s=titan&page=1`);
};
