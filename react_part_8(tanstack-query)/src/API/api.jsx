import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Main fetch
// export const fetchPosts = async () => {
//   try {
//     const res = await api.get("/posts");
//     return res.status === 200 ? res.data : [];
//   } catch (error) {
//     console.log(error);
//   }
// };

// pagination based fetch
export const fetchPosts = async (pageNo) => {
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
