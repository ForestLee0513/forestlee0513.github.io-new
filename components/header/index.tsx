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
    "absolute top-full px-0 flex-col md:px-4 inset-x-0 md:static md:flex";

  return (
    <HeaderContainer className="relative">
      <HeaderList>
        <HeaderItem>
          <Link href="/">
            <h3 className="cursor-pointer m-0">{bio.username}</h3>
          </Link>
        </HeaderItem>
        <HeaderItem className={`${isOpen ? mobileNavStyle : "hidden"} md:flex`}>
          <NavList className="flex-col md:flex-row">
            <NavItem href="/resume">이름</NavItem>
          </NavList>
        </HeaderItem>
        {/* <HeaderItemFull>
          <ThemeToggler />
        </HeaderItemFull> */}
        <HeaderItem className="md:hidden flex-0">
          <button
            className="my-0 w-8 h-8 flex items-center justify-center mr-0"
            onClick={toggle}
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </HeaderItem>
      </HeaderList>
    </HeaderContainer>
  );
};

export { HeaderContainer, HeaderList, HeaderItem, HeaderItemFull };

export default Header;
