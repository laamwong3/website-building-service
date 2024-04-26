import * as React from "react";
import { Ban } from "lucide-react";
import { Spacer } from "@nextui-org/spacer";

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <div className="mt-4 flex gap-4 max-md:flex-wrap">
    <div className="flex items-center justify-center gap-2">
      <Ban width={16} height={16} color="red" />
      <div className="flex-1 text-warning-400 max-md:max-w-full">{text}</div>
    </div>
  </div>
);

const featureItems: FeatureItemProps[] = [
  {
    text: "Reduced Customer Base",
  },
  {
    text: "Loss of Competitive Edge",
  },
  {
    text: "Limited Marketing Effectiveness",
  },
  {
    text: "Difficulty in Building Trust",
  },
  {
    text: "Operational Inefficiencies",
  },
];

function Problem() {
  return (
    <>
      <section className="flex flex-col justify-center md:px-16">
        <div className="max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
              <h2 className="self-stretch text-2xl font-bold leading-10 max-md:mt-10 max-md:max-w-full md:text-4xl">
                Have you frustrated with the high cost of staying offline?
              </h2>
            </div>
            <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col text-base leading-6 max-md:mt-10 max-md:max-w-full">
                <p className="text-lg font-extrabold leading-7 text-neutral-400 max-md:max-w-full">
                  Unveiling the real consequences of not having a business
                  website
                </p>
                {featureItems.map((item, index) => (
                  <FeatureItem key={index} text={item.text} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Spacer y={10} />
    </>
  );
}

export default Problem;
