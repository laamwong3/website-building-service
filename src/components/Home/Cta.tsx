import * as React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h2 className="mt-8 gap-0 text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:flex-wrap max-md:text-4xl">
      {text}
    </h2>
  );
};

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return (
    <p className="mt-6 gap-0 text-lg leading-7 max-md:max-w-full max-md:flex-wrap">
      {text}
    </p>
  );
};

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, variant }) => {
  const isPrimary = variant === "primary";
  const className = isPrimary
    ? "justify-center px-6 py-3 bg-black border border-black border-solid max-md:px-5"
    : "justify-center px-6 py-3 border border-white border-solid max-md:px-5";

  return <button className={className}>{text}</button>;
};

function Cta() {
  const headingText = "Medium length heading goes here";
  const paragraphText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";
  const buttons = [
    { text: "Button", variant: "primary" },
    { text: "Button", variant: "secondary" },
  ];

  return (
    <section className="flex flex-col items-start gap-5 py-16 text-white max-md:flex-wrap md:px-16">
      <Heading text={headingText} />
      <Paragraph text={paragraphText} />
      <div className="mt-6 flex items-start gap-4 whitespace-nowrap pt-4 text-base leading-6">
        {buttons.map((button, index) => (
          <Button key={index} text={button.text} variant={"primary"} />
        ))}
      </div>
    </section>
  );
}

export default Cta;
