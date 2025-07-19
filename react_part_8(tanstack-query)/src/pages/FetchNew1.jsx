import React, { useState } from "react";
import { deletePost, fetchPostsp, updatePost } from "../API/api";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function FetchNew1() {
  const [pageNo, setPageNo] = useState(0);

  // use for clearing the cache after deleting the data
  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNo], // works like useState
    queryFn: () => fetchPostsp(pageNo), // works like useEffect
    placeholderData: keepPreviousData,

    // gcTime: 1000, // in ms
    // staleTime: 5000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
  });

  // Mutation Function Creation
  // 1. delition
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      console.log(data, id);
      queryClient.setQueryData(["posts", pageNo], (curElem) => {
        return curElem?.filter((post) => post.id !== id);
      });
    },
  });

  // 2. updation
  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (apiData, apiId) => {
      console.log(apiData, apiId);

      queryClient.setQueriesData(["posts", pageNo], (postData) => {
        return postData.map((curPost) => {
          return curPost.id == apiId
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
                  className="Mutation-btn"
                  onClick={() => deleteMutation.mutate(id)}
                >
                  Delete
                </button>
                <button
                  className="Mutation-btn"
                  onClick={() => updateMutation.mutate(id)}
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
