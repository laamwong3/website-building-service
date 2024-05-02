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
import { useLenis } from "@studio-freight/react-lenis";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const lenis = useLenis();

  const handleLinkClick = (link: string) => {
    lenis?.scrollTo(link, { offset: -64 });
    setIsMenuOpen(false);
  };
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="2xl"
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Image
            src={web3in}
            alt="web3in logo"
            height={50}
            className="cursor-pointer"
            onClick={() => {
              handleLinkClick("#hero");
            }}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              color="foreground"
              className="cursor-pointer text-xl"
              underline="hover"
              onClick={() => {
                handleLinkClick(item.link);
              }}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="primary"
            variant="ghost"
            onClick={() => {
              handleLinkClick("#contact");
            }}
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              color="foreground"
              className="cursor-pointer text-2xl"
              underline="hover"
              onClick={() => {
                handleLinkClick(item.link);
              }}
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
    link: "#service",
  },
  {
    id: "designs",
    label: "Designs",
    link: "#design",
  },
  {
    id: "pricing",
    label: "Pricing",
    link: "#pricing",
  },
  {
    id: "faq",
    label: "FAQ",
    link: "#faq",
  },
  {
    id: "contact",
    label: "Contact Us",
    link: "#contact",
  },
];
