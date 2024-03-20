import React from "react";

type Props = {
  fileName: string;
};

const Snippet = ({ fileName }: Props) => {
  return (
    <div className="hover:glass w-full rounded-base px-3 py-2 text-sm">
      {fileName}
    </div>
  );
};

export default Snippet;
