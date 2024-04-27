import * as React from "react";
import Image from "next/image";

interface MyComponentProps {
  tagline?: string;
  heading?: string;
  description?: string;
  sections?: Array<{
    imageSrc: string;
    heading: string;
    description: string;
  }>;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  secondaryButtonIconSrc?: string;
}

function Service({
  tagline,
  heading,
  description,
  sections,
  primaryButtonText,
  secondaryButtonText,
  secondaryButtonIconSrc,
}: MyComponentProps) {
  return (
    <div className="flex flex-col items-center bg-white px-16 py-20 max-md:px-5">
      <div className="mt-8 text-center text-base font-semibold leading-6 text-black">
        {tagline}
      </div>
      <div className="mt-4 w-[768px] text-center text-5xl font-bold leading-[58px] text-black max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        {heading}
      </div>
      <div className="mt-6 w-[768px] text-center text-lg leading-7 text-black max-md:max-w-full">
        {description}
      </div>
      <div className="mt-20 justify-center self-stretch max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {sections?.map((section, index) => (
            <div
              key={index}
              className={`flex w-[33%] flex-col max-md:ml-0 max-md:w-full ${
                index > 0 ? "ml-5" : ""
              }`}
            >
              <div className="flex grow flex-col text-center text-black max-md:mt-10">
                <Image
                  src={section.imageSrc}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="aspect-[1.69] w-full"
                />
                <div className="mt-8 text-3xl font-bold leading-10">
                  {section.heading}
                </div>
                <div className="mt-6 text-base leading-6">
                  {section.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex items-start justify-between gap-5 whitespace-nowrap pt-4 text-base leading-6 text-black max-md:mt-10">
        <div className="justify-center border border-solid border-black px-6 py-3 max-md:px-5">
          {primaryButtonText}
        </div>
        <div className="mt-3 flex justify-center gap-2">
          <div>{secondaryButtonText}</div>
          <Image
            src={""}
            alt=""
            width={24}
            height={24}
            className="aspect-square w-6 shrink-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
