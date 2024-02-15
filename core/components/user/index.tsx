"use client";

import React from "react";
import type { User as TUser } from "@prisma/client";
import { User as NextUIUser } from "@nextui-org/react";

type Props = {
  user: TUser;
};

const User = ({ user }: Props) => {
  return (
    <NextUIUser
      name={user.name}
      description={`@${user.username}`}
      avatarProps={{ src: user.image ?? "" }}
      className="rounded-base border border-white/10 bg-white/10 px-2 py-1"
    />
  );
};

export default User;
