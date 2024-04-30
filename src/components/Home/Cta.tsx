import { Button } from "@nextui-org/button";
import * as React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h2 className="gap-0 text-2xl font-bold leading-[57.6px] max-md:max-w-full max-md:flex-wrap md:text-4xl">
      {text}
    </h2>
  );
};

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return (
    <p className="mt-6 gap-0 text-lg leading-7 text-neutral-400 max-md:max-w-full max-md:flex-wrap">
      {text}
    </p>
  );
};

function Cta() {
  const headingText = "Build Your Website Today";
  const paragraphText =
    "Create a stunning website with our website building service.";

  return (
    <section className="flex flex-col items-center py-16 max-md:flex-wrap md:px-16 md:py-16">
      <Heading text={headingText} />
      <Paragraph text={paragraphText} />
      <div className="flex items-start gap-4 whitespace-nowrap pt-6 text-base leading-6">
        <Button color="primary">Build Now</Button>
      </div>
    </section>
  );
}

export default Cta;
