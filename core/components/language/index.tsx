import { Chip } from "@nextui-org/react";

type Props = {
  children: Children;
};

const Language = ({ children }: Props) => {
  return (
    <Chip className="glass border px-2 py-1 text-sm font-medium text-white">
      {children}
    </Chip>
  );
};

export default Language;
