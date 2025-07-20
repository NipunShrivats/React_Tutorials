import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
// import FetchNew from "./pages/FetchNew";
import FetchNew from "./pages/FetchNew";
import FetchOld from "./pages/FetchOld";
import InfiniteScroll from "./pages/InfiniteScroll";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FetchNewUnique from "./components/UI/FetchNewUnique";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "fetchold/",
        element: <FetchOld />,
      },
      {
        path: "fetchnew/",
        element: <FetchNew />,
      },
      {
        path: "fetchnew/:id",
        element: <FetchNewUnique />, //unique page for each selected data
      },
      {
        path: "infinitescroll",
        element: <InfiniteScroll />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
