"use client";

import Icon from "@components/icon";
import { FolderOpenIcon } from "@heroicons/react/24/solid";
import { Accordion, AccordionItem } from "@nextui-org/react";

type Props = {
  title: string;
  hasFolderIcon?: boolean;
};

const Snippets = ({ title, hasFolderIcon = true }: Props) => {
  return (
    <Accordion
      itemClasses={{
        title: "text-white text-sm",
        indicator: "-rotate-180",
        startContent: "text-white",
      }}>
      <AccordionItem
        key={1}
        title={title}
        className="text-white"
        startContent={hasFolderIcon ? <Icon Element={FolderOpenIcon} className="h-5 w-5" /> : null}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        assumenda?
      </AccordionItem>
    </Accordion>
  );
};

export default Snippets;
