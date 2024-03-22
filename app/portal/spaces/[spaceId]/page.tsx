import React from "react";

type Props = {
  params: {
    spaceId: string;
  };
};

const SpacePage: Page<Props> = ({ params }: Props) => {
  const { spaceId } = params;

  return <div>{spaceId}</div>;
};

export default SpacePage;
