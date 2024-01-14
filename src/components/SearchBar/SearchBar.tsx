"use client";

import { Search } from "lucide-react";
import React, {
  SetStateAction,
  useEffect,
  useState,
  type Dispatch,
} from "react";

type SearchBarProps = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};
const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
  const [searchTemp, setSearchTemp] = useState("");

  useEffect(() => {
    const debounce = () => {
      if (searchValue === searchTemp) {
        return false;
      }
      setSearchValue(searchTemp);
    };

    const toDebounce = setTimeout(() => {
      debounce();
    }, 500);

    return () => {
      clearTimeout(toDebounce);
    };
  }, [searchValue, setSearchValue, searchTemp]);

  return (
    <div className="relative w-full h-fit mb-4">
      <Search className="absolute top-1/2 left-2 transform -translate-y-1/2" />
      <input
        type="text"
        className="w-full border-2 border-zinc-500 rounded-lg mx-auto pl-[50px] py-2 px-4 focus:outline-black"
        placeholder="cari coffee shop favoritmu"
        value={searchTemp}
        onChange={(e) => setSearchTemp(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
