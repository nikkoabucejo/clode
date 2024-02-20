import Space from "@components/space";
import User from "@components/user";
import api from "@libraries/api";
import React from "react";

const Sidebar = async () => {
  const user = await api.get.user();

  return (
    <div className="glass flex h-full w-full  max-w-[250px] flex-col gap-6 border-r px-8 py-6">
      <Space />
      <div className="mt-auto">{user && <User user={user} />}</div>
    </div>
  );
};

export default Sidebar;
