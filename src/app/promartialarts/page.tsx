import React from "react";
import proMartialArtsLogo from "../assets/proMartialArtsLogo.png";
import Image from "next/image";
import fernandoVelasquezSensei from "../assets/fernandoVelazquezSensei.jpg";
import proMartialArtsAcademyPhoto from "../assets/proMartialArtsAcademyPhoto.jpg";
import { students } from "../services/data";

const promartialarts = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center">
        <div className="max-w-[50%] p-4 lg:py-16">
          <h1 className="text-center text-[80px] font-extrabold mb-8">
            PRO MARTIAL ARTS
          </h1>
          <p className="text-left">
            We are an academy dedicated to fostering discipline and excellence
            in martial arts and physical conditioning. Our mission is to
            positively influence the holistic development of each student,
            providing not only technical training but also life skills and
            values. Through our diverse programs, we aim to build strength,
            confidence, and resilience in both body and mind. We believe in the
            power of martial arts to inspire respect, responsibility, and
            perseverance, helping individuals of all ages unlock their potential
            and carry these virtues into every area of their lives.
          </p>
        </div>
        <Image
          src={proMartialArtsLogo}
          height={550}
          width={600}
          alt="Pro martial arts logo"
          className="m-auto"
        />
      </div>
      <div className="w-full">
        <Image
          src={proMartialArtsAcademyPhoto}
          width={2000}
          height={2000}
          quality={100}
          priority={true}
          alt="Pro Martial Arts Academy Photo"
          className="w-full"
        />
      </div>
      <div className="flex">
        <div className="max-w-[50%] px-1 lg:px-4">
          <h2 className="text-[80px] font-extrabold mb-8">Meet our Sensei</h2>
          <p>
            Sensei Fernando Velasquez is a distinguished martial arts master
            with a Black Belt, IV DAN, in Hawaiian Kenpo and a Black Belt, 1st
            DAN, in American Kenpo, along with a Black Belt in the Hong Gar
            style of Kung Fu. He is also a certified kickboxing master with a
            record as a Central American champion in both combat and kata across
            various prestigious circuits, including the Krane Circuit and NBL,
            with achievements spanning the United States, South America, Central
            America, and Mexico. In addition, he serves as an official
            instructor of police self-defense tactics and represents Honduras on
            the national sports karate team. As the Director of PRO MARTIAL ARTS
            Academies, Sensei Velasquez is dedicated to advancing martial arts
            education and instilling the values of discipline, respect, and
            excellence in every student he trains.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={fernandoVelasquezSensei}
            width={1500}
            height={2000}
            alt="Sensei Fernando Velasquez"
            className="w-[100%]"
          />
        </div>
      </div>
      <div className="mt-8">
        <div className="w-full">
          <h3 className="text-center text-[80px] font-extrabold">
            Students of Martial Pro Arts
          </h3>
        </div>
        <div className="flex justify-center flex-wrap">
          {students.map((student, index) => (
            <div key={index} className="m-4">
              {student.studentPhoto && (
                <Image
                  src={student.studentPhoto}
                  height={500}
                  width={500}
                  alt="Sudent from Pro Martial Arts Photo"
                  className="w-[500px] h-[666.41px]"
                />
              )}
              <div className="text-left max-w-[500px] mt-10 bg-slate-800 p-4">
                <p className="text-amber-400 mb-2 font-bold">
                  {student.studentName}
                </p>
                <p className="mb-4">
                  <strong>Birth:&nbsp;</strong>
                  {student.dateOfBirth}
                </p>
                <p className="mb-4">
                  <strong>Training time:&nbsp;</strong>
                  {student.trainingTime}
                </p>
                <p>{student.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default promartialarts;
