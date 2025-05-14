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
import Contact from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetApiData"; // imported as a function
// ---------------------------------------

// 1. Normal routes - V6.3
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/movies", element: <Movies />, loader: getMoviesData },
        { path: "/services", element: <Services /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
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
