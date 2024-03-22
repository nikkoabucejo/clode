import React from "react";

type Props = {
  params: {
    spaceName: string;
    groupName: string;
    snippetId: string;
  };
};

const Snippet: Page<Props> = ({ params }) => {
  const { spaceName, groupName, snippetId } = params;
  
  return (
    <div>
      /portal/spaces/{spaceName}/{groupName}/snippets/{snippetId}
    </div>
  );
};

export default Snippet;
