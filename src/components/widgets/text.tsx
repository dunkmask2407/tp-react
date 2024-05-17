import React from "react";

const sizes = {
  "2xl": "text-lg font-normal",
  "3xl": "text-xl font-normal",
  xl: "text-base font-normal",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-300 font-epilogue ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
