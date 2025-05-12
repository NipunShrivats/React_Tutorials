/* this outlet will put children in between */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <>
      <Header />

      <div className="flex items-center justify-center h-69">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
