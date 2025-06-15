import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

export default function AppLayout() {
  return (
    <>
      <Header />
      {/* handle scroll to top */}
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
}
