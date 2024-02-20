import Team from "@components/team";
import User from "@components/user";
import api from "@libraries/api";
import React from "react";

const Sidebar = async () => {
  const user = await api.get.user();
  const teams = await api.get.memberships();

  return (
    <div className="glass flex h-full w-full  max-w-[250px] flex-col gap-6 border-r px-8 py-6">
      {/* teams */}
      {teams && <Team teams={teams} />}
      <div className="mt-auto">{user && <User user={user} />}</div>
    </div>
  );
};

export default Sidebar;
