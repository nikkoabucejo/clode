"use client";

import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Card } from "@nextui-org/react";
import { type Code } from "@prisma/client";
import Icon from "@components/icon";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import handleCopyTextToClipboard from "@libraries/copy-clipboard";

type Props = {
  code: Code;
};

const Editor = ({ code }: Props) => {
  const [source, setSource] = useState(code.source);

  return (
    <Card className="glass p-4">
      <button
        className="ml-auto flex items-center gap-1"
        onClick={() => handleCopyTextToClipboard(source, "Code Copied.")}>
        <Icon Element={ClipboardIcon} className="text-white" />
        <span className="text-sm text-white">Copy</span>
      </button>
      <CodeEditor
        value={source}
        language="jsx"
        placeholder="Please enter React code."
        onChange={(evn) => setSource(evn.target.value)}
        padding={15}
        className="placeholder:text-white"
        style={{
          backgroundColor: "transparent",
          color: "white",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </Card>
  );
};

export default Editor;
