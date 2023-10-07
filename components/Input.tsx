import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  leftChildren?: JSX.Element;
  rightChildren?: JSX.Element;
  containerClassName?: string; // className of container div element.
  inputClassName?: string; // className of real input.
  resize?: boolean;
  rows?: number;
}

const Input = ({
  leftChildren,
  rightChildren,
  containerClassName = "",
  inputClassName = "",
  resize,
  ...restProps
}: InputProps) => {
  if (resize) {
    return (
      <div
        className={twMerge(
          `py-[6px] pc:py-[10px] border-b-[2px] flex ${containerClassName}`
        )}
      >
        {leftChildren}
        <textarea
          className={twMerge(
            `w-full bg-[transparent] [&:nth-child(n+2)]:pl-[10px] ${inputClassName} resize-y`
          )}
          {...restProps}
        />
        {rightChildren}
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        `py-[6px] pc:py-[10px] border-b-[2px] flex ${containerClassName}`
      )}
    >
      {leftChildren}
      <input
        className={twMerge(
          `w-full bg-[transparent] [&:nth-child(n+2)]:pl-[10px] ${inputClassName}`
        )}
        {...restProps}
      />
      {rightChildren}
    </div>
  );
};

export default Input;
