import React from "react";
import LandingPageButton from "../components/LandingPageButton";
import Image from "next/image";
import WbfHondurasCoverPhoto from "../assets/wbfHonduras.jpg";
import WBFLogo from "../assets/WORLD-BUSHIDO.png";
import PMALogo from "../assets/proMartialArtsLogo.png";

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
      <div className="w-full flex justify-center flex-col md:flex-row items-center my-20">
        <Image
          src={WBFLogo}
          width={1000}
          height={1000}
          className="w-full max-w-[300px] max-h-[380px]"
          alt="World Bushido Federation Logo"
        />
        <span className="text-[50px] font-extralight mx-10">X</span>
        <Image
          src={PMALogo}
          width={1000}
          height={1000}
          className="w-full max-w-[400px] max-h-[200px]"
          alt="Pro Martial Arts Logo"
        />
      </div>
      <div className="w-full h-auto">
        <Image
          src={WbfHondurasCoverPhoto}
          alt="World Bushido Federation Cover Photo"
          quality={80}
          priority={true}
          width={1500}
          height={1000}
          placeholder="blur"
          className="w-full max-w-[1000px] m-auto mt-10 shadow-2xl shadow-rose-700"
        />
      </div>
      <div>
        <h3 className="font-extrabold px-1 lg:px-2 md:px-4 text-[30px] lg:text-[60px] text-center">
          Why World Bushido Federation?
        </h3>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-[300px] flex flex-col bg-rose-700 p-4 mx-6 my-10">
            <h4 className="text-[20px] font-extrabold mb-4">
              Global Community and Cultural Exchange
            </h4>
            <p>
              By joining the World Bushido Federation in Honduras, you become
              part of a global network of martial artists, gaining access to
              international events, seminars, and tournaments. Experience
              cultural exchange, learn from top practitioners, and build
              lifelong connections with martial artists around the world.
            </p>
          </div>
          <div className="max-w-[300px] flex flex-col bg-rose-700 p-4 mx-6 my-10">
            <h4 className="text-[20px] font-extrabold mb-4">
              High-Quality Training Standards
            </h4>
            <p>
              WBF Honduras is committed to upholding the highest standards of
              martial arts training, emphasizing discipline, respect, and
              self-development. Our certified instructors provide rigorous
              training that blends traditional techniques with modern methods,
              ensuring growth for all skill levels.
            </p>
          </div>
          <div className="max-w-[300px] flex flex-col bg-rose-700 p-4 mx-6 my-10">
            <h4 className="text-[20px] font-extrabold mb-4">
              Focus on Personal Growth and Bushido Values
            </h4>
            <p>
              At WBF Honduras, martial arts is more than physical training; it’s
              a path to building character. We emphasize Bushido values—honor,
              loyalty, and resilience—empowering members to develop both mental
              and physical strength, which positively impacts every aspect of
              life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default wbfhonduras;
