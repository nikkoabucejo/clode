"use client";

import Language from "@components/language";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { unconvertedSpaceName } from "@utilities/format";
import { useParams } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { spaceName, groupName, snippetId } = useParams();

  return (
    <nav className="space-y-1 py-3">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold ">useEffect</h1>
        <Language>Javascript</Language>
      </div>
      <Breadcrumbs
        itemClasses={{
          separator: "px-2 text-white",
          item: "text-white",
        }}>
        <BreadcrumbItem isDisabled>
          {unconvertedSpaceName(String(spaceName))}
        </BreadcrumbItem>
        <BreadcrumbItem className="capitalize" isDisabled>
          {groupName}
        </BreadcrumbItem>
        <BreadcrumbItem isDisabled>{snippetId}</BreadcrumbItem>
      </Breadcrumbs>
    </nav>
  );
};
export default Navbar;
