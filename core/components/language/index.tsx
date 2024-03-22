import { Chip } from "@nextui-org/react";

type Props = {
  children: Children;
};

const Language = ({ children }: Props) => {
  return <Chip color="warning">{children}</Chip>;
};

export default Language;
