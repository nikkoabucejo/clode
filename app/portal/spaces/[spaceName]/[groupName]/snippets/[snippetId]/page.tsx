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

const Snippet: Page<Props> = () => {
  const encrypted = agent.encrypt("function add(a, b) {\n  return a + b;\n}");
  const decrypted = agent.decrypt(encrypted);

  return (
    <section>
      <Editor code={decrypted} />
    </section>
  );
};

export default Snippet;