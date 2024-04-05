import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
