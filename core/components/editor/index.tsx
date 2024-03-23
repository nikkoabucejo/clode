"use client";

import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Card } from "@nextui-org/react";
import { type Snippet } from "@prisma/client";
import Icon from "@core/components/icon";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import handleCopyTextToClipboard from "@core/libraries/copy-clipboard";

type Props = {
  snippet: Snippet;
};

const Editor = ({ snippet }: Props) => {
  const [code, setCode] = useState(snippet.code);

  return (
    <Card className="relative space-y-2 border-line bg-panel-secondary px-4 pb-4 pr-12">
      <button
        className="absolute right-4 top-4 z-10"
        disabled={!code}
        onClick={(event) => {
          event.stopPropagation();
          handleCopyTextToClipboard(code, "Code Copied.");
        }}>
        <Icon Element={ClipboardIcon} className="text-white" />
      </button>
      <CodeEditor
        value={code}
        language="jsx"
        placeholder="Please enter code."
        onChange={(event) => setCode(event.target.value)}
        padding={15}
        className="p-0 placeholder:text-white"
        style={{
          backgroundColor: "transparent",
          color: "white",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />

      <div className="w-fit rounded text-xs text-gray-400">
        {code?.split("\n").length ?? 0} lines
      </div>
    </Card>
  );
};

export default Editor;
