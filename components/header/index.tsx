import Link from "next/link";
import HeaderContainer from "./HeaderContainer";
import HeaderList from "./HeaderList";
import { HeaderItem, HeaderItemFull } from "./HeaderItem";
import { NavList, NavItem } from "~/components/nav";

import Menu from "~/public/assets/icons/menu.svg";
import X from "~/public/assets/icons/x.svg";

import useToggle from "~/hooks/useToggle";

const Header = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <HeaderContainer className="relative">
      <HeaderList className="flex pc:flex-col pc:pt-[10px]">
        <HeaderItem>
          <Link href="/">
            {/* This div element is temporary element. this div will be change to svg icon very soon. */}
            <div className="w-[28px] h-[28px] my-0 bg-primary"></div>
          </Link>
        </HeaderItem>
        <HeaderItem
          className={`${
            isOpen
              ? "absolute top-full px-0 flex-col pc:px-4 inset-x-0 pc:static pc:flex"
              : "hidden"
          } pc:flex`}
        >
          <NavList className="flex-col pc:flex-row uppercase pc:mt-[10px]">
            <NavItem href="/blog">blog</NavItem>
            <NavItem href="/portfolio">portfolio</NavItem>
            <NavItem href="/resume">resume</NavItem>
            <NavItem href="/contact">contact</NavItem>
          </NavList>
        </HeaderItem>
        {/* <HeaderItemFull>
          <ThemeToggler />
        </HeaderItemFull> */}
        <HeaderItemFull className="pc:hidden flex-0">
          <button onClick={toggle} className="w-[28px] h-[28px]">
            {isOpen ? (
              <X className="w-full h-full" />
            ) : (
              <Menu className="w-full h-full" />
            )}
          </button>
        </HeaderItemFull>
      </HeaderList>
    </HeaderContainer>
  );
};

export { HeaderContainer, HeaderList, HeaderItem, HeaderItemFull };

export default Header;
