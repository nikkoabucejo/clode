"use client";

import { Button as Btn } from "@nextui-org/react";
import cn from "../../utilities/cn";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ className, children }) => {
  return (
    <Btn className={cn("rounded-lg bg-blue-500", className)}>{children}</Btn>
  );
};

export default Button;
