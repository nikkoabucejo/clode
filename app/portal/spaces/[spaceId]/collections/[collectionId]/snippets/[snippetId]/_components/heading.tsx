"use client";

import Language from "@core/components/language";
import type api from "@core/libraries/api";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

type Props = {
  space: Awaited<ReturnType<typeof api.server.get.space>>;
  collection: Awaited<ReturnType<typeof api.server.get.collection>>;
  snippet: Awaited<ReturnType<typeof api.server.get.snippet>>;
};

const Heading = ({ space, collection, snippet }: Props) => {
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
        <BreadcrumbItem isDisabled>{snippet.name}</BreadcrumbItem>
      </Breadcrumbs>

      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold ">{snippet.name}</h1>
          <Language>{snippet.language}</Language>
        </div>

        <p className="text-sm">
          {snippet.description || "No description provided."}
        </p>
      </div>
    </div>
  );
};
export default Heading;
