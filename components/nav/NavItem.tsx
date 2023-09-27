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
        className={`flex justify-start pc:justify-end m-0 py-2 pc:py-0 px-4 pc:last:pr-0 border-b-2 pc:border-b-0 cursor-pointer ${activeStyle} ${
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
