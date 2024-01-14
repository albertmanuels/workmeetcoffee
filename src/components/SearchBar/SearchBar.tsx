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
  }, [searchTemp, searchValue, setSearchValue]);

  return (
    <div className="relative w-fit h-fit mb-4">
      <input
        type="text"
        className="w-[600px] border-2 border-zinc-500 rounded-full mx-auto py-3 px-5 focus:outline-black"
        placeholder="cari coffee shop favoritmu"
        value={searchValue}
        onChange={(e) => setSearchTemp(e.target.value)}
      />
      <Search className="absolute top-1/2 right-5 transform -translate-y-1/2" />
    </div>
  );
};

export default SearchBar;
