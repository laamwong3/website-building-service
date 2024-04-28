import * as React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@nextui-org/button";
import designSprint from "@/assets/images/designSprint.svg";
import responsive from "@/assets/images/responsive.svg";
import search from "@/assets/images/search.svg";

function Service() {
  return (
    <div className="-mx-6 flex flex-col items-center justify-center rounded-md bg-background bg-opacity-10 bg-clip-padding px-6 py-16 backdrop-blur-xl backdrop-filter md:mx-0 md:px-16">
      <div className="mt-8 text-center text-base font-semibold leading-6">
        service
      </div>
      <div className="mt-4 w-[768px] text-center text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Custom Website Design and SEO Optimization Services
      </div>
      <div className="mt-6 w-[768px] text-center text-lg leading-7 max-md:max-w-full">
        Our services include custom design, responsive layouts, and SEO
        optimization to help your website stand out and attract more visitors.
      </div>
      <div className="mt-20 justify-center self-stretch max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex w-[33%] flex-col max-md:ml-0 max-md:w-full ${
                index > 0 ? "ml-5" : ""
              }`}
            >
              <div className="flex grow flex-col text-center max-md:mt-10">
                <Image
                  src={feature.imageSrc}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="aspect-[1.69] w-full"
                />
                <div className="mt-8 text-3xl font-bold leading-10">
                  {feature.heading}
                </div>
                <div className="mt-6 text-base leading-6">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex items-center justify-between gap-5 whitespace-nowrap pt-4 text-base leading-6 max-md:mt-10">
        <Button variant="shadow" color="primary">
          Contact Us
        </Button>
        <Button variant="light" color="primary" endContent={<ChevronRight />}>
          Pricing
        </Button>
      </div>
    </div>
  );
}

export default Service;

const features = [
  {
    heading: "Website Development",
    description:
      "We create unique and visually appealing designs tailored to your brand.",
    imageSrc: designSprint,
  },
  {
    heading: "Responsive Layouts",
    description:
      "We ensure your website looks great on all devices and screen sizes.",
    imageSrc: responsive,
  },
  {
    heading: "SEO Optimization",
    description:
      "We optimize your website to improve its visibility in search engine results.",
    imageSrc: search,
  },
];
