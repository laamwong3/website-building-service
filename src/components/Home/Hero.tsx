"use client";
import * as React from "react";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

const Hero = () => {
  const lenis = useLenis();
  const handleLinkClick = (link: string) => {
    lenis?.scrollTo(link, { offset: -64 });
  };

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[868px] bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-center text-6xl font-bold leading-[67px] text-transparent max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
      >
        Own Your Beautiful Websites with Ease
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-6 w-[768px] text-center text-lg leading-7 text-neutral-400 max-md:max-w-full"
      >
        Our service provides user-friendly, customizable website building for
        unique, standout sites that reflect your brand and vision
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-6 flex items-start gap-4 whitespace-nowrap pt-4 text-base leading-6"
      >
        <Button
          className="justify-center border border-solid px-6 py-3 max-md:px-5"
          variant="solid"
          color="primary"
          onClick={() => {
            handleLinkClick("#contact");
          }}
        >
          Get Started
        </Button>
        <Button
          className="justify-center border border-solid px-6 py-3 max-md:px-5"
          variant="bordered"
          onClick={() => {
            handleLinkClick("#problem");
          }}
        >
          Learn More
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
