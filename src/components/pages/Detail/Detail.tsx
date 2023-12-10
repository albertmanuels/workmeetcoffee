"use client";

import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import IcMoney from "@/public/icons/ic-money.svg";
import IcLocation from "@/public/icons/ic-location.svg";
import IcClock from "@/public/icons/ic-clock.svg";
import IcDoor from "@/public/icons/ic-door.svg";
import IcMenu from "@/public/icons/ic-menu.svg";
import IcInstagram from "@/public/icons/ic-instagram.svg";

import RowWrapper from "@/components/shared/RowWrapper";
import { FACILITIES, initialData } from "./Detail.constants";
import type { Data } from "./Detail.types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const DetailCafePage = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<Data>(initialData);

  const [isLoading, setIsLoading] = useState(false);
  const slug = params.slug;
  const getCoffeeShopDetail = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL}/api/coffeeshop/by-slug/${slug}`
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);

      if (!response.ok) {
        throw Error();
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCoffeeShopDetail();
  }, []);

  return (
    <section className="layout mt-[80px] px-5 pb-5 lg:px-0">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Breadcrumb className="mb-[40px]" />
          <div className="mb-5">
            <h1 className="text-4xl font-semibold text-stone-900 mb-1">
              {data.cafe_name}
            </h1>
            <h5 className="text-md font-medium text-neutral-500 mb-5">
              {data.location}
            </h5>
            <RowWrapper className="gap-2 mb-4">
              <IcMoney />
              <p className="text-sm font-medium">
                IDR {data.price?.minPrice} - {data.price?.maxPrice}
              </p>
            </RowWrapper>
            <RowWrapper className="gap-2 mb-2">
              <IcLocation />
              <Link href="" className="text-sm font-medium">
                View Google Map
              </Link>
            </RowWrapper>
            <RowWrapper className="gap-2 mb-2">
              <IcClock />
              <p className="text-sm font-medium">
                {data.openTime} - {data.closedTime}
              </p>
            </RowWrapper>
            <RowWrapper className="gap-2 mb-2">
              <IcDoor />
              <p className="text-sm font-medium">
                {data.indoor && !data.outdoor && "Indoor"}
                {!data.indoor && data.outdoor && "Outdoor"}
                {data.indoor && data.outdoor && "Indoor - Outdoor"}
              </p>
            </RowWrapper>
            <RowWrapper className="gap-2">
              <IcMenu />
              <p className="text-sm font-medium">
                {data.menu?.beverages &&
                  !data.menu?.meals &&
                  !data.menu?.snacks &&
                  "Beverages"}
                {data.menu?.beverages && data.menu?.meals && data.menu?.snacks
                  ? "Beverages - Meals - Snacks"
                  : ""}
              </p>
            </RowWrapper>
          </div>
          <hr />
          <div className="my-5">
            <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
            <div className="flex gap-5 flex-wrap items-center">
              {FACILITIES.map((item) => (
                <RowWrapper key={item.name} className="gap-2">
                  <>{item.component}</>
                  <p>{item.name}</p>
                </RowWrapper>
              ))}
            </div>
          </div>
          <hr />
          <div className="my-5">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <RowWrapper className="gap-2">
              <IcInstagram />
              <p className="text-sm font-medium">{data.instagram}</p>
            </RowWrapper>
          </div>
        </>
      )}
    </section>
  );
};

export default DetailCafePage;
