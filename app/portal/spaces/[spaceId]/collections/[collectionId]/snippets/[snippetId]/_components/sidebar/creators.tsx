"use client";

import Icon from "@core/components/icon";
import api from "@core/libraries/api/client";
import { FolderPlusIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Creators = () => {
  const [createDirectory, setCreateDirectory] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);

  const createCollection = api.create.collection;

  const router = useRouter()
  
  return (
    <div className="mb-2 flex flex-col gap-2">
      {/* buttons */}
      <div className="flex place-content-end items-center gap-2">
        <button
          onClick={() => setCreateDirectory(!createDirectory)}
          onBlur={(e) => {
            if (e.relatedTarget !== inputRef.current) {
              setCreateDirectory(false);
              setInputValue("");
            }
          }}
          className={`rounded p-1 ${createDirectory ? "bg-white/10" : "hover:bg-white/10"}`}>
          <Icon Element={FolderPlusIcon} />
        </button>
      </div>

      {createDirectory && (
        <div
          className="flex items-center gap-2 pl-3"
          tabIndex={-1}
          role="button"
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              await createCollection({
                name: inputValue,
                space: {
                  connect: { id: "fcc7bf7f-079d-44c7-8db0-0e217a286bc3" },
                },
              });
              setInputValue("");
              setCreateDirectory(false);
              router.refresh()
            }
          }}>
          <Icon Element={FolderIcon} className="text-yellow-500" />
          <input
            type="text"
            ref={inputRef}
            className="w-full border border-line bg-black p-1 text-sm focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Creators;
