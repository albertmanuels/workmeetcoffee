"use client";

import RowWrapper from "@/components/shared/RowWrapper";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialValues = {
  name: "",
  location: "",
  socialmedia: "",
  beverage: false,
  meals: false,
  snacks: false,
  wifi: false,
  ac: false,
  socket: false,
  meetingRoom: false,
  indoor: false,
  outdoor: false,
  musholla: false,
  toilet: false,
  parkingCar: false,
  parkingMotorcycle: false,
};

const Contribute = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, isDirty, isValid },
  } = useForm({
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(initialValues);
    }
  }, [isSubmitSuccessful]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="layout mt-[80px] px-5 lg:px-0">
      <div className="w-full sm:w-[30rem] rounded-md border-[1px] border-stone-400  mx-auto p-5">
        <input
          {...register("name", {
            required: true,
          })}
          className=" w-full border-2 rounded-md focus:outline-amber-600 mb-4 py-1 px-3"
          placeholder="Nama Cafe"
        />
        <input
          {...register("location", {
            required: true,
          })}
          className=" w-full border-2 rounded-md focus:outline-amber-600 mb-4 py-1 px-3"
          placeholder="Lokasi"
        />
        <input
          {...register("socialmedia")}
          className=" w-full border-2 rounded-md focus:outline-amber-600 mb-4 py-1 px-3"
          placeholder="Sosial Media"
        />
        <div className="mb-5">
          <h4 className="text-lg">Menu</h4>
          <div className="flex justify-between flex-wrap">
            <RowWrapper className="align-center gap-2">
              <input
                {...register("beverage")}
                type="checkbox"
                className="border-2 rounded-md focus:border-amber-600 focus:outline-none py-1 px-3"
                name="beverages"
              />
              <label htmlFor="beverages">Minuman</label>
            </RowWrapper>
            <RowWrapper className="align-center gap-2">
              <input
                {...register("meals")}
                type="checkbox"
                className="border-2 rounded-md border-amber-600 focus:outline-none py-1 px-3"
                name="meals"
              />
              <label htmlFor="meals">Makanan Berat</label>
            </RowWrapper>
            <RowWrapper className="align-center gap-2">
              <input
                {...register("snacks")}
                type="checkbox"
                className="border-2 rounded-md border-amber-600 focus:outline-none py-1 px-3"
                name="snacks"
              />
              <label htmlFor="snacks">Makanan Ringan</label>
            </RowWrapper>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="text-lg">Fasilitas</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 flex-wrap">
            <RowWrapper className="align-center gap-2">
              <input
                {...register("wifi")}
                type="checkbox"
                className="border-2 rounded-md focus:border-amber-600 focus:outline-none py-1 px-3"
                name="wifi"
              />
              <label htmlFor="wifi">Wifi</label>
            </RowWrapper>
            <RowWrapper className="align-center gap-2">
              <input
                {...register("ac")}
                type="checkbox"
                className="border-2 rounded-md focus:border-amber-600 focus:outline-none py-1 px-3"
                name="ac"
              />
              <label htmlFor="ac">AC</label>
            </RowWrapper>
            <RowWrapper className="align-center gap-2">
              <input
                {...register("socket")}
                type="checkbox"
                className="border-2 rounded-md focus:border-amber-600 focus:outline-none py-1 px-3"
                name="socket"
              />
              <label htmlFor="socket">Stop Kontak</label>
            </RowWrapper>
            <RowWrapper className="align-center gap-2">
              <input
                {...register("meetingRoom")}
                type="checkbox"
                className="border-2 rounded-md focus:border-amber-600 focus:outline-none py-1 px-3"
                name="meetingRoom"
              />
              <label htmlFor="meetingRoom">Ruang rapat</label>
            </RowWrapper>
            <RowWrapper className="align-center gap-2">
              <input
                {...register("indoor")}
                type="checkbox"
                className="border-2 rounded-md focus:border-amber-600 focus:outline-none py-1 px-3"
                name="indoor"
              />
              <label htmlFor="indoor">Indoor</label>
            </RowWrapper>
            <RowWrapper className="align-center gap-2">
              <input
                {...register("outdoor")}
                type="checkbox"
                className="border-2 rounded-md focus:border-amber-600 focus:outline-none py-1 px-3"
                name="outdoor"
              />
              <label htmlFor="outdoor">Outdoor</label>
            </RowWrapper>
            <RowWrapper className="align-center gap-2">
              <input
                {...register("musholla")}
                type="checkbox"
                className="border-2 rounded-md focus:border-amber-600 focus:outline-none py-1 px-3"
                name="musholla"
              />
              <label htmlFor="musholla">Mushola</label>
            </RowWrapper>
            <RowWrapper className="align-center gap-2">
              <input
                {...register("toilet")}
                type="checkbox"
                className="border-2 rounded-md focus:border-amber-600 focus:outline-none py-1 px-3"
                name="toilet"
              />
              <label htmlFor="toilet">Toilet</label>
            </RowWrapper>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="text-lg">Parkir Kendaraan</h4>
          <div className="grid grid-cols-2 flex-wrap">
            <RowWrapper className="align-center gap-2">
              <input
                {...register("parkingCar")}
                type="checkbox"
                className="border-2 rounded-md focus:border-amber-600 focus:outline-none py-1 px-3"
                name="parking-car"
              />
              <label htmlFor="parking-car">Mobil</label>
            </RowWrapper>
            <RowWrapper className="align-center gap-2">
              <input
                {...register("parkingMotorcycle")}
                type="checkbox"
                className="border-2 rounded-md focus:border-amber-600 focus:outline-none py-1 px-3"
                name="parkingMotorcycle"
              />
              <label htmlFor="parkingMotorcycle">Motor</label>
            </RowWrapper>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="border-[1px] bg-gray-400 text-white rounded-md py-1 px-3"
            onClick={() => reset(initialValues)}
          >
            Reset
          </button>
          <button
            disabled={!isDirty || !isValid}
            type="button"
            className="border-[1px] bg-green-500 text-white rounded-md py-1 px-3 disabled:bg-slate-600 disabled:cursor-not-allowed"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
