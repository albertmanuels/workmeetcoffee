import Image, { StaticImageData } from "next/image";
import React from "react";

const Gallery = (props: { image: StaticImageData[] }) => {
  const { image } = props;

  return (
    <div className="grid md:grid-cols-4 md:grid-rows-2 gap-2">
      <div className="group aspect-h-5 aspect-w-4 col-span-2 row-span-2 overflow-hidden rounded-t-lg md:rounded-tr-none md:rounded-l-lg">
        <Image
          className="w-full h-full inset-0"
          src={image[0]}
          alt="sbux1"
          placeholder="blur"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="group aspect-h-[30] aspect-w-[20] col-span-1 overflow-hidden">
        <Image
          className="w-full h-full inset-0"
          src={image[1]}
          alt="sbux2"
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "center" }}
          color="transparent"
        />
      </div>
      <div className="group aspect-h-[30] aspect-w-[20] col-span-1 overflow-hidden md:rounded-tr-lg">
        <Image
          className="w-full h-full inset-0"
          src={image[2]}
          alt="sbux3"
          width={100}
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "center" }}
          color="transparent"
        />
      </div>
      <div className="group aspect-h-[30] aspect-w-[20] col-span-1 overflow-hidden rounded-bl-lg md:rounded-none ">
        <Image
          className="w-full h-full inset-0"
          src={image[3]}
          alt="sbux4"
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "center" }}
          color="transparent"
        />
      </div>
      <div className="group aspect-h-[30] aspect-w-[20] col-span-1 overflow-hidden rounded-br-lg">
        <Image
          className="w-full h-full inset-0"
          src={image[3]}
          alt="sbux4"
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "center" }}
          color="transparent"
        />
      </div>
    </div>
  );
};

export default Gallery;
