import React from "react";
import Link from "next/link";
import { pages } from "../services/routes";

const Header = () => {
  return (
    <header>
      <nav>
        {pages.map((pages) => (
          <Link key={pages.id} href={pages.pageRoute}>
            {pages.pageName}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
