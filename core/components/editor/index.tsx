"use client";

import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Card } from "@nextui-org/react";
import { type Snippet } from "@prisma/client";
import Icon from "@components/icon";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import handleCopyTextToClipboard from "@libraries/copy-clipboard";

type Props = {
  snippet: Snippet;
};

const Editor = ({ snippet }: Props) => {
  const [source, setSource] = useState(snippet.code);

  return (
    <Card className="glass gap-0 space-y-2 p-4">
      <button
        className="ml-auto flex cursor-pointer items-center gap-1 text-gray-400"
        disabled={!source}
        onClick={() => handleCopyTextToClipboard(source, "Code Copied.")}>
        <Icon Element={ClipboardIcon} />
        <span className="text-sm">Copy</span>
      </button>
      <CodeEditor
        value={source}
        language="jsx"
        placeholder="Please enter code."
        onChange={(evn) => setSource(evn.target.value)}
        padding={15}
        className="p-0 placeholder:text-white"
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
