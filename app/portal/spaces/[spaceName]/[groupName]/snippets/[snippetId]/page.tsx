import Editor from "@components/editor";
import agent from "@libraries/agent";
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

  const encrypted = agent.encrypt("function add(a, b) {\n  return a + b;\n}");
  const decrypted = agent.decrypt(encrypted);

  console.log({ encrypted, decrypted });

  return (
    <section>
      <Editor code={decrypted} />
    </section>
  );
};

export default Snippet;
