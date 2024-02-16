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
import Typography from "@components/typography";

const Organization = () => {
  return (
    <Dropdown classNames={{ content: "glass border" }}>
      <DropdownTrigger>
        <div className="flex w-full items-center justify-between">
          <div className="h-8 w-8 rounded-base bg-gray-300" />
          <div className="flex flex-col">
            <Typography>Master</Typography>
            <Typography heading="subtitle" className="text-gray-400">
              Organization
            </Typography>
          </div>
          <Icon Element={ChevronUpDownIcon} />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        className="rounded-base"
        itemClasses={{
          base: [
            "rounded-base",
            "data-[hover=true]:glass",
            "data-[hover=true]:text-white",
          ],
        }}>
        <DropdownSection
          showDivider
          dividerProps={{
            className: "bg-white/30",
          }}>
          <DropdownItem>Clode</DropdownItem>
          <DropdownItem>Sandbox</DropdownItem>
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

export default Organization;
