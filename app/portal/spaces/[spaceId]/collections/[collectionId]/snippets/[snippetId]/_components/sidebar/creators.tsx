"use client";

import Icon from "@core/components/icon";
import {
  CodeBracketSquareIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

const Creators = () => {
  const [createDirectory, setCreateDirectory] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);

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
          className={`rounded p-1 ${createDirectory? "bg-white/10": "hover:bg-white/10"}`}>
          <Icon Element={FolderPlusIcon} />
        </button>

        <button className="rounded p-1 hover:bg-white/10">
          <Icon Element={CodeBracketSquareIcon} />
        </button>
      </div>

      {createDirectory && (
        <div
          className="flex items-center gap-2 pl-3"
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              console.log("created", inputValue);
              setInputValue("");
              setCreateDirectory(false);
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
