import Link from "next/link";
import React from "react";

type Props = {
  fileName: string;
  href: string;
  isActive: boolean;
};

const File = ({ fileName, href, isActive }: Props) => {
  return (
    <Link href={href}>
      <div
        className={` w-full rounded-base px-3 py-2 text-sm ${isActive ? "glass" : "hover:glass"}`}>
        {fileName}
      </div>
    </Link>
  );
};

export default File;
