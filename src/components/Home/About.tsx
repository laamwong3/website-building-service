import * as React from "react";
import Image from "next/image";
import businessPlan from "@/assets/images/businessPlan.svg";

function About() {
  return (
    <div className="-mx-6 flex flex-col justify-center rounded-md bg-background bg-opacity-10 bg-clip-padding px-6 py-16 backdrop-blur-xl backdrop-filter md:mx-0 md:px-16">
      <div className="max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
            <Image
              src={businessPlan}
              alt="business plan"
              width={500}
              height={500}
              className="aspect-[0.96] w-full grow max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
            <div className="my-auto flex flex-col self-stretch max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-bold leading-10 max-md:max-w-full md:text-4xl">
                Building Websites That Empower Your Business and Delight Your
                Customers
              </div>
              <div className="mt-6 text-lg font-extrabold leading-7 text-neutral-400 max-md:max-w-full">
                Our company is dedicated to crafting beautiful, functional
                websites that drive business success. With our website building
                service, expect top-notch design, seamless functionality, and a
                user-friendly customer experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
