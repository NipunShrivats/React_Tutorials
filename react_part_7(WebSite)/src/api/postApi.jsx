import axios from "axios";

const api = axios.create({
  // https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD

export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET method for individual country name

export const getCurrentCountryData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,capital,flags`
  );
};
