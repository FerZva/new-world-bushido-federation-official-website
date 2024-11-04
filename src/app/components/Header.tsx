"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";
import WBFHeaderLogo from "../assets/logo.webp";
import { FaBagShopping } from "react-icons/fa6";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [collapse, setCollapse] = useState(true);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      <header className="hidden w-full lg:flex justify-between px-1 py-2 relative">
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
        </button>
        {/* Mobile Menu */}
        <div
          className={`flex justify-end flex-col fixed top-0 ${
            showMenu ? "left-[321px]" : "left-[0px]"
          } w-full min-h-screen bg-slate-900/5 z-50 transition-all`}
        >
          <div className="w-90% min-h-screen bg-slate-900 px-1 py-2">
            <div className="flex justify-between mb-6">
              <Link href="/">
                <Image
                  src={WBFHeaderLogo}
                  alt="World Bushido Federation header logo"
                />
              </Link>
              <IoClose
                className="text-white text-[30px]"
                onClick={handleShowMenu}
              />
            </div>
            <div className="flex flex-col px-2">
              <p className="flex items-center mb-2" onClick={handleCollapse}>
                World Bushido Federation&nbsp;
                {collapse ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
              </p>
              <div
                className={`flex flex-col ml-6 ${
                  collapse ? "hidden" : "block"
                } transition-all`}
              >
                <Link
                  href="/wbfhonduras"
                  className="mb-2"
                  onClick={handleShowMenu}
                >
                  World Bushido Federation Honduras
                </Link>
                <Link
                  href="/committee"
                  className="mb-2"
                  onClick={handleShowMenu}
                >
                  Committee
                </Link>
                <Link href="/about" className="mb-2" onClick={handleShowMenu}>
                  About World Bushido Federation
                </Link>
              </div>
              <Link
                href="/membership"
                className="mb-2"
                onClick={handleShowMenu}
              >
                Memberships
              </Link>
              <Link
                href="/promartialarts"
                className="mb-2"
                onClick={handleShowMenu}
              >
                Pro Martial Arts
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
