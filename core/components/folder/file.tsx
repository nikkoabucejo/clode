import Link from "next/link";
import React from "react";

type Props = {
  fileName: string;
  href: string;
};

const File = ({ fileName, href }: Props) => {
  return (
    <Link href={href}>
      <div className="hover:glass w-full rounded-base px-3 py-2 text-sm">
        {fileName}
      </div>
    </Link>
  );
};

export default File;
