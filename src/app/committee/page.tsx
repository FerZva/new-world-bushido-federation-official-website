import React from "react";
import Image from "next/image";
import { CommitteeMembers } from "../services/data";

const page = () => {
  return (
    <section className="flex flex-col">
      <div>
        <h1>Committee of World Bushido Federation</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {CommitteeMembers.map((committee, index) => (
          <div
            key={index}
            className="bg-slate-800 max-w-[300px] min-h-[500px] m-10"
          >
            <div>
              <Image
                width={300}
                height={300}
                src={committee.committeePicture}
                alt="committee member photo"
                className="rounded-none"
              />
            </div>
            <div>
              <h3>{committee.commiteName}</h3>
              <h3>{committee.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
