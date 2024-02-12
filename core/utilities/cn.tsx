import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes));
};

export default cn;
