"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User as NextUIUser,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import {
  Cog8ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Icon from "@core/components/icon";
import type api from "@core/libraries/api";

type Props = {
  user: Awaited<ReturnType<typeof api.server.get.user>>;
};

const User = ({ user }: Props) => {
  return (
    <Dropdown
      classNames={{ content: "border border-line bg-panel-tertiary w-full" }}>
      <DropdownTrigger>
        <NextUIUser
          name={user.name}
          description={user.email}
          avatarProps={{
            src: user.image ?? "",
          }}
          className="w-full justify-start rounded border border-line bg-panel-tertiary p-4"
        />
      </DropdownTrigger>
      <DropdownMenu
        classNames={{
          base: "rounded",
        }}
        itemClasses={{
          base: [
            "rounded",
            "data-[hover=true]:bg-panel-primary",
            "data-[hover=true]:text-white",
          ],
        }}>
        <DropdownItem startContent={<Icon Element={UserCircleIcon} />}>
          Profile
        </DropdownItem>
        <DropdownItem startContent={<Icon Element={Cog8ToothIcon} />}>
          Settings
        </DropdownItem>

        <DropdownItem
          startContent={<Icon Element={ArrowLeftStartOnRectangleIcon} />}
          className="text-red-500"
          onClick={() => signOut()}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default User;
