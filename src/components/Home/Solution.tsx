import * as React from "react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import websiteBuilding from "@/assets/images/websiteBuilding.svg";
import SectionSplit from "./SectionSplit";

interface CheckmarkItemProps {
  children: React.ReactNode;
}

const CheckmarkItem: React.FC<CheckmarkItemProps> = ({ children }) => (
  <div className="mt-4 flex items-center gap-4">
    <CircleCheckBig width={16} height={16} color="green" />
    <div className="max-md:max-w-full">{children}</div>
  </div>
);

const Solution: React.FC = () => {
  const checkmarkItems = [
    {
      text: "Stand out from the crowd with a unique design",
    },
    {
      text: "Optimize your website for better search engine rankings",
    },
    {
      text: "Enhance user experience with a user-friendly interface",
    },
  ];

  return (
    <>
      <section className="flex flex-col justify-center px-0 md:px-16">
        <div className="max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="my-auto flex flex-col self-stretch text-base leading-6 max-md:mt-10 max-md:max-w-full">
                <div className="font-semibold text-secondary max-md:max-w-full">
                  We have solutions
                </div>
                <h2 className="mt-4 text-2xl font-bold leading-[58px] max-md:max-w-full max-md:leading-[54px] md:text-4xl">
                  Unlock Your Business Potential with a Professional Website
                </h2>
                <p className="mt-6 text-lg font-extrabold leading-7 text-neutral-400 max-md:max-w-full">
                  A professional website can transform your business by
                  attracting customers, enhancing brand visibility, and boosting
                  sales. Our manual website building service ensures a standout
                  online presence
                </p>
                {checkmarkItems.map(({ text }, index) => (
                  <CheckmarkItem key={index}>{text}</CheckmarkItem>
                ))}
              </div>
            </div>
            <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
              <Image
                src={websiteBuilding}
                alt="website building"
                width={1920}
                height={2000}
                className="aspect-[0.96] w-full grow max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <SectionSplit />
    </>
  );
};

export default Solution;
