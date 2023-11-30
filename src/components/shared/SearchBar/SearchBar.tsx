import React from "react";

const SearchBar = () => {
  return (
    <input
      className="w-[400px] py-2 px-3 text-sm rounded-md"
      type="text"
      placeholder="Search by name or city"
    />
  );
};

export default SearchBar;
