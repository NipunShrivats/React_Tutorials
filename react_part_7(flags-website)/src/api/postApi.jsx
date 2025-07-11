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

export const countryLoader = async ({ params }) => {
  const data = await api.get(
    `/name/${params.id}?fullText=true&fields=name,population,region,capital,flags`
  );
  return data.data[0];
};

export const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
