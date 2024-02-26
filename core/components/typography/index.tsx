import cn from "@utilities/cn";
type HeadingSize = "base" | "title" | "headliner" | "subtitle";

type Props = {
  heading?: HeadingSize;
  children: Children;
  className?: string;
};

const Typography = ({ heading = "base", children, className = "" }: Props) => {
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
