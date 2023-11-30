import { HomeContext } from "@/components/pages/Home/context/HomeContext";
import React, { forwardRef, useContext } from "react";

const SearchBar = ({ className = "" }: { className?: string }) => {
  const { searchValue, setSearchValue } = useContext(HomeContext);

  return (
    <input
      className={`w-[400px] py-2 px-3 text-sm rounded-md ${className}`}
      type="text"
      placeholder="Search by name or city"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default forwardRef(SearchBar);
