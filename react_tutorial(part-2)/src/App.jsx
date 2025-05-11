import React from "react";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AppLayout from "./components/layout/AppLayout";
// ---------------------------------------

// 1. Normal routes
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/services", element: <Services /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
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
