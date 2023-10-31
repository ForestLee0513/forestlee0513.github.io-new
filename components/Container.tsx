import { HTMLAttributes } from "react";

const Container = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`grid grid-cols-4 pc:grid-cols-8 pc:gap-[40px] mx-auto w-[90%] pc:max-w-[1920px] prose dark:prose-invert auto-rows-max pc:w-[90%])] ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
