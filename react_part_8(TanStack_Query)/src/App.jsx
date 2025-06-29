import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Home from "./components/pages/Home";
import FetchOld from "./components/pages/FetchOld";
import FetchRQ from "./components/pages/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// create router
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
        path: "/fetchold",
        element: <FetchOld />,
      },
      {
        path: "/fetchrq",
        element: <FetchRQ />,
      },
    ],
  },
]);
export default function App() {
  const queryClinet = new QueryClient();

  return (
    <QueryClientProvider client={queryClinet}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}
