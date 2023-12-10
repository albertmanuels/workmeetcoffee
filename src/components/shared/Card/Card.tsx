import { Data } from "@/components/pages/Detail/Detail.types";
import Link from "next/link";
import React from "react";

const Card = ({ data, className }: { data: Data; className: string }) => {
  const formatString = (str: string) => {
    const result = str.replace(/ /g, "-").toLowerCase();
    return result;
  };

  const stringWithoutSpace = (str: string = "") => {
    const result = str.split(" ").join("").toLowerCase();
    return result;
  };

  return (
    <Link href={`/detail/${stringWithoutSpace(data.cafe_name)}`}>
      <div
        className={`w-full py-2 px-3 h-full min-h-[180px] border-[1px] rounded-md ${className} `}
      >
        <h2 className="text-lg font-semibold">{data.cafe_name}</h2>
        <p className="text-md font-light text-slate-400 mb-2">
          {data.location}
        </p>
        <p className="text-md font-normal text-slate-400 mb-[20px]">
          {`IDR ${data.price.minPrice} - ${data.price.maxPrice}`}
        </p>
        <div className="flex flex-wrap gap-2">
          <p className="text-sm font-semibold">
            {data.menu.beverages ? "Beverages" : null}
          </p>
          <p className="text-sm font-semibold">
            {data.menu.meals ? "Meals" : null}
          </p>
          <p className="text-sm font-semibold">
            {data.menu.snacks ? "Snacks" : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
