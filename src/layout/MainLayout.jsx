import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="mb-6">
        <Navbar></Navbar>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
