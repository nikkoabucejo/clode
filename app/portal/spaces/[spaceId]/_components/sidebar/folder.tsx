"use client";

import Icon from "@core/components/icon";
import api from "@core/libraries/api/client";
import cn from "@core/utilities/cn";
import Link from "next/link";
import { PlusIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/solid";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import API from "@core/types/api";

type Props = {
  name: string;
  collection: Awaited<ReturnType<API["server"]["get"]["collections"]>>[0];
};

const Folder = ({ name, collection }: Props) => {
  const { collectionId, snippetId } = useParams<Params>();
  const [isCreateSnippet, setIsCreateSnippet] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(new Set([collectionId]));

  const router = useRouter();

  return (
    <Accordion
      selectedKeys={selectedKeys}
      // @ts-ignore
      onSelectionChange={setSelectedKeys}
      itemClasses={{
        trigger: "p-1",
        title: "text-white text-sm",
        indicator: "-rotate-180",
        startContent: "text-white",
        content: "overflow-y-auto max-h-unit-96",
      }}>
      <AccordionItem
        key={collection.id}
        classNames={{
          content: "p-0 pb-6",
        }}
        title={
          <div
            className={cn(
              "group flex items-center justify-between gap-2 hover:opacity-100",
              {
                "opacity-40": collectionId !== collection.id,
              },
            )}>
            <span>{name}</span>
            <div
              role="button"
              className="relative z-10 hidden group-hover:block"
              onClick={(event) => {
                event.stopPropagation();
                setIsCreateSnippet(true);
              }}>
              <Icon Element={PlusIcon} />
            </div>
          </div>
        }
        startContent={
          <Icon
            Element={
              collectionId === collection.id ? FolderIcon : FolderOpenIcon
            }
          />
        }>
        <div className="relative space-y-1 pl-2.5 pr-1">
          <div className="absolute -top-[14px] h-full w-[1px] bg-zinc-800" />
          <div className="relative flex items-center gap-1">
            {isCreateSnippet && (
              <>
                <div className="relative h-[1px] w-4 bg-zinc-800" />
                <div
                  className="block w-full rounded bg-slate-800 px-4 py-2 text-sm"
                  role="button"
                  tabIndex={-1}
                  onKeyDown={async (e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      await api.client.create.snippet({
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
                    className="w-full bg-transparent focus:outline-none"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
          {collection.snippets.map((snippet) => (
            <div key={snippet.id} className="relative flex items-center gap-1">
              <div className="relative h-[1px] w-4 bg-zinc-800" />
              <Link
                href={`/portal/spaces/${collection.spaceId}/collections/${collection.id}/snippets/${snippet.id}`}
                className={cn(
                  "block w-full rounded p-1 text-sm hover:opacity-100",
                  {
                    "opacity-40": snippetId !== snippet.id,
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

export default Folder;
