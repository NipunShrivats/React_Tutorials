/* this outlet will put children in between */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";
export default function AppLayout() {
  // Defining loading state [idle → submitting → loading → idle]
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <>
        <Loading />
      </>
    );
  }
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
