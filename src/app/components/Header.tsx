"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { pages } from "../services/routes";
import Image from "next/image";
import WBFHeaderLogo from "../assets/logo.webp";
import { FaBagShopping } from "react-icons/fa6";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className="hidden w-full lg:flex justify-between px-1 py-2">
        <Link href="/">
          <Image
            src={WBFHeaderLogo}
            alt="World Bushido Federation header logo"
          />
        </Link>
        <nav className="flex items-center">
          <Popover __demoMode className="z-[100]">
            <PopoverButton className="block text-white focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
              World Bushido Federation
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="divide-y z-50 divide-white/5 bg-rose-700 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]"
            >
              <div className="p-3">
                <Link
                  href="/wbfhonduras"
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                >
                  World Bushido Federation Honduras
                </Link>
                <Link
                  href="/committee"
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                >
                  Committee
                </Link>
                <Link
                  href="/about"
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                >
                  About World Bushido Federation
                </Link>
              </div>
            </PopoverPanel>
          </Popover>
          <Link href="/membership" className="mx-3">
            Memberships
          </Link>
          <Link href="/promartialarts" className="mx-3">
            Pro Martial Arts
          </Link>
        </nav>
        <div className="flex items-center">
          <FaBagShopping className="mx-1 text-[20px]" />
          <button className="mx-1 ml-4 bg-rose-700 px-4 py-2 text-center">
            Get Started
          </button>
        </div>
      </header>
      <header className="lg:hidden w-full flex justify-between px-1 py-2">
        <Link href="/">
          <Image
            src={WBFHeaderLogo}
            alt="World Bushido Federation header logo"
          />
        </Link>
        <button>
          <FiMenu className="text-white text-[30px]" onClick={handleShowMenu} />
          {showMenu && <MobileMenu />}
        </button>
      </header>
    </>
  );
};

export default Header;
