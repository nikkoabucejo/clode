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
    <nav className="space-y-2">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold ">useEffect</h1>
        <Language>Javascript</Language>
      </div>
      <Breadcrumbs
        itemClasses={{
          separator: "px-2 text-white",
          item: "text-white",
        }}>
        <BreadcrumbItem isDisabled>{space.name}</BreadcrumbItem>
        <BreadcrumbItem className="capitalize" isDisabled>
          {collection.name}
        </BreadcrumbItem>
        <BreadcrumbItem isDisabled>DDQWDQW</BreadcrumbItem>
      </Breadcrumbs>
    </nav>
  );
};
export default Heading;
