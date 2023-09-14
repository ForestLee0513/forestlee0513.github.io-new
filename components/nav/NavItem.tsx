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
        className={`flex justify-start md:justify-end m-0 py-2 md:py-0 px-4 md:last:pr-0 bg-neutral-50 dark:bg-neutral-800 md:dark:bg-transparent md:bg-transparent border-b-2 md:border-b-0 cursor-pointer ${activeStyle} ${
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
