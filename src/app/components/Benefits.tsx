import React from "react";
import BenefitIlustration from "../assets/BenefitIlustration.jpg";
import Image from "next/image";
import { BenefitsData } from "../services/data";

const Benefits = () => {
  return (
    <section className="w-full py-20 flex flex-col bg-rose-700">
      <div className="">
        <h3 className="text-[80px] text-center font-extrabold leading-[70px] mb-8">
          BENEFITS OF <br /> MARTIAL ARTS
        </h3>
      </div>
      <div className="flex justify-start">
        <div className="w-full max-w-[800px] ml-8">
          <Image
            src={BenefitIlustration}
            alt="Martial Arts Student"
            className="w-full"
          />
        </div>
        <div className="text-left flex flex-col ml-28">
          {BenefitsData.map((card, index) => (
            <div key={index} className="max-w-[500px] mb-10">
              <div>
                <Image
                  src={card.icon}
                  alt="Benefit Icon"
                  className="border border-white p-5 mb-4"
                />
              </div>
              <div>
                <h4 className="text-3xl font-extrabold mb-4">{card.title}</h4>
              </div>
              <div>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
