"use client";

import Icon from "@core/components/icon";
import { FolderOpenIcon, PlusIcon } from "@heroicons/react/24/solid";
import clientApi from "@core/libraries/api/client";
import serverApi from "@core/libraries/api/server";
import { Accordion, AccordionItem } from "@nextui-org/react";
import cn from "@core/utilities/cn";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  name: string;
  collection: Awaited<ReturnType<typeof serverApi.get.collections>>[0];
};

const Folder = ({ name, collection }: Props) => {
  const count = collection._count.snippets;

  const [isCreateSnippet, setIsCreateSnippet] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const createSnippet = clientApi.create.snippet;

  const router = useRouter();

  return (
    <Accordion
      itemClasses={{
        trigger: "p-1",
        title: "text-white text-sm",
        indicator: "-rotate-180",
        startContent: "text-white",
        content: "overflow-y-auto max-h-unit-96",
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
          {collection.snippets.map((snippet, index) => (
            <div key={snippet.id} className="relative flex items-center gap-1">
              <div>
                <div className="relative h-[1px] w-4 bg-zinc-800" />
              </div>
              <Link
                href={`/portal/spaces/${collection.spaceId}/collections/${collection.id}/snippets/${snippet.id}`}
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

        <div className="flex flex-col gap-2">
          {isCreateSnippet && (
            <div
              className="flex items-center gap-2 pl-3"
              role="button"
              tabIndex={-1}
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  await createSnippet({
                    name: inputValue,
                    collection: { connect: { id: collection.id } },
                    language: "JavaScript",
                    code: "",
                    description: "",
                  });
                  setInputValue("");
                  setIsCreateSnippet(false);
                  router.refresh();
                }
              }}>
              <input
                type="text"
                className="w-full border border-line bg-black p-1 text-sm focus:outline-none"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          )}

          <button
            onClick={() => setIsCreateSnippet(true)}
            className="mt-2 flex w-full items-center gap-2 px-4 text-white/50">
            <Icon Element={PlusIcon} />
            <span className="text-sm">Add Snippet</span>
          </button>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Folder;
