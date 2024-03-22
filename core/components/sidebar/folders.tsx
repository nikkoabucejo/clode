"use client";

import Folder from "@components/folder";
import File from "@components/folder/file";
import { useParams } from "next/navigation";
import React from "react";

const Folders = () => {
  const { spaceName } = useParams();

  return (
    <div>
      <section>
        <Folder title="Favorites">
          {files.map(({ id, name }) => (
            <File
              key={id}
              fileName={name}
              href={`/portal/spaces/${spaceName}/favorites/snippets/${id}`}
            />
          ))}
        </Folder>
      </section>

      <section>
        <Folder title="My Collection">
          {files.map(({ id, name }) => (
            <File
              key={id}
              fileName={name}
              href={`/portal/spaces/${spaceName}/collection/snippets/${id}`}
            />
          ))}
        </Folder>
      </section>

      <section>
        <Folder title="Snippets">
          {files.map(({ id, name }) => (
            <File
              key={id}
              fileName={name}
              href={`/portal/spaces/${spaceName}/all/snippets/${id}`}
            />
          ))}
        </Folder>
      </section>
    </div>
  );
};

export default Folders;

const files = [
  { name: "useState", id: "1" },
  { name: "useEffect", id: "2" },
  { name: "useRef", id: "3" },
  { name: "bubbleSort", id: "4" },
  { name: "quickSort", id: "5" },
];
