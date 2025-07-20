import React, { useEffect } from "react";
import { IsRestoringProvider, useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../API/api";

export default function InfiniteScroll1() {
  const {
    data,
    isPending,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers, //by default it gives pageParam

    //getNextPageParam is to check if we have more pages or not
    getNextPageParam: (lastPage, allPages) => {
      console.log("lastPage:", lastPage);
      console.log("allPages:", allPages);
      return lastPage === 20 ? allPages.length + 1 : ["All caught up!!"];
    },
  });

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1;
    if (bottom && hasNextPage) {
      fetchNextPage(); // predefined
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);

  if (isPending) return <div>Loading posts...</div>;
  if (isError)
    return <div>Error: {error.message || "Something is wrong!"}</div>;
  // console.log("data: ", data);
  // console.log("data.pages: ", data.pages);
  return (
    <div>
      <h1>Infinite Scroll with react query</h1>
      {data?.pages?.map((page, index) => {
        return (
          <ol key={index}>
            {page?.map((userData) => {
              const { id, login, avatar_url } = userData;
              return (
                <li key={id}>
                  <p>{login}</p>
                  <img
                    src={avatar_url}
                    alt={login}
                    style={{ width: "10rem" }}
                  />
                </li>
              );
            })}
          </ol>
        );
      })}
      {isFetchingNextPage && <div>Loading data</div>}
    </div>
  );
}
