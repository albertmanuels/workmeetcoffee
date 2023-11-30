import Link from "next/link";
import React from "react";
import IcArrowRight from "@/public/icons/ic-arrow-right.svg";

const Breadcrumb = ({ className }: { className: string }) => {
  return (
    <nav className={`${className} flex`}>
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="text-sm">
            Home
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <IcArrowRight />
          <Link href="/detail/xyz-coffee" className="text-sm">
            XYZ Coffee
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
