/* this outlet will put children in between */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <>
      <Header />

      <div className="mx-[5rem] my-[5rem] text-center">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
