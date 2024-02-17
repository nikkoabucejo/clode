"use client";

import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Card } from "@nextui-org/react";
import { Code } from "@prisma/client";
import agent from "@libraries/agent";

type Props = {
  code: Code;
};

const Editor = ({ code }: Props) => {
  const [source, setSource] = useState(code.source);
  console.log(code);
  return (
    <Card className="py-4">
      <CodeEditor
        value={source}
        language="jsx"
        placeholder="Please enter React code."
        onChange={(evn) => setSource(evn.target.value)}
        padding={15}
        style={{
          backgroundColor: "#f5f5f5",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </Card>
  );
};

export default Editor;
