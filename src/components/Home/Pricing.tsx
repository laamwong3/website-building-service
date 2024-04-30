import * as React from "react";
import SectionSplit from "./SectionSplit";
import { CircleCheckBig } from "lucide-react";
import { Button } from "@nextui-org/button";

interface IFeature {
  text: string;
}

const Feature: React.FC<IFeature> = ({ text }) => (
  <div className="mt-4 flex items-center gap-4 leading-[150%]">
    <CircleCheckBig width={16} height={16} color="green" />
    <div>{text}</div>
  </div>
);

const Plan: React.FC<{
  planName: string;
  price: string;
  features: IFeature[];
}> = ({ planName, price, features }) => (
  <div className="flex w-full flex-col md:ml-0 md:w-[33%] lg:w-full">
    <div className="flex grow flex-col justify-between self-stretch rounded-lg border border-solid border-foreground p-8 text-base md:mt-8 md:px-5">
      <div>
        <div className="flex flex-col items-center text-center text-xl font-bold">
          <div className="uppercase leading-[140%] text-primary">
            {planName}
          </div>
          <div className="mt-2 leading-7">
            <span className="text-6xl leading-[67px]"> {price} </span>
          </div>
        </div>

        {features.map((feature: IFeature, index: number) => (
          <Feature key={index} text={feature.text} />
        ))}
      </div>
      <Button className="mt-8" color="primary">
        Get Started
      </Button>
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
            Choose the plan that’s suitable for your business
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
              features={detail.features}
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
    price: "$2000",
    currency: "AUD",
    features: [
      {
        text: "Responsive Design",
      },
      {
        text: "SEO Basics",
      },
      {
        text: "Social Media Integration",
      },
      {
        text: "Standard Security Features",
      },
      {
        text: "Standard Layout",
      },
    ],
  },
  {
    name: "Premium Plan",
    price: "$4000",
    currency: "AUD",
    features: [
      {
        text: "All features of Basic Plan, plus:",
      },
      {
        text: "Customizable Layout",
      },
      {
        text: "Custom Graphics",
      },
      {
        text: "Enhanced SEO Features",
      },
      {
        text: "Interactive Elements",
      },
      {
        text: "Premium Templates",
      },
    ],
  },
  {
    name: "Enterprise plan",
    price: "Let's talk",
    currency: "",
    features: [
      {
        text: "All features of Premium Website, plus:",
      },
      {
        text: "Custom Development",
      },
      {
        text: "Advanced E-commerce Capabilities",
      },
      {
        text: "User Login and Management Systems",
      },
      {
        text: "API Integrations",
      },
      {
        text: "Ongoing Maintenance and Support",
      },
      {
        text: "Scalable Architecture",
      },
    ],
  },
];
