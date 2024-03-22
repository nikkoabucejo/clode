"use client";

import Icon from "@components/icon";
import { FolderOpenIcon } from "@heroicons/react/24/solid";
import api from "@libraries/api";
import { Accordion, AccordionItem } from "@nextui-org/react";
import cn from "@utilities/cn";
import Link from "next/link";

type Props = {
  title: string;
  snippets: Awaited<
    ReturnType<typeof api.server.get.collections>
  >[0]["snippets"];
};

const Collection = ({ title, snippets }: Props) => {
  return (
    <Accordion
      itemClasses={{
        trigger: "p-1",
        title: "text-white text-sm",
        indicator: "-rotate-180",
        startContent: "text-white",
        content: "overflow-y-scroll max-h-unit-96",
      }}>
      <AccordionItem
        key={1}
        title={title}
        startContent={<Icon Element={FolderOpenIcon} className="h-4 w-4" />}>
        <div className="space-y-1 pl-8">
          {snippets.map((snippet, index) => (
            <Link
              key={snippet.id}
              href="#"
              className={cn(
                "hover:bg-panel-tertiary block w-full rounded bg-panel-secondary px-4 py-2 text-sm",
                {
                  "bg-panel-tertiary": index === 1,
                },
              )}>
              {snippet.title}
            </Link>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Collection;
