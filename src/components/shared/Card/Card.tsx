import Link from "next/link";
import React from "react";

const Card = ({ data }: CardProps) => {
  const formatString = (str: string) => {
    const result = str.replace(/ /g, "-").toLowerCase();
    return result;
  };

  return (
    <Link href={`/detail/${formatString(data.name)}`}>
      <div className="w-min-[200px] px-4 py-3 border border-none rounded-md drop-shadow-md shadow-slate-300 shadow-md">
        <h2 className="text-lg font-semibold mb-5">{data.name}</h2>
        <div className="flex justify-between">
          <p className="text-md font-normal text-slate-400">
            {data.location.city}
          </p>
          <p className="text-md font-normal text-slate-400">{`${data.rating}/5`}</p>
        </div>
        <p className="text-md font-normal text-slate-400 mb-[20px]">
          {`IDR ${data.price.min} - ${data.price.max}`}
        </p>
        <div className="flex gap-2">
          <p className="text-sm font-semibold">
            {data.menus.beverages ? "Beverages" : ""}
          </p>
          <p className="text-sm font-semibold">
            {data.menus.meals ? "Meals" : ""}
          </p>
          <p className="text-sm font-semibold">
            {data.menus.snacks ? "Snacks" : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
