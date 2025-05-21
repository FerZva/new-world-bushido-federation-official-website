"use client";
import React from "react";
import { useCart } from "../lib/cart";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const products = [
  { id: 1, name: "$50 Donation", price: 50, image: "/WORLD-BUSHIDO.png" },
  { id: 2, name: "$100 Donation", price: 100, image: "/WORLD-BUSHIDO.png" },
  { id: 3, name: "$200 Donation", price: 200, image: "/WORLD-BUSHIDO.png" },
  { id: 4, name: "$500 Donation", price: 500, image: "/WORLD-BUSHIDO.png" },
  { id: 5, name: "$800 Donation", price: 800, image: "/WORLD-BUSHIDO.png" },
  { id: 6, name: "$1000 Donation", price: 1000, image: "/WORLD-BUSHIDO.png" },
];

const Page = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-[40px] lg:text-[80px] font-extrabold">
          Make a donation
        </h1>
        <p className="px-8 lg:px-0">
          Join to the largest martial artist community in the world, access to
          our library and local conferences, and stream, Validate your title
          worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 md:p-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid place-items-stretch relative h-64 bg-rose-700"
            >
              <div className="p-4 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      ${product.price}
                    </h2>
                  </div>
                </div>
                <p className="text-left mt-10">
                  Make a donation of ${product.price} to World Bushido
                  Federation
                </p>

                <div className="mt-auto">
                  <Button
                    className="w-full rounded-none bg-slate-900 hover:bg-slate-800 text-white border-0 cursor-pointer"
                    onClick={() => {
                      addToCart(product);
                      toast({
                        title: "Added to cart",
                        description: `${product.name} has been added to your cart.`,
                        className: "bg-slate-900 text-white",
                        duration: 3000,
                        action: (
                          <ToastAction
                            altText="Go to cart"
                            className="hover:bg-slate-700 text-white"
                          >
                            <Link href="/cart">Go to cart</Link>
                          </ToastAction>
                        ),
                      });
                    }}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className=" text-center">
          <h1 className="text-[40px] lg:text-[80px] font-extrabold">
            Products of World Bushido Federation
          </h1>
          <p>
            Join to the largest martial artist community in the world, access to
            our library and local conferences, and stream, Validate your title
            worldwide.
          </p>
        </div> */}
        {/* <div className="flex flex-wrap justify-center h-auto w-full">
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
                <h3 className="text-[50px] font-bold">75$</h3>
                <label className="text-gray-400 text-[20px]">per annual</label>
              </div>
              <p className="mb-8">
                Joun the largest martial artist community in the library and
                local conferences and stream. Validate your title worldwide
              </p>
              <Link
                href="https://buy.stripe.com/7sI01CgnBb4vawE145"
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
        </div> */}
      </div>
      <div>
        {/* <div>Stocks Challenges</div>
        <div>Stocks container</div> */}
      </div>
    </div>
  );
};

export default Page;
