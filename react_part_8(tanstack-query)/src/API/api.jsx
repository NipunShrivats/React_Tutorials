import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Main fetch
export const fetchPosts = async () => {
  try {
    const res = await api.get("/posts");
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// pagination based fetch
export const fetchPostsp = async (pageNo) => {
  try {
    const res = await api.get(`/posts?_start=${pageNo}&_limit=3`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// Individual data after clicking
export const fetchPostsUnique = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// to delete the posts
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// update data

export const updatePost = (id) => {
  return api.patch(`/posts/${id}`, { title: "I have updated" });
};
// -------------------------------------------
// Infinite Scroll

const infiniteApi = axios.create({
  baseURL: `https://api.github.com`,
});
export const fetchUsers = async ({ pageParam = 1 }) => {
  try {
    const res = await infiniteApi.get(`users?per_page=10&page=${pageParam}`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
