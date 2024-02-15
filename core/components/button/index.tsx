"use client";

import { Button as Btn } from "@nextui-org/react";
import cn from "@utilities/cn";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  classname?: string;
};

const Button = ({ children, classname = "" }: Props) => {
  const style = cn("py-1 px-2 text-md font-medium", classname);

  return <Btn className={style}>{children}</Btn>;
};

export default Button;
