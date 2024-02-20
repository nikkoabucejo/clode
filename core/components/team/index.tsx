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
import { Membership, Team as TTeam } from "@prisma/client";
import { useRouter } from "next/navigation";
import useStorage from "../../hooks/use-storage";

type Props = {
  teams: Membership &
    {
      team: TTeam;
    }[];
};

const Team = ({ teams }: Props) => {
  let initialTeam = teams[0].team.name;

  const [team, setTeam] = useStorage.local({ key: "team", value: initialTeam });

  const router = useRouter();

  return (
    <Dropdown classNames={{ content: "glass border" }}>
      <DropdownTrigger>
        <div className="flex w-full items-center  gap-4">
          <div className="h-8 w-10 rounded-base bg-gray-300" />
          <div className="flex w-full items-center">
            <div>
              <Typography>{team}</Typography>
              <Typography heading="subtitle" className="text-gray-400">
                Team
              </Typography>
            </div>
            <div className="ml-auto">
              <Icon Element={ChevronUpDownIcon} />
            </div>
          </div>
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
          {teams.map(({ team }) => (
            <DropdownItem
              key={team.id}
              onClick={() => {
                setTeam(team.name);
                router.push(`/teams/${team.id}?name=${team.name}`);
              }}>
              {team.name}
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

export default Team;
