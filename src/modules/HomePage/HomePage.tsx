"use client";

import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="py-12 px-4 md:px-0">
      <div className="layout">
        <div className="flex flex-col items-center mb-14">
          <h4 className="text-xl font-semibold mb-3">
            Mau ke coffee shop mana hari ini?
          </h4>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
