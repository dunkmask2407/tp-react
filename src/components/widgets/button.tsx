import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[17px]",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    white_A700_19: "bg-white-A700_19",
    indigo_A700: "bg-indigo-A700 text-white-A700",
    teal_300_19: "bg-teal-300_19 text-teal-300",
  },
  outline: {
    yellow_700: "border-yellow-700 border border-solid text-yellow-700",
    indigo_A700: "border-indigo-A700 border border-solid text-indigo-A700",
  },
} as const;
const sizes = {
  "9xl": "h-[57px] px-[35px] text-lg",
  "3xl": "h-[42px] px-2 text-base",
  "4xl": "h-[44px] px-2.5",
  md: "h-[32px] px-2.5",
  "7xl": "h-[50px] px-6 text-base",
  lg: "h-[34px] px-2.5 text-sm",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "lg",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
