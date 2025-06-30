import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul style={{ display: "flex", gap: "1rem" }}>
        <Link to={"/axiosFetching"}>
          <button>Axios Fetching</button>
        </Link>
        <Link to="/tanstackFetching">
          <button>TanStack Fetching</button>
        </Link>
      </ul>
    </div>
  );
}
