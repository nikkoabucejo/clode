"use client";

import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Card } from "@nextui-org/react";

type Props = {
  source: string;
};

const Code = ({ source: _source }: Props) => {
  const [source, setCode] = useState(_source);
  return (
    <Card className="py-4">
      <CodeEditor
        value={source}
        language="jsx"
        placeholder="Please enter React code."
        onChange={(evn) => setCode(evn.target.value)}
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

export default Code;
