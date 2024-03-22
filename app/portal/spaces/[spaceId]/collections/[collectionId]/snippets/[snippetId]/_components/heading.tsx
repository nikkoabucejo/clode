"use client";

import Language from "@components/language";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

const Heading = () => {
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
        <BreadcrumbItem isDisabled>Space Name</BreadcrumbItem>
        <BreadcrumbItem className="capitalize" isDisabled>
          Collection Name
        </BreadcrumbItem>
        <BreadcrumbItem isDisabled>DDQWDQW</BreadcrumbItem>
      </Breadcrumbs>
    </nav>
  );
};
export default Heading;
