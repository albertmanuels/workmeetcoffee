import Breadcrumb from "@/components/Breadcrumb";
import RowWrapper from "@/components/RowWrapper";
import { Check, DoorOpen, Map, Utensils, X } from "lucide-react";
import Image from "next/image";
import React from "react";

import Sbux1 from "@/assets/sbux1.jpeg";
import Sbux2 from "@/assets/sbux2.jpeg";
import Sbux3 from "@/assets/sbux3.jpeg";
import Sbux4 from "@/assets/sbux4.jpeg";
import Gallery from "@/components/Gallery";

const galley = [Sbux1, Sbux2, Sbux3, Sbux4];

const DetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <section className="pt-12 px-4 md:px-0">
      <div className="layout">
        <Breadcrumb className="mb-12" slug={params.slug} name="Starbucks" />
        <div className="flex flex-col-reverse md:flex-row gap-6 mb-6">
          <div className="">
            <h1 className="text-3xl text-stone-900 font-semibold">Starbucks</h1>
            <p className="text-md text-stone-700 mb-4">Jakarta Selatan</p>
            <RowWrapper className="gap-2">
              <Map />
              <p className="text-md text-stone-900 mb-3">View in Google Map</p>
            </RowWrapper>
            <RowWrapper className="gap-2 mb-3">
              <DoorOpen />
              <RowWrapper className="gap-4">
                <RowWrapper className="gap-1 items-center">
                  <p className="text-md text-stone-900">Indoor</p>
                  <Check color="green" size={16} />
                </RowWrapper>
                <RowWrapper className="gap-1 items-center">
                  <p className="text-md text-stone-900">Outdoor</p>
                  <X color="red" size={16} />
                </RowWrapper>
              </RowWrapper>
            </RowWrapper>
            <RowWrapper className="gap-2 mb-3">
              <Utensils />
              <RowWrapper className="gap-4">
                <RowWrapper className="gap-1 items-center">
                  <p className="text-md text-stone-900">Beverages</p>
                  <Check color="green" size={16} />
                </RowWrapper>
                <RowWrapper className="gap-1 items-center">
                  <p className="text-md text-stone-900">Meals</p>
                  <X color="red" size={16} />
                </RowWrapper>
                <RowWrapper className="gap-1 items-center">
                  <p className="text-md text-stone-900">Snacks</p>
                  <Check color="green" size={16} />
                </RowWrapper>
              </RowWrapper>
            </RowWrapper>
          </div>
          <div>
            <Gallery image={galley} />
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default DetailPage;
