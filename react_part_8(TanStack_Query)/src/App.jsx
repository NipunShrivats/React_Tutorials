import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/pages/Home";
import AxiosFetching from "./components/pages/UsingAxios";
import TanstackFetching from "./components/pages/UsingTanStack";

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
        path: "/axiosFetching",
        element: <AxiosFetching />,
      },
      {
        path: "/tanstackFetching",
        element: <TanstackFetching />,
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
