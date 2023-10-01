import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftChildren?: JSX.Element;
  rightChildren?: JSX.Element;
}

const Input = ({
  leftChildren,
  rightChildren,
  className,
  ...restProps
}: InputProps) => {
  return (
    <div className="p-[6px] pc:p-[10px] border-b-[2px] flex">
      {leftChildren}
      <input className="w-full bg-[transparent] pl-[10px]" {...restProps} />
      {rightChildren}
    </div>
  );
};

export default Input;
