"use client";
import { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";

type ParallaxProps = {
  backgroundImage: StaticImageData;
  overlayText: string;
};

const wbfhonduras: React.FC<ParallaxProps> = ({
  backgroundImage,
  overlayText,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-75"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
      <div className="relative z-10 text-white text-4xl font-bold text-center p-4">
        {overlayText}
      </div>
      <div className="absolute inset-0 bg-black opacity-40 z-0" />
    </div>
  );
};

export default wbfhonduras;
