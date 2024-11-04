import React from "react";
import Image from "next/image";
import WBFLogo from "../assets/logo.webp";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center">
        <div className=" text-center">
          <h1 className="text-[40px] lg:text-[80px] font-extrabold">
            Products of World Bushido Federation
          </h1>
          <p>
            Join to the largest martial artist community in the world, access to
            our library and local conferences, and stream, Validate your title
            worldwide.
          </p>
        </div>
        <div className="flex flex-wrap justify-center h-auto w-full">
          <div className="flex justify-start bg-rose-700 w-full max-w-[400px] text-left px-8 py-12 m-8">
            <div className="grid content-between  text-left w-full md:min-w-[293px] max-w-[293px] min-h-[460px]">
              <div className="w-full flex justify-between mb-10">
                <Image
                  width={300}
                  height={300}
                  src={WBFLogo}
                  alt="World Bushido Federation Logo"
                  className="max-w-10 max-h-10"
                />
              </div>
              <h2 className="text-[30px] font-bold mb-4">Membership</h2>
              <div className="justify-start items-center text-left mb-8">
                <h3 className="text-[50px] font-bold">45$</h3>
                <label className="text-gray-400 text-[20px]">per annual</label>
              </div>
              <p className="mb-8">
                Joun the largest martial artist community in the library and
                local conferences and stream. Validate your title worldwide
              </p>
              <Link
                href="https://buy.stripe.com/8wM5lW2wLa0rgV2bJe"
                className="min-w-full py-4 px-4 text-center text-white bg-slate-900 hover:bg-slate-800"
              >
                Add to cart
              </Link>
            </div>
          </div>

          <div className="flex flex-row justify-start bg-rose-700 w-full min-h-[467px] max-w-[400px] text-left px-8 py-12 m-8">
            <div className="grid content-between text-left w-full md:min-w-[293px] max-w-[293px] min-h-[460px]">
              <div className="w-full flex justify-between mb-10">
                <Image
                  width={300}
                  height={300}
                  src={WBFLogo}
                  alt="World Bushido Federation Logo"
                  className="max-w-10 max-h-10 w-full h-full"
                />
                <label className="">POPULAR CHOICE</label>
              </div>
              <h2 className="text-[30px] font-bold mb-4">Monthly Membership</h2>
              <div className="justify-start items-center text-left mb-8">
                <h3 className="text-[50px] font-bold">9.99$</h3>
                <label className="text-gray-400 text-[20px]">per month</label>
              </div>
              <p className="mb-8">
                Joun the largest martial artist community in the library and
                local conferences and stream. Validate your title worldwide
              </p>
              <Link
                href="https://buy.stripe.com/fZebKkc7la0rfQY5km"
                className="min-w-full py-4 px-4 text-center text-white bg-slate-900 hover:bg-slate-800"
              >
                Add to cart
              </Link>
            </div>
          </div>

          <div className="flex flex-row justify-start bg-rose-700 w-full min-h-[467px] max-w-[400px] text-left px-8 py-12 m-8">
            <div className="grid content-between text-left w-full md:min-w-[293px] max-w-[293px] min-h-[460px]">
              <div className="w-full flex justify-between mb-10">
                <Image
                  width={300}
                  height={300}
                  src={WBFLogo}
                  alt="World Bushido Federation Logo"
                  className="max-w-10 max-h-10"
                />
              </div>
              <h2 className="text-[30px] font-bold mb-4">
                Instructor certificate
              </h2>
              <div className="justify-start items-center text-left mb-8">
                <h3 className="text-[50px] font-bold">750$</h3>
                <label className="text-gray-400 text-[20px]">per month</label>
              </div>
              <p className="mb-8">
                Joun the largest martial artist community in the library and
                local conferences and stream. Validate your title worldwide
              </p>
              <Link
                href="https://buy.stripe.com/4gweWwb3hgoP7ks147"
                className="min-w-full py-4 px-4 text-center text-white bg-slate-900 hover:bg-slate-800"
              >
                Add to cart
              </Link>
            </div>
          </div>

          <div className="flex flex-row justify-start bg-rose-700 w-full min-h-[467px] max-w-[400px] text-left px-8 py-12 m-8">
            <div className="grid content-between text-left w-full md:min-w-[293px] max-w-[293px] min-h-[460px]">
              <div className="w-full flex justify-between mb-10">
                <Image
                  width={300}
                  height={300}
                  src={WBFLogo}
                  alt="World Bushido Federation Logo"
                  className="max-w-10 max-h-10"
                />
              </div>
              <h2 className="text-[30px] font-bold mb-4">
                Instructor certificate
              </h2>
              <div className="justify-start items-center text-left mb-8">
                <h3 className="text-[50px] font-bold">750$</h3>
                <label className="text-gray-400 text-[20px]">per month</label>
              </div>
              <p className="mb-8">
                Joun the largest martial artist community in the library and
                local conferences and stream. Validate your title worldwide
              </p>
              <Link
                href="https://buy.stripe.com/4gweWwb3hgoP7ks147"
                className="min-w-full py-4 px-4 text-center text-white bg-slate-900 hover:bg-slate-800"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>Stocks Challenges</div>
        <div>Stocks container</div>
      </div>
    </div>
  );
};

export default page;
