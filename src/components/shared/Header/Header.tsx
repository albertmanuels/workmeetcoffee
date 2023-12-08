import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className={`w-full fixed top-0 left-0 z-10 px-5 xl:px-0`}>
      <div className="w-full max-w-[60rem] mx-auto flex items-center justify-between h-[60px]">
        <Link className="text-xl font-semibold" href="/">
          workmeetcoffee.
        </Link>
        <nav>
          <ol className="flex gap-[16px]">
            <li>
              <Link href="/contribute">contribute</Link>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
