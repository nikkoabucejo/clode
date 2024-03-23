import api from "@core/libraries/api";
import Directory from "./directory";
import Icon from "@core/components/icon";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import User from "./user";

type Props = {
  spaceId: Params["spaceId"];
};

const Sidebar = async ({ spaceId }: Props) => {
  const collections = await api.server.get.collections(spaceId);
  const user = await api.server.get.user();

  return (
    <aside className="grid h-full w-[320px] grid-rows-[auto,1fr,auto] gap-8 border-r border-line bg-panel-secondary px-4 pb-4 pt-8">
      <div className="flex items-center">
        <span className="text-xl font-bold">My Space</span>
        <Icon Element={ChevronUpDownIcon} className="ml-auto" />
      </div>
      <Directory collections={collections} />
      <User user={user} />
    </aside>
  );
};

export default Sidebar;
