"use client";

import Language from "@components/language";
import type api from "@libraries/api";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

type Props = {
  space: Awaited<ReturnType<typeof api.server.get.space>>;
  collection: Awaited<ReturnType<typeof api.server.get.collection>>;
};

const Heading = ({ space, collection }: Props) => {
  return (
    <div className="space-y-4">
      <Breadcrumbs
        itemClasses={{
          separator: "px-2 text-white",
          item: "text-white",
        }}>
        <BreadcrumbItem isDisabled>{space.name}</BreadcrumbItem>
        <BreadcrumbItem className="capitalize" isDisabled>
          {collection.name}
        </BreadcrumbItem>
        <BreadcrumbItem isDisabled>Sample React Snippet</BreadcrumbItem>
      </Breadcrumbs>

      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold ">Sample React Snippet</h1>
          <Language>Javascript</Language>
        </div>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem
          doloribus similique ea excepturi, harum cum sapiente corporis error
          fugit aut doloremque fuga enim vel, iusto explicabo esse illo amet.
          Deleniti corrupti laborum similique earum modi minus a iure eaque
        </p>
      </div>
    </div>
  );
};
export default Heading;
