import React from "react";

const sizes = {
  "3xl": "text-lg font-semibold",
  "2xl": "text-base font-semibold",
  "4xl": "text-xl font-semibold",
  "7xl": "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  "8xl": "text-5xl font-semibold md:text-[44px] sm:text-[38px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "2xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-epilogue ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
