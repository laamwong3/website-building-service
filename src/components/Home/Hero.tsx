import * as React from "react";
import { Button } from "@nextui-org/button";

const Hero = () => {
  return (
    <section className="relative flex min-h-[900px] flex-col items-center justify-center overflow-hidden p-20 max-md:px-5">
      <h1 className="w-[768px] text-center text-6xl font-bold leading-[67px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Build Beautiful Websites with Ease
      </h1>
      <p className="mt-6 w-[768px] text-center text-lg leading-7 max-md:max-w-full">
        The service offers a manual website building platform that is
        user-friendly and highly customizable, allowing users to create unique,
        standout websites that accurately reflect their brand and vision.
      </p>
      <div className="mt-6 flex items-start gap-4 whitespace-nowrap pt-4 text-base leading-6">
        <Button
          className="justify-center border border-solid px-6 py-3 max-md:px-5"
          variant="solid"
          color="primary"
        >
          Get Started
        </Button>
        <Button
          className="justify-center border border-solid px-6 py-3 max-md:px-5"
          variant="bordered"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Hero;
