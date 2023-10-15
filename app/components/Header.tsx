"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Input,
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

export default function App() {
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

  return (
    <Navbar
      isBordered
      classNames={{
        wrapper: "px-5 py-10 max-w-[1300px] mx-auto",
      }}
    >
      <NavbarBrand className="gap-5">
        <Image src={logo} alt="Logo" />
        <p className="font-semibold text-xl text-blue-600">Summare</p>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 text-lg bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Explore by topic
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="engineering" startContent={icons.scale}>
              Engineering
            </DropdownItem>
            <DropdownItem key="computer_vision" startContent={icons.activity}>
              Computer Vision
            </DropdownItem>
            <DropdownItem key="electronics" startContent={icons.flash}>
              Electronics
            </DropdownItem>
            <DropdownItem key="llms" startContent={icons.server}>
              LLMs
            </DropdownItem>
            <DropdownItem key="climate" startContent={icons.user}>
              Climate
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
          <Link href="/login" className=" text-lg text-black font-semibold">
            Log In
          </Link>
        </NavbarItem>
        <NavbarItem>
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
      </NavbarContent>
    </Navbar>
  );
}
