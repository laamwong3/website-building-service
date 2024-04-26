"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import web3in from "@/assets/icons/web3in.webp";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Image src={web3in} alt="web3in logo" height={50} />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              href={item.link}
              color="foreground"
              className="text-xl"
              underline="hover"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="ghost">
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              href={item.link}
              color="foreground"
              className="text-2xl"
              underline="hover"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

const menuItems = [
  {
    id: "services",
    label: "Services",
    link: "#",
  },
  {
    id: "designs",
    label: "Designs",
    link: "#",
  },
  {
    id: "pricing",
    label: "Pricing",
    link: "#",
  },
  {
    id: "faq",
    label: "FAQ",
    link: "#",
  },
  {
    id: "contact",
    label: "Contact Us",
    link: "#",
  },
];
