import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get Method
export const getPost = () => {
  return api.get("/posts");
};

// Delete Method
export const delPost = (id) => {
  return api.delete(`/posts/${id}`);
};
