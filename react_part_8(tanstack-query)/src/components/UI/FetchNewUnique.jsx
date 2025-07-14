import React from "react";
import { fetchPostsUnique } from "../../API/api";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";

export default function FetchNewUnique() {
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchPostsUnique(id),
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
  });

  if (isPending) return <div>Loading post...</div>;
  if (isError)
    return <div>Error: {error.message || "Something is wrong!"}</div>;

  return (
    <div>
      <>
        <div>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </div>
        <button>
          <NavLink to={"/fetchnew"}>Go Back</NavLink>
        </button>
      </>
    </div>
  );
}
