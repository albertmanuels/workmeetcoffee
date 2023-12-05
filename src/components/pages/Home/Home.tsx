"use client";

import Card from "@/components/shared/Card";
import Jumbotron from "@/components/shared/Jumbotron";
import React, { useContext } from "react";
import { HomeContext } from "./context/HomeContext";
import { CAFE_LIST } from "./Home.constants";

const Home = () => {
  const { searchValue } = useContext(HomeContext);

  const filteredCafe = CAFE_LIST.filter((cafe) =>
    cafe.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section className="layout mt-[80px] pb-5 h-[calc(100vh - 70px)])">
      <Jumbotron />
      <div className="px-5 lg:px-0 pt-[24px]">
        <div className="grid grid-cols-mobile sm:grid-cols-desktop gap-4">
          {filteredCafe.map((cafe) => (
            <Card className="" key={cafe.id} data={cafe} />
          ))}
          {filteredCafe.length === 0 && <p>No Data</p>}
        </div>
      </div>
    </section>
  );
};

export default Home;
