import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-700">
        <div className="container mx-auto">
          <div className="flex justify-between py-6">
            <Link className="text-white font-semibold hover:text-blue-200" to="/">
              Yemek Tarifleri
            </Link>
            <div className="flex justify-end">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/create">
                Create
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
