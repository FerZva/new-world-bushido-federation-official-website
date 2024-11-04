import React from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const MobileMenu = () => {
  return (
    <div className="flex justify-end flex-col absolute top-0 left-0 w-full min-h-screen bg-slate-900/5">
      <div className="w-90% min-h-screen bg-slate-900">
        <div className="flex justify-end mb-6">
          <button>X</button>
        </div>
        <div className="flex flex-col">
          <p>
            World dBushido Federation&nbsp;
            <MdKeyboardArrowDown />
          </p>
          <div className="flex flex-col">
            <Link href="/wbfhonduras">World Bushido Federation Honduras</Link>
            <Link href="/committee">Committee</Link>
            <Link href="/about">About World Bushido Federation</Link>
          </div>
          <Link href="/membership">Memberships</Link>
          <Link href="/promartialarts">Memberships</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
