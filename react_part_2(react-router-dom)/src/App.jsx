import React from "react";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact, { contactData } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";

import { getMoviesData } from "./api/GetApiData"; // imported as a function
import { getMoviesDetails } from "./api/GetMoviesDetails"; // imported as a function

// Dynamic Routing UI page
import MoviesDetails from "./components/UI/MoviesDetails";
// ---------------------------------------

// 1. Normal routes - V6.3
export default function App() {
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
          path: "/movies",
          element: <Movies />,
          loader: getMoviesData, //this gets data from api
        },

        // DYNAMIC ROUTING
        {
          path: "/movies/:movieID",
          element: <MoviesDetails />,
          loader: getMoviesDetails, //this gets data from api
        },
        {
          path: "/services/",
          element: <Services />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          action: contactData,
          element: <Contact />,
        },
      ],
    },
  ]);

  // 2. older version routes
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/services" element={<Services />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Route>
  //   )
  // );

  // ----------------------------------------------------

  return <RouterProvider router={router} />;
}
