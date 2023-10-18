"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Input,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons";
import Image from "next/image";
import logo from "../../public/logo.png";
import SearchIcon from "./SearchIcon";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { default as NextLink } from "next/link";

type HeaderProps = {
  setSearchTerm?: (searchTerm: string) => void;
};

export default function Header({ setSearchTerm }: HeaderProps) {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const userInfo = Cookies.get("userInfo");
    if (userInfo) {
      const name = JSON.parse(userInfo);
      setUser(name?.user);
    }
  }, []);

  const menuItems = [<h1 key={1}>Hello</h1>];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const handleLogout = () => {
    Cookies.remove("userInfo");
    router.push("/login");
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  return (
    <Navbar
      isBordered
      classNames={{
        base: "py-3 px-5 max-w-screen lg:px-28",
        wrapper: "max-w-full",
      }}
      shouldHideOnScroll
    >
      <NavbarBrand className="gap-5">
        <Link href="/">
          <div className="flex gap-1">
            <Image src={logo} alt="Logo" />
            <p className="font-semibold text-2xl text-blue-600">Summare</p>
          </div>
        </Link>
        <Dropdown>
          <NavbarItem className="hidden xl:block">
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 text-lg font-medium bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Explore by topic
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Explore by topic"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              className=""
              key="engineering"
              startContent={icons.scale}
            >
              <NextLink
                href={{
                  pathname: "/article-category",
                  query: {
                    keyword: "Engineering",
                  },
                }}
                className=""
              >
                Engineering
              </NextLink>
            </DropdownItem>
            <DropdownItem key="computer_vision" startContent={icons.activity}>
              <NextLink
                href={{
                  pathname: "/article-category",
                  query: {
                    keyword: "Computervision",
                  },
                }}
              >
                Computer Vision
              </NextLink>
            </DropdownItem>
            <DropdownItem key="electronics" startContent={icons.flash}>
              <NextLink
                href={{
                  pathname: "/article-category",
                  query: {
                    keyword: "Electronics",
                  },
                }}
              >
                Electronics
              </NextLink>
            </DropdownItem>
            <DropdownItem key="llms" startContent={icons.server}>
              <NextLink
                href={{
                  pathname: "/article-category",
                  query: {
                    keyword: "LLMs",
                  },
                }}
              >
                LLMs
              </NextLink>
            </DropdownItem>
            <DropdownItem key="ai" startContent={icons.server}>
              <NextLink
                href={{
                  pathname: "/article-category",
                  query: {
                    keyword: "Artificialintelligence",
                  },
                }}
              >
                Artificial Intelligence
              </NextLink>
            </DropdownItem>
            <DropdownItem key="climate" startContent={icons.user}>
              <NextLink
                href={{
                  pathname: "/article-category",
                  query: {
                    keyword: "Climate",
                  },
                }}
              >
                Climate
              </NextLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Input
            classNames={{
              base: "sm:max-w-[100rem]",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 dark:bg-default-500/20",
            }}
            onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
            radius="none"
            variant="bordered"
            placeholder="Type to search..."
            size="md"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {user ? (
            <Dropdown>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 text-lg font-medium bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  {user}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="User menu"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  as={Button}
                  onClick={handleProfile}
                  key="profile"
                  startContent={icons.user}
                  className="text-left"
                  variant="light"
                >
                  Profile
                </DropdownItem>
                <DropdownItem
                  as={Button}
                  onClick={handleLogout}
                  className="text-left"
                  key="logout"
                  startContent={icons.lock}
                  variant="light"
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Link href="/login" className=" text-lg text-black font-semibold">
              Log In
            </Link>
          )}
        </NavbarItem>
        <NavbarItem className="hidden lg:block">
          <Button
            as={Link}
            color="primary"
            href="/under-construction"
            radius="sm"
            variant="solid"
          >
            Subscribe
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="px-10 py-5">
        {/* <NavbarMenuItem>
          <Link color="primary" href="/under-construction">
            Subscribe
          </Link>
        </NavbarMenuItem> */}
        <NavbarMenuItem>
          <Link color="primary" href="/under-construction">
            Subscribe
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="primary" href="/login">
            Login
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
