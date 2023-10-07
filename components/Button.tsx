import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(`
        uppercase
        w-full
        p-[10px]
        my-[20px]
        pc:p-[20px]
        pc:my-[40px]
        bg-primary
        text-textOpposite
        font-black
        hover:bg-hover
        active:bg-active
        transition-colors
        ${className}
    `)}
    >
      {children}
    </button>
  );
};

export default Button;
