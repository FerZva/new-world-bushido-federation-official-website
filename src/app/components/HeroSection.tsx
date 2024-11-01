import Image from "next/image";
import React from "react";
import HeroCoverPhoto from "../assets/HeroPoster.jpg";
import LandingPageButton from "./LandingPageButton";

const HeroSection = () => {
  return (
    <section>
      <div className="p1">
        <h1 className="font-extrabold text-[40px] lg:text-[80px] text-center">
          WORLD BUSHIDO FEDERATION
        </h1>
      </div>
      <div className="w-full p-2 md:p-0">
        <Image
          src={HeroCoverPhoto}
          alt="World Bushido Federation Cover Photo"
          priority={true}
          placeholder="blur"
        />
      </div>
      <div className="w-full mb-8 p-1 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="font-extrabold text-[40px] lg:text-[80px] text-center leading-[90px]">
            CHANGE <br />
            YOUR LIFE
          </h2>
        </div>
        <div className="max-w-[400px]">
          <p className="mb-4">
            <i>
              &#34;So far Federations is full of Martial Artists a few Fighting
              stars, many Champion in different systems, so far we have been
              able to create a big family with the same beliefs, and the
              application of Warriors Code&#34;.
            </i>
          </p>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="mb-4">
              <p className="font-bold">Hanshi Jorge Borjas</p>
              <p className="font-bold">CEO & Founder of WBF</p>
            </div>
            <div className="m-auto md:m-0">
              <LandingPageButton
                description="Get Started"
                linkTo="/membership"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
