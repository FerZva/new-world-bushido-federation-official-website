import React from "react";
import Image from "next/image";
import FooterLogo from "../assets/WORLD-BUSHIDO.png";
import Link from "next/link";
import { pages } from "../services/routes";

const Footer = () => {
  return (
    <footer className="flex justify-start p-8 flex-wrap">
      <div className="max-w-[300px] h-auto mx-10">
        <Image
          src={FooterLogo}
          width={300}
          height={500}
          alt="World Bushido Federation Logo"
          className="w-full"
        />
      </div>
      <div className="flex justify-between flex-wrap p-10 max-w-[500px] w-full">
        <div className="flex flex-col text-left">
          <h4 className="text-lg">
            <strong>Navigation</strong>
          </h4>
          <nav className="flex flex-col text-left">
            {pages.map((page) => (
              <Link key={page.id} href={page.pageRoute} className="my-2">
                {page.pageName}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="text-lg">
            <strong>Social media</strong>
          </h4>
        </div>
      </div>
      <div className="w-full mt-10 text-center">
        <p>© 2024 World Bushido Federation. All rights reserved.</p>
        <p>
          <strong>About this website:</strong> built with React & Next.js (App
          Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion,
          React Email & Resend, Vercel hosting.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
