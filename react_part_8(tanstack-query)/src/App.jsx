import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import FetchNew from "./pages/FetchNew";
import FetchOld from "./pages/FetchOld";

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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
