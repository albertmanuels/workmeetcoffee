"use client";

import Card from "@/components/shared/Card";
import Jumbotron from "@/components/shared/Jumbotron";
import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "./context/HomeContext";
import { Payload } from "@/components/types";
import { Data } from "../Detail/Detail.types";

const Home = () => {
  const { searchValue } = useContext(HomeContext);
  const [cafeList, setCafeList] = useState<Array<Data>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const filteredCafe = cafeList.filter(
    (cafe) =>
      cafe.cafe_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      cafe.location.toLowerCase().includes(searchValue.toLowerCase())
  );
  const getNotionData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/coffeeshop");
      const data = await response.json();

      setCafeList(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNotionData();
  }, []);

  return (
    <section className="h-[calc(100vh - 70px)])">
      <Jumbotron />
      <div className="pt-[24px]">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-5 lg:px-0">
          {filteredCafe.map((cafe) => (
            <Card className="" key={cafe.uid} data={cafe} />
          ))}
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
    </section>
  );
};

export default Home;
