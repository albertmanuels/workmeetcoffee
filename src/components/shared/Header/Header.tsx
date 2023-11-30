import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="px-5 xl:px-0 bg-white drop-shadow-md shadow-neutral-400">
        <div className="layout flex items-center justify-between h-[60px]">
          <Link className="text-xl font-semibold" href="/">
            workmeetcoffee.
          </Link>
          <nav>
            <ol className="flex gap-[16px]">
              <li>
                <Link href="/contribute">contribute</Link>
              </li>
              <li>
                <Link href="/about">about</Link>
              </li>
            </ol>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
