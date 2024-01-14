import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <Link href="/detail/starbucks">
      <div className="w-full border border-[2px] rounded-md p-4">
        <h5 className="text-md font-semibold mb-1">Starbucks</h5>
        <p className="text-sm mb-2">Jakarta Selatan</p>
        <div className="flex flex-wrap gap-2">
          <p className="text-sm text-gray-500">Beverages</p>
          <p className="text-sm text-gray-500">Meals</p>
          <p className="text-sm text-gray-500">Snacks</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
