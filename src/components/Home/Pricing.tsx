import * as React from "react";
import Image from "next/image";

interface IFeature {
  imageURL: string;
  text: string;
}

const Feature: React.FC<IFeature> = ({ imageURL, text }) => (
  <div className="mt-4 flex gap-4 leading-[150%]">
    <Image src={imageURL} alt="" width={24} height={24} className="shrink-0" />
    <div>{text}</div>
  </div>
);

const Plan: React.FC<{
  planName: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: IFeature[];
}> = ({ planName, monthlyPrice, yearlyPrice, features }) => (
  <div className="flex w-full flex-col md:ml-0 md:w-[33%] lg:w-full">
    <div className="flex grow flex-col justify-between self-stretch border border-solid border-black p-8 text-base text-black md:mt-8 md:px-5">
      <div>
        <div className="flex flex-col items-center px-20 text-center text-xl font-bold md:px-5">
          <div className="leading-[140%]">{planName}</div>
          <div className="mt-2 leading-7">
            <span className="text-6xl leading-[67px] text-black">
              {" "}
              ${monthlyPrice}{" "}
            </span>
            <span className="text-3xl leading-10 text-black">/mo</span>
          </div>
          <div className="mt-2 text-base leading-6">
            or ${yearlyPrice} yearly
          </div>
        </div>

        {features.map((feature: IFeature, index: number) => (
          <Feature
            key={index}
            imageURL={feature.imageURL}
            text={feature.text}
          />
        ))}
      </div>
      <div className="mt-32 items-center justify-center border border-solid border-black bg-black px-6 py-3 leading-[150%] text-white md:mt-10 md:px-5">
        Get started
      </div>
    </div>
  </div>
);

const Pricing = () => (
  <section className="flex flex-col items-center bg-white px-16 py-20 md:px-5">
    <div className="mt-8 text-center text-base font-semibold leading-6 text-black md:max-w-full">
      Tagline
    </div>
    <div className="mt-4 flex w-[768px] max-w-full items-center justify-center px-16 text-center text-black md:px-5">
      <div className="flex flex-col md:max-w-full">
        <div className="self-center text-5xl font-bold leading-[57.6px] md:text-4xl">
          Pricing plan
        </div>
        <div className="mt-6 text-lg leading-7 md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </div>
      </div>
    </div>
    <div className="mt-20 self-stretch md:mt-10 md:max-w-full">
      <div className="flex flex-col gap-5 md:flex-row ">
        <Plan
          planName="Basic plan"
          monthlyPrice={19}
          yearlyPrice={199}
          features={[
            {
              imageURL: "/path/to/feature1.png",
              text: "Feature text goes here",
            },
            {
              imageURL: "/path/to/feature2.png",
              text: "Feature text goes here",
            },
            {
              imageURL: "/path/to/feature3.png",
              text: "Feature text goes here",
            },
          ]}
        />
        <Plan
          planName="Business plan"
          monthlyPrice={29}
          yearlyPrice={299}
          features={[
            {
              imageURL: "/path/to/feature4.png",
              text: "Feature text goes here",
            },
            {
              imageURL: "/path/to/feature5.png",
              text: "Feature text goes here",
            },
            {
              imageURL: "/path/to/feature6.png",
              text: "Feature text goes here",
            },
            {
              imageURL: "/path/to/feature7.png",
              text: "Feature text goes here",
            },
          ]}
        />
        <Plan
          planName="Enterprise plan"
          monthlyPrice={49}
          yearlyPrice={499}
          features={[
            {
              imageURL: "/path/to/feature8.png",
              text: "Feature text goes here",
            },
            {
              imageURL: "/path/to/feature9.png",
              text: "Feature text goes here",
            },
            {
              imageURL: "/path/to/feature10.png",
              text: "Feature text goes here",
            },
            {
              imageURL: "/path/to/feature11.png",
              text: "Feature text goes here",
            },
            {
              imageURL: "/path/to/feature12.png",
              text: "Feature text goes here",
            },
          ]}
        />
      </div>
    </div>
  </section>
);

export default Pricing;
