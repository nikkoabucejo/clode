import cn from "@core/utilities/cn";
import React from "react";

type IconProps = {
  Element: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
};

const Icon = ({ Element, className = "" }: IconProps) => {
  const style = cn("w-4 h-4", className);

  return <Element className={style} />;
};

export default Icon;
