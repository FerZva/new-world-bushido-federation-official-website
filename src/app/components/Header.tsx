import React from "react";
import Link from "next/link";
import { pages } from "../services/routes";
import Image from "next/image";
import WBFHeaderLogo from "../assets/logo.webp";
import { FaBagShopping } from "react-icons/fa6";
import LandingPageButton from "./LandingPageButton";

const Header = () => {
  return (
    <header className="w-full flex justify-between px-1 py-2">
      <div>
        <Image src={WBFHeaderLogo} alt="World Bushido Federation header logo" />
      </div>
      <nav className="flex items-center">
        {pages.map((pages) => (
          <Link key={pages.id} href={pages.pageRoute} className="mx-2">
            {pages.pageName}
          </Link>
        ))}
      </nav>
      <div className="flex items-center">
        <FaBagShopping className="mx-1" />
        <button className="mx-1">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
