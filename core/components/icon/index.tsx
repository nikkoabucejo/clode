import cn from "@utilities/cn";
import React from "react";

type IconProps = {
  Svg: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
};

const Icon = ({ Svg, className = "" }: IconProps) => {
  const style = cn("w-6 h-6", className);

  return <Svg className={style} />;
};

export default Icon;
