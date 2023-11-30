import Card from "@/components/shared/Card";
import React from "react";

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

const Container = () => {
  return (
    <section className="px-5 lg:px-0 pt-[24px]">
      <div className="grid grid-cols-cafe gap-4">
        {cafeList.map((cafe) => (
          <Card key={cafe.id} data={cafe} />
        ))}
      </div>
    </section>
  );
};

export default Container;
