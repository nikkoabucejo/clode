import { Chip } from "@nextui-org/react";

type Props = {
  children: Children;
};

const Language = ({ children }: Props) => {
  return <Chip>{children}</Chip>;
};

export default Language;
