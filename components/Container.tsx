import { HTMLAttributes } from "react";

const Container = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`grid grid-cols-4 pc:grid-cols-8 pc:gap-[40px] mx-auto max-w-[90%] prose dark:prose-invert ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
