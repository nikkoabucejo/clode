import { Chip } from "@nextui-org/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Language = ({ children }: Props) => {
  return <Chip className="text-md px-2 py-1 font-medium">{children}</Chip>;
};

export default Language;
