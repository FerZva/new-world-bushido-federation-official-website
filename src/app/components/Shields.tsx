"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
        {ShieldsLogo.map((shield, index) => (
          <Image
            src={shield.shield}
            alt="Shield Logo"
            width={150}
            height={150}
            placeholder="blur"
            className="hidden md:block m-4 filter grayscale"
            key={index}
          />
        ))}
        <div className="md:hidden w-full text-white py-8">
          <div className="container mx-auto px-4">
            {/* Slider */}
            <div>
              <Swiper
                modules={[Navigation]}
                slidesPerView={2.5}
                autoplay
                spaceBetween={30}
                loop={true}
                className="pb-8"
              >
                {ShieldsLogo.map((badge, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative">
                      <Image
                        src={badge.shield}
                        alt="Shield Logo"
                        width={100}
                        height={100}
                        quality={100}
                        className="w-full max-w-[481.33px] max-h-[586.55px] filter grayscale object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shields;
