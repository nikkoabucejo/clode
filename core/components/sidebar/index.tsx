import Space from "@components/space";
import type { User as TUser } from "@prisma/client";
import React from "react";
import User from "@components/user";

const Sidebar = async () => {
  return (
    <aside className="glass grid h-full w-full max-w-[250px]  grid-rows-[auto,1fr,auto]  gap-6 border-r px-8 py-6">
      <Space />
      <div>files</div>
      <User user={user} />
    </aside>
  );
};

export default Sidebar;

const user: TUser = {
  name: "John Doe",
  username: "johndoe",
  email: "johndoe@gmail.com",
  image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  id: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
  role: "USER",
  emailVerified: new Date(),
};
