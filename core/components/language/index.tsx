"use client";

import { Chip } from "@nextui-org/react";
import cn from "@utilities/cn";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  classname?: string;
};

const Language = ({ children, classname = "" }: Props) => {
  const style = cn("py-1 px-2 text-md font-medium", classname);

  return <Chip className={style}>{children}</Chip>;
};

export default Language;
