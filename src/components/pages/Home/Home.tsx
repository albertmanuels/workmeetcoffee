"use client";

import Card from "@/components/shared/Card";
import Jumbotron from "@/components/shared/Jumbotron";
import React, { useContext, useEffect, useRef, useState } from "react";
import { HomeContext } from "./context/HomeContext";

const cafeList = [
  {
    id: 10,
    name: "ABC Cafe",
    location: {
      city: "Jakarta",
    },
    rating: 4.5,
    price: {
      min: 20000,
      max: 100000,
    },
    menus: {
      beverages: true,
      meals: true,
      snacks: true,
    },
  },
  {
    id: 14,
    name: "Cosan Cafe",
    location: {
      city: "Yogyakarta",
    },
    rating: 4.8,
    price: {
      min: 18000,
      max: 50000,
    },
    menus: {
      beverages: true,
      meals: false,
      snacks: true,
    },
  },
  {
    id: 28,
    name: "XYZ Cafe",
    location: {
      city: "Jakarta",
    },
    rating: 4.2,
    price: {
      min: 18000,
      max: 50000,
    },
    menus: {
      beverages: true,
      meals: false,
      snacks: true,
    },
  },
  {
    id: 23,
    name: "Senja Cafe",
    location: {
      city: "Yogyakarta",
    },
    rating: 4.2,
    price: {
      min: 18000,
      max: 50000,
    },
    menus: {
      beverages: true,
      meals: false,
      snacks: true,
    },
  },
];

const Home = () => {
  const { searchValue } = useContext(HomeContext);

  const filteredCafe = cafeList.filter((cafe) =>
    cafe.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section className="layout">
      <Jumbotron />
      <div className="px-5 lg:px-0 pt-[24px]">
        <div className="grid grid-cols-cafe gap-4">
          {filteredCafe.map((cafe) => (
            <Card key={cafe.id} data={cafe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
