import React, { useState } from "react";
import { deletePost, fetchPosts, updatePost } from "../API/api";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function UsingTanStack() {
  const [pageNo, setPageNo] = useState(0);

  // use for clearing the cache after deleting the data
  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNo], // works like useState
    queryFn: () => fetchPosts(pageNo), // works like useEffect
    placeholderData: keepPreviousData,

    // gcTime: 1000, // in ms
    // staleTime: 5000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
  });

  // 1. Mutation function to delete the posts
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      // console.log(data, id);
      queryClient.setQueryData(["posts", pageNo], (curElem) => {
        return curElem?.filter((post) => post.id !== id);
      });
    },
  });

  // 2. Mutation function to update the posts
  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (apiData, postId) => {
      // console.log(apiData, postId);
      queryClient.setQueryData(["posts", pageNo], (postData) => {
        return postData?.map((curPost) => {
          return curPost.id == postId
            ? { ...curPost, title: apiData.data.title }
            : curPost;
        });
      });
    },
  });

  if (isPending) return <div>Loading posts...</div>;
  if (isError)
    return <div>Error: {error.message || "Something is wrong!"}</div>;

  return (
    <>
      <div>
        <h2 style={{ color: "red" }}>Tanstack</h2>
        <ol className="fetchnew-box">
          {/* Meaning of data?.map(): It checks if data exists and isn’t null or
        undefined before trying to run .map() on it. */}
          {data?.map((curElem) => {
            const { id, title, body } = curElem;
            return (
              <li key={id} className="fetchnew-li">
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
                <button className="view-more">
                  <NavLink to={`/fetchnew/${id}`} className="fetchnew-link">
                    View More...
                  </NavLink>
                </button>

                <button
                  onClick={() => deleteMutation.mutate(id)}
                  className="Mutation-btn"
                >
                  Delete
                </button>
                <button
                  onClick={() => updateMutation.mutate(id)}
                  className="Mutation-btn"
                >
                  Update
                </button>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="page">
        <button
          onClick={() => setPageNo((prev) => prev - 3)}
          disabled={pageNo === 0}
        >
          Prev
        </button>
        <h2>{pageNo / 3 + 1}</h2>
        <button
          onClick={() => setPageNo((prev) => prev + 3)}
          disabled={pageNo / 3 + 1 === 34}
        >
          Next
        </button>
      </div>
    </>
  );
}
