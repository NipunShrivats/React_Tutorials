import React from "react";
import { IsRestoringProvider, useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../API/api";

export default function InfiniteScroll() {
  const { data, isPending, isError, error } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers, //by default it gives pageParam

    //getNextPageParam is to check if we have more pages or not
    getNextPageParam: (lastPage, allPages) => {
      // console.log("lastPage:", lastPage);
      // console.log("allPages:", allPages);
      return lastPage === 10 ? allPages.length + 1 : ["All caught up!!"];
    },
  });

  if (isPending) return <div>Loading posts...</div>;
  if (isError)
    return <div>Error: {error.message || "Something is wrong!"}</div>;
  // console.log("data: ", data);
  // console.log("data.pages: ", data.pages);
  return (
    <div>
      <h1>Infinite Scroll with react query</h1>
      {data?.pages?.map((page, index) => {
        <ul key={index}>
          {page?.map((userData) => {
            const { id, login, avatar_url } = userData;
            <li key={id}>
              <p>{login}</p>
              <img src={avatar_url} alt={login} />
            </li>;
            console.log(login);
          })}
        </ul>;
      })}
    </div>
  );
}
