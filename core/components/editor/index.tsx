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
    <Card className="glass space-y-2 p-4">
      <button
        className="ml-auto flex cursor-pointer items-center gap-1 text-gray-400"
        onClick={() => handleCopyTextToClipboard(source, "Code Copied.")}>
        <Icon Element={ClipboardIcon} />
        <span className="text-sm">Copy</span>
      </button>
      <CodeEditor
        value={source}
        language="jsx"
        placeholder="Please enter React code."
        onChange={(evn) => setSource(evn.target.value)}
        padding={15}
        className="-mt-2 placeholder:text-white"
        style={{
          backgroundColor: "transparent",
          color: "white",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />

      {source && (
        <div className="w-fit rounded-base text-xs text-gray-400">
          {source.split("\n").length} lines
        </div>
      )}
    </Card>
  );
};

export default Editor;
