import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Breadcrumb = ({
  className,
  slug,
  name,
}: {
  className?: string;
  slug: string;
  name: string;
}) => {
  return (
    <nav className={`${className} flex align-middle`}>
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="text-sm">
            Home
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight color="gray" size={18} />
          <Link href={`/detail/${slug}`} className="text-sm">
            {name}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
