"use client";

import Language from "@components/language";
import type api from "@libraries/api";
import {
  Avatar,
  AvatarGroup,
  BreadcrumbItem,
  Breadcrumbs,
} from "@nextui-org/react";

type Props = {
  space: Awaited<ReturnType<typeof api.server.get.space>>;
  collection: Awaited<ReturnType<typeof api.server.get.collection>>;
};

const Heading = ({ space, collection }: Props) => {
  return (
    <nav className="space-y-4">
      <AvatarGroup className="justify-start " max={10} size="sm">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      </AvatarGroup>

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
    </nav>
  );
};
export default Heading;
