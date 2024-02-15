"use client";

import cn from "@utilities/cn";
import React, { ReactNode } from "react";

type HeadingSize = "body" | "title" | "headliner" | "subtitle";

type Props = {
  heading?: HeadingSize;
  children: ReactNode;
  className?: string;
};

const Typography = ({ heading = "body", children, className = "" }: Props) => {
  let Tag: keyof JSX.IntrinsicElements = "p";
  let fontSize = "text-base";

  switch (heading) {
    case "title":
      Tag = "h2";
      fontSize = "text-xl";
      break;
    case "headliner":
      Tag = "h1";
      fontSize = "text-headliner";
      break;
    case "subtitle":
      Tag = "h3";
      fontSize = "text-sm";
      break;
  }

  const style = cn(fontSize, className);

  return <Tag className={style}>{children}</Tag>;
};

export default Typography;
