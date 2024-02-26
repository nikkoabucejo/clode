"use client";

import React from "react";
import type { User as TUser } from "@prisma/client";
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
} from "@heroicons/react/24/solid";
import Icon from "@components/icon";

type Props = {
  user: TUser;
};

const User = ({ user }: Props) => {
  if (!user) return null;

  return (
    <Dropdown classNames={{ content: "glass border" }}>
      <DropdownTrigger>
        <NextUIUser
          name={user.name}
          description={user.email}
          avatarProps={{
            src: user.image ?? "",
            size: "sm",
          }}
          className="w-full rounded-base border border-white/10 bg-white/10 p-2"
        />
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
        <DropdownItem startContent={<Icon Element={Cog8ToothIcon} />}>
          Settings
        </DropdownItem>
        <DropdownItem
          startContent={<Icon Element={ArrowLeftStartOnRectangleIcon} />}
          className="glass border"
          onClick={() => signOut()}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default User;
