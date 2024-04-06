import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(keyword);
    navigate(`/search?q=${keyword}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="search" id="search" type="search" onChange={(e) => setKeyword(e.target.value)} className="mt-0 block w-full px-2 border-2 border-gray-200 focus:ring-0 focus:border-black rounded-md" placeholder="Arama" />
      </form>
    </>
  );
};

export default SearchBar;
