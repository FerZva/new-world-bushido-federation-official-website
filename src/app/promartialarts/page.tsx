import React from "react";
import proMartialArtsLogo from "../assets/proMartialArtsLogo.png";
import Image from "next/image";

const promartialarts = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <Image
          src={proMartialArtsLogo}
          alt="Pro Martail Arts Logo"
          width={1000}
          height={1000}
          className="max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default promartialarts;
