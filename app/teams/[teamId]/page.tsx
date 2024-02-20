import React from "react";

type Props = {
  params: {
    teamId: string;
  };
};

const TeamPage = ({ params }: Props) => {
  const { teamId } = params;
  return <div>TeamPage {teamId}</div>;
};

export default TeamPage;
