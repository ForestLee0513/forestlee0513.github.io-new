import Link from "next/link";
import { useRouter } from "next/router";
import { HTMLAttributes } from "react";

interface INavItem extends HTMLAttributes<HTMLDivElement> {
  href: string;
}

const NavItem = ({ children, className, href, ...rest }: INavItem) => {
  const { pathname } = useRouter();
  const isSamePath = pathname === href;
  const activeStyle = isSamePath ? "font-bold underline" : "";

  return (
    <Link href={href}>
      <p
        className={`z-[1] bg-background flex justify-start pc:justify-end m-0 py-[20px] pc:py-0 pc:last:pr-0 last:border-b-2 pc:border-b-0 cursor-pointer ${activeStyle} ${
          className || ""
        }`}
        {...rest}
      >
        {children}
      </p>
    </Link>
  );
};

export default NavItem;
