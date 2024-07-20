import Image from "next/image";
import React from "react";
import { BsGithub, BsLinkedin, BsMoonFill } from "react-icons/bs";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-green-400 to-transparent rounded-full overflow-hidden w-72 h-72 mx-auto">
        <Image alt="" src={"/hero_img.webp"} layout="fill" objectFit="cover" />
      </div>

      <div className="mt-7 text-center p-10 text-wrap">
        <h1 className="text-5xl py-2 font-bold text-green-400">Halla!!</h1>
        <h2 className="text-2xl font-semibold py-2 text-gray-600 ">
          Web & Game Developer
        </h2>
        <p className="text-gray-800 leading-6 mt-10 w-3/4 mx-auto ">
          Freelancer providing services for programming needs.
          <br />
          Join me below and let's get cracking!
        </p>
      </div>
      <div className="flex text-green-400 justify-center items-center gap-16 text-3xl">
        <Link href="https://github.com/sjuhyeon" target="_blank">
          <BsGithub />
        </Link>
      </div>
    </>
  );
}
