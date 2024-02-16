import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  imagePath: string;
  imgWidth: number;
  imgHeight: number;
};

export default function Card({
  title,
  imagePath,
  imgWidth,
  imgHeight,
  description,
}: CardProps) {
  return (
    <div className="shadow-md my-10 text-center p-10 flex items-center flex-col gap-4 rounded-md">
      {/* Card Img And Title */}
      <div className="flex flex-col gap-4">
        <Image
          alt=""
          className="mx-auto bg-green-400 rounded-full"
          src={imagePath}
          height={imgHeight}
          width={imgWidth}
        />
        <h1 className="font-bold text-2xl mr-2 text-green-500">{title}</h1>
      </div>

      <div className="flex mb-5">
        <p className="leading-5 text-gray-600">{description}</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="bg-green-400 px-4 py-2 rounded-md text-white ">
          <Link href="/">Learn More</Link>
        </div>
        <div className="bg-rose-500/80 px-4 py-2 rounded-md text-white ">
          <Link href="/">Learn More</Link>
        </div>
      </div>
    </div>
  );
}
