"use client";

import Icon from "@components/icon";
import { FolderOpenIcon } from "@heroicons/react/24/solid";
import api from "@libraries/api";
import { Accordion, AccordionItem } from "@nextui-org/react";
import cn from "@utilities/cn";
import Link from "next/link";

type Props = {
  name: string;
  snippets: Awaited<
    ReturnType<typeof api.server.get.collections>
  >[0]["snippets"];
  count: number;
};

const Collection = ({ name, snippets, count }: Props) => {
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
        title={
          <div className="flex items-center justify-between">
            <span>{name}</span>
            <span>{count}</span>
          </div>
        }
        startContent={<Icon Element={FolderOpenIcon} className="h-4 w-4" />}>
        <div className="relative space-y-1 pl-2.5 pr-1">
          <div className="absolute -top-[18px] h-full w-[1px] bg-zinc-800" />
          {snippets.map((snippet, index) => (
            <div key={snippet.id} className="relative flex items-center gap-1">
              <div>
                <div className="relative h-[1px] w-4 bg-zinc-800" />
              </div>
              <Link
                href="#"
                className={cn(
                  "block w-full rounded bg-panel-secondary px-4 py-2 text-sm hover:bg-panel-tertiary",
                  {
                    "bg-panel-tertiary": index === 1,
                  },
                )}>
                {snippet.name}
              </Link>
            </div>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Collection;
