"use client";

import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Card } from "@nextui-org/react";

const Code = () => {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  return (
    <Card className="py-4">
      <CodeEditor
        value={code}
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
