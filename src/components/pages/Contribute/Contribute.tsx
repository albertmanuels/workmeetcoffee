"use client";
import Checkbox from "@/components/shared/Input/Checkbox/Checkbox";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialValues = {
  cafe_name: "",
  location: "",
  instagram: "",
  beverages: false,
  meals: false,
  snacks: false,
  wifi: false,
  air_conditioner: false,
  sockets: false,
  meetingRoom: false,
  openTime: "",
  closedTime: "",
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
          {...register("cafe_name", {
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
          {...register("instagram")}
          className=" w-full border-2 rounded-md focus:outline-amber-600 mb-4 py-1 px-3"
          placeholder="Sosial Media"
        />
        <div className="mb-5">
          <h4 className="text-lg">Menu</h4>
          <div className="flex justify-between flex-wrap">
            <Checkbox register={register} name="beverages" label="Minuman" />
            <Checkbox register={register} name="meals" label="Makanan Berat" />
            <Checkbox
              register={register}
              name="snacks"
              label="Makanan Ringan"
            />
          </div>
        </div>
        <div className="mb-5">
          <h4 className="text-lg">Fasilitas</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 flex-wrap">
            <Checkbox register={register} name="wifi" label="Wifi" />
            <Checkbox register={register} name="air_conditioner" label="AC" />
            <Checkbox register={register} name="sockets" label="Stop Kontak" />
            <Checkbox
              register={register}
              name="meetingRoom"
              label="Ruang Rapat"
            />
            <Checkbox register={register} name="indoor" label="Indoor" />
            <Checkbox register={register} name="outdoor" label="Outdoor" />
            <Checkbox register={register} name="musholla" label="Mushola" />
            <Checkbox register={register} name="toilet" label="Toilet" />
          </div>
        </div>
        <div className="mb-5">
          <h4 className="text-lg">Parkir Kendaraan</h4>
          <div className="grid grid-cols-2 flex-wrap">
            <Checkbox
              register={register}
              name="parkingCar"
              label="Parkir Mobil"
            />
            <Checkbox
              register={register}
              name="parkingMotorcycle"
              label="Parkir Motor"
            />
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
