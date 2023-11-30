import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";
import React from "react";
import IcWifi from "@/public/icons/ic-wifi.svg";
import IcParking from "@/public/icons/ic-parking.svg";
import IcSocket from "@/public/icons/ic-socket.svg";
import IcAirConditioner from "@/public/icons/ic-air-conditioner.svg";
import IcMeeting from "@/public/icons/ic-meeting.svg";
import IcMusholla from "@/public/icons/ic-musholla.svg";
import IcToilet from "@/public/icons/ic-toilet.svg";
import IcMoney from "@/public/icons/ic-money.svg";
import IcLocation from "@/public/icons/ic-location.svg";
import IcClock from "@/public/icons/ic-clock.svg";
import IcDoor from "@/public/icons/ic-door.svg";
import IcMenu from "@/public/icons/ic-menu.svg";
import IcInstagram from "@/public/icons/ic-instagram.svg";

import RowWrapper from "@/components/shared/RowWrapper";

const facilities = [
  {
    name: "Wifi",
    component: <IcWifi />,
  },
  {
    name: "Parking",
    component: <IcParking />,
  },
  {
    name: "Stop Kontak",
    component: <IcSocket />,
  },
  {
    name: "AC",
    component: <IcAirConditioner />,
  },
  {
    name: "Meeting Room",
    component: <IcMeeting />,
  },
  {
    name: "Musholla",
    component: <IcMusholla />,
  },
  {
    name: "Toilet",
    component: <IcToilet />,
  },
];

const DetailCafePage = ({ params }: { params: { cafeName: string } }) => {
  return (
    <section className="layout mt-[36px] px-5 lg:px-0">
      <Breadcrumb className="mb-[40px]" />
      <div className="mb-5">
        <h1 className="text-4xl font-semibold text-stone-900 mb-1">
          XYZ Coffee
        </h1>
        <h5 className="text-md font-medium text-neutral-500 mb-5">
          Setiabudi, Jakarta
        </h5>
        <RowWrapper className="gap-2 mb-4">
          <IcMoney />
          <p className="text-sm font-medium">IDR 18,000 - 80,000</p>
        </RowWrapper>
        <RowWrapper className="gap-2 mb-2">
          <IcLocation />
          <Link href="" className="text-sm font-medium">
            View Google Map
          </Link>
        </RowWrapper>
        <RowWrapper className="gap-2 mb-2">
          <IcClock />
          <p className="text-sm font-medium">09 AM - 10 PM</p>
        </RowWrapper>
        <RowWrapper className="gap-2 mb-2">
          <IcDoor />
          <p className="text-sm font-medium">Indoor - Outdoor</p>
        </RowWrapper>
        <RowWrapper className="gap-2">
          <IcMenu />
          <p className="text-sm font-medium">Beverages - Meals - Snacks</p>
        </RowWrapper>
      </div>
      <hr />
      <div className="my-5">
        <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
        <div className="flex gap-5 flex-wrap items-center">
          {facilities.map((item) => (
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
          <p className="text-sm font-medium">@xyzcoffee</p>
        </RowWrapper>
      </div>
    </section>
  );
};

export default DetailCafePage;
