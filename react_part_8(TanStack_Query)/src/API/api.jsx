import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// to fetch data

export const fetchPosts = () => {
  return API.get("/posts");
};
