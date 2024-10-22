import React from "react";
import Link from "next/link";
import { LandingPageButtonProps } from "../models/types";

const LandingPageButton: React.FC<LandingPageButtonProps> = ({
  description,
  linkTo,
}) => {
  return (
    <button className="w-[200px] p-[10px] text-center bg-slate-800 text-amber-400 transform skew-x-[-15deg] no-underline hover:bg-amber-400 hover:text-slate-800">
      <Link
        href={linkTo}
        className="block m-0 uppercase transform skew-x-[18deg]"
      >
        {description}
      </Link>
    </button>
  );
};

export default LandingPageButton;
