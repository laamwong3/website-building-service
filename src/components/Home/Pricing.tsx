import * as React from "react";
import SectionSplit from "./SectionSplit";

interface IFeature {
  text: string;
}

const Feature: React.FC<IFeature> = ({ text }) => (
  <div className="mt-4 flex gap-4 leading-[150%]">
    {/* <Image src={imageURL} alt="" width={24} height={24} className="shrink-0" /> */}
    <div>{text}</div>
  </div>
);

const Plan: React.FC<{
  planName: string;
  price: string;
  features: IFeature[];
}> = ({ planName, price, features }) => (
  <div className="flex w-full flex-col md:ml-0 md:w-[33%] lg:w-full">
    <div className="flex grow flex-col justify-between self-stretch border border-solid border-foreground p-8 text-base md:mt-8 md:px-5">
      <div>
        <div className="flex flex-col items-center px-20 text-center text-xl font-bold md:px-5">
          <div className="leading-[140%]">{planName}</div>
          <div className="mt-2 leading-7">
            {/* <span className="text-6xl leading-[67px]"> ${monthlyPrice} </span> */}
            <span className="text-3xl leading-10">/mo</span>
          </div>
        </div>

        {features.map((feature: IFeature, index: number) => (
          <Feature
            key={index}
            // imageURL={feature.imageURL}
            text={feature.text}
          />
        ))}
      </div>
      <div className="mt-32 items-center justify-center border border-solid border-black px-6 py-3 leading-[150%] md:mt-10 md:px-5">
        Get started
      </div>
    </div>
  </div>
);

const Pricing = () => (
  <>
    <section className="-mx-6 flex flex-col items-center justify-center rounded-md bg-background bg-opacity-10 bg-clip-padding px-6 py-16 backdrop-blur-xl backdrop-filter md:mx-0 md:px-16">
      <div className="flex w-[768px] max-w-full items-center justify-center text-center md:px-5">
        <div className="flex flex-col md:max-w-full">
          <div className="self-center text-2xl font-bold leading-[57.6px] md:text-4xl">
            Pricing Plan
          </div>
          <div className="mt-6 text-lg leading-7 text-neutral-400 md:max-w-full">
            Choose the plan that’s suitable for you
          </div>
        </div>
      </div>
      <div className="mt-16 self-stretch md:mt-10 md:max-w-full">
        <div className="flex flex-col gap-5 md:flex-row ">
          {pricingDetails.map((detail, index) => (
            <Plan
              key={index}
              planName={detail.name}
              price={detail.price}
              features={[
                {
                  // imageURL: "/path/to/feature1.png",
                  text: "Feature text goes here",
                },
                {
                  // imageURL: "/path/to/feature2.png",
                  text: "Feature text goes here",
                },
                {
                  // imageURL: "/path/to/feature3.png",
                  text: "Feature text goes here",
                },
              ]}
            />
          ))}
        </div>
      </div>
    </section>
    <SectionSplit />
  </>
);

export default Pricing;

const pricingDetails = [
  {
    name: "Basic Plan",
    price: "2000",
    features: [
      {
        text: "Feature text goes here",
      },
      {
        text: "Feature text goes here",
      },
      {
        text: "Feature text goes here",
      },
    ],
  },
  {
    name: "Premium Plan",
    price: "4000",
    features: [
      {
        text: "Feature text goes here",
      },
      {
        text: "Feature text goes here",
      },
      {
        text: "Feature text goes here",
      },
    ],
  },
  {
    name: "Enterprise plan",
    price: "Let's talk",
    features: [
      {
        text: "Feature text goes here",
      },
      {
        text: "Feature text goes here",
      },
      {
        text: "Feature text goes here",
      },
    ],
  },
];
