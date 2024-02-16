import { Chip } from "@nextui-org/react";

type Props = {
  children: Children;
};

const Language = ({ children }: Props) => {
  return <Chip className="text-md px-2 py-1 font-medium">{children}</Chip>;
};

export default Language;
