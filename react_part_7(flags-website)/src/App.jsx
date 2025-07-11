import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Country from "./pages/Country";
import ErrorPage from "./pages/ErrorPage";
// import CountryDetails from "./components/Layout/CountryDetails";
import { countryLoader } from "./api/postApi";
import LoaderDetails from "./components/Layout/LoaderDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "country",
        element: <Country />,
      },
      // dynamic route // for sub-flag content //
      {
        path: "country/:id",
        element: <LoaderDetails />,
        loader: countryLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
