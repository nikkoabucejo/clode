"use client";

import Language from "@components/language";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { useParams } from "next/navigation";

const Navbar = () => {
  const { spaceId, collectionId, snippetId } = useParams<Params>();

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
        <BreadcrumbItem isDisabled>Space Name</BreadcrumbItem>
        <BreadcrumbItem className="capitalize" isDisabled>
          Collection Name
        </BreadcrumbItem>
        <BreadcrumbItem isDisabled>{snippetId}</BreadcrumbItem>
      </Breadcrumbs>
    </nav>
  );
};
export default Navbar;
