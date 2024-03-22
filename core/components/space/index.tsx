"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { PlusIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import Icon from "@components/icon";
import { convertedSpaceName, unconvertedSpaceName } from "@utilities/format";
import { useParams, useRouter } from "next/navigation";

const Space = () => {
  const router = useRouter();
  const { spaceName } = useParams();

  const name = spaceName.toString();

  return (
    <Dropdown classNames={{ content: "glass border" }}>
      <DropdownTrigger>
        <div className="grid grid-cols-3 items-center">
          <div className="grid h-10 w-10 place-items-center rounded-base bg-gray-300 bg-gradient-to-r from-emerald-400 to-cyan-400">
            <span className="text-lg font-semibold">
              {name[0].toUpperCase()}
            </span>
          </div>
          <span>{unconvertedSpaceName(name) || "Default"}</span>
          <Icon Element={ChevronUpDownIcon} className="ml-auto" />
        </div>
      </DropdownTrigger>

      <DropdownMenu
        className="rounded-base text-white"
        itemClasses={{
          base: [
            "rounded-base",
            "data-[hover=true]:glass",
            "data-[hover=true]:text-white",
          ],
        }}>
        <DropdownSection
          dividerProps={{
            className: "bg-white/30",
          }}>
          {spaces.map((space: (typeof spaces)[0]) => (
            <DropdownItem
              key={space.id}
              onClick={() =>
                router.push(`/portal/spaces/${convertedSpaceName(space.name)}`)
              }>
              {space.name}
            </DropdownItem>
          ))}
        </DropdownSection>

        <DropdownItem
          endContent={<Icon Element={PlusIcon} className="h-4 w-4" />}
          className="glass border">
          New
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Space;

const spaces = [
  { id: "unique-id-1", name: "Backend Wizard" },
  { id: "unique-id-2", name: "Venture" },
  { id: "unique-id-3", name: "Dev Studio" },
];
