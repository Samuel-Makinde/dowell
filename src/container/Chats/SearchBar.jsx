import React from "react";
import { FaSearch } from "react-icons/fa";
import Icons from "./Icons";
// BsStarFill;
const SearchBar = () => {
  return (
    <div className="container px-4">
      <div className="overflow-y-scroll">
        <form className="mb-4">
          <input
            className="inputs  rounded py-2 mr-4"
            placeholder="Search..."
          />
          <i className="fa fa-search"></i>
        </form>
        <Icons />
      </div>
    </div>
  );
};

export default SearchBar;
