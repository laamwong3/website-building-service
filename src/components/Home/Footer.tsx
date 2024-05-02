"use client";
import * as React from "react";
import web3in from "@/assets/icons/web3in.webp";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";

function Footer() {
  const lenis = useLenis();
  const handleLinkClick = (link: string) => {
    lenis?.scrollTo(link, { offset: -64 });
  };

  return (
    <footer className="flex flex-col items-center pb-16 max-md:flex-wrap md:px-16">
      <div className="flex w-full flex-col items-center justify-center gap-5 max-md:max-w-full max-md:flex-wrap">
        <Image
          src={web3in}
          alt="web3in logo"
          height={50}
          className="cursor-pointer"
          onClick={() => {
            handleLinkClick("#hero");
          }}
        />
        <div className="my-auto flex gap-2 max-md:flex-wrap">
          <div className="flex flex-1 gap-5">
            {socialIcons.map(({ Icon, link }, index) => (
              <Link href={link} key={index} target="_blank">
                <Icon
                  size={24}
                  className="cursor-pointer hover:text-primary-400"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 h-px w-full shrink-0 border-b-[0.5px] border-white opacity-40 max-md:mt-10" />
      <div className="mt-8 flex justify-between gap-5 self-center text-sm leading-5 max-md:flex-wrap">
        <div>2024 WEB3IN. All right reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;

const socialIcons = [
  {
    Icon: Facebook,
    link: "#",
  },
  {
    Icon: Instagram,
    link: "#",
  },
  {
    Icon: Twitter,
    link: "#",
  },
  {
    Icon: Linkedin,
    link: "#",
  },
  {
    Icon: Youtube,
    link: "#",
  },
];
