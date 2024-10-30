import React from "react";
import Image from "next/image";
import { CommitteeMembers } from "../services/data";

const page = () => {
  return (
    <section className="flex flex-col">
      <div>
        <h1 className="text-[40px] font-extrabold text-center">
          Committee of World Bushido Federation
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {CommitteeMembers.map((committee, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] min-h-[500px] mx-1 lg:mx-10 my-10"
          >
            <div>
              <Image
                width={300}
                height={300}
                src={committee.committeePicture}
                alt="committee member photo"
                className="w-full min-h-[320px] max-h-[320px]"
              />
            </div>
            <div className="bg-slate-800 mt-10 p-4 text-center">
              <h3 className="font-extrabold">{committee.commiteName}</h3>
              <h3 className="text-amber-400">{committee.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
