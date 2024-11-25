"use client";
import React from "react";
import { ShieldsLogo } from "@/app/services/data";
import Image from "next/image";

const Shields = () => {
  return (
    <div className="flex flex-col justify-center w-full-p-8">
      <div className="flex justify-center flex-wrap py-8 sm:px-4 lg:px-40 md:px-32 bg-slate-800">
        <div className="w-full py-4">
          <h1 className="font-extrabold text-[40px] lg:text-[80px] text-center">
            OUR BADGES
          </h1>
        </div>
        {ShieldsLogo.map((shield) => (
          <Image
            src={shield.shield}
            alt="Shield Logo"
            width={150}
            height={150}
            placeholder="blur"
            className="m-4 filter grayscale"
          />
        ))}
      </div>
    </div>
  );
};

export default Shields;
