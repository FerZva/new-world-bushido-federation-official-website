import React from "react";
import LandingPageButton from "../components/LandingPageButton";
const wbfhonduras = () => {
  return (
    <div className="w-full">
      <div className="w'full text-center">
        <h1 className="text-[40px] lg:text-[80px] font-extrabold">
          World Bushido Federation
        </h1>
        <h2 className="text-[45px] lg:text-[80px] font-extrabold bg-gradient-to-r from-rose-500 to-yellow-400 inline-block text-transparent bg-clip-text">
          Now in Honduras
        </h2>
        <p className="hidden mb-5 px-2 md:px-32 md:block lg:px-60">
          It is an international martial arts organization dedicated to
          preserving and promoting traditional Bushido principles, including
          honor, respect, and self-discipline. WBF brings together practitioners
          and enthusiasts of various martial arts disciplines from around the
          world, creating a community grounded in mutual respect and continuous
          personal development. With a commitment to high standards of training,
          competitive integrity, and cultural appreciation, the WBF organizes
          events, seminars, and tournaments that uphold the spirit of Bushido.
          Our mission is to inspire individuals through the martial arts to
          cultivate strength, character, and resilience, both on and off the
          mat. Join us in celebrating the art, discipline, and values that
          define the way of the warrior.
        </p>
        <p className="md:hidden mb-5 px-2">
          The World Bushido Federation (WBF) is an international martial arts
          organization focused on promoting traditional Bushido values like
          honor, respect, and discipline. Bringing together martial artists
          worldwide, WBF offers a community for training, competition, and
          personal growth. Join us in celebrating the spirit and discipline of
          the warrior’s path.
        </p>
        <LandingPageButton linkTo="/membership" description="Start now" />
      </div>
      <div>
        <h3>Change your life</h3>
      </div>
      <div>
        <h3 className="font-extrabold px-1 md:px-4 text-[30px] lg:text-[60px]">
          Why World Bushido Federation?
        </h3>
      </div>
    </div>
  );
};

export default wbfhonduras;
