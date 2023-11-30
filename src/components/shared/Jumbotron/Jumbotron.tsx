"use client";

import React from "react";
import SearchBar from "../SearchBar";

const Jumbotron = () => {
  return (
    <section className="bg-center bg-no-repeat bg-cover  bg-[url('../assets/bg-coffee-shop.jpg')] h-[300px]">
      <div className="w-full flex justify-center items-center h-full backdrop-brightness-75">
        <SearchBar className="mx-5" />
      </div>
    </section>
  );
};

export default Jumbotron;
