import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Navbar.css";
import { ThemeContexts } from "../contexts/ThemeContexts";
const Navbar = () => {
  const { color } = useContext(ThemeContexts);
  return (
    <>
      <nav style={{ backgroundColor: color }}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-6">
            <Link className="text-white font-semibold hover:text-blue-200" to="/">
              Yemek Tarifleri
            </Link>
            <div className="flex justify-end gap-2">
              <SearchBar />
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
