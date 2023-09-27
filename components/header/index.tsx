import Link from "next/link";
import HeaderContainer from "./HeaderContainer";
import HeaderList from "./HeaderList";
import { HeaderItem, HeaderItemFull } from "./HeaderItem";
import { NavList, NavItem } from "~/components/nav";
import bio from "~/bio";
import ThemeToggler from "~/components/ThemeToggler";
import MenuIcon from "@mui/icons-material/Menu";
import useToggle from "~/hooks/useToggle";

const Header = () => {
  const [isOpen, toggle] = useToggle();
  const mobileNavStyle =
    "absolute top-full px-0 flex-col pc:px-4 inset-x-0 pc:static pc:flex";

  return (
    <HeaderContainer className="relative">
      <HeaderList>
        <HeaderItem>
          <Link href="/">
            <h3 className="cursor-pointer m-0">{bio.username}</h3>
          </Link>
        </HeaderItem>
        <HeaderItem className={`${isOpen ? mobileNavStyle : "hidden"} pc:flex`}>
          <NavList className="flex-col pc:flex-row">
            <NavItem href="/resume">이름</NavItem>
          </NavList>
        </HeaderItem>
        {/* <HeaderItemFull>
          <ThemeToggler />
        </HeaderItemFull> */}
        <HeaderItemFull className="pc:hidden flex-0">
          <button
            className="my-0 w-8 h-8 flex items-center justify-center mr-0"
            onClick={toggle}
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </HeaderItemFull>
      </HeaderList>
    </HeaderContainer>
  );
};

export { HeaderContainer, HeaderList, HeaderItem, HeaderItemFull };

export default Header;
