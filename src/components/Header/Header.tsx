"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="shadow-sm">
        <nav className="layout flex justify-between py-4 px-4 lg:px-0">
          <Link href="/" className="text-lg font-medium">
            workmeetcoffee
          </Link>
          <div>
            <Link href="/contribute">contribute</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
