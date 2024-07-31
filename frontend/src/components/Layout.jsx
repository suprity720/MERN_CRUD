import React from "react";
import Navabar from "./Navabar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navabar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
