import Image from "next/image";
import * as React from "react";

interface ContactInfoProps {
  icon: string;
  title: string;
  info: string;
  isLink?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  title,
  info,
  isLink = false,
}) => (
  <div className="flex gap-4 max-md:flex-wrap">
    <Image
      loading="lazy"
      src={icon}
      alt=""
      className="aspect-square w-6 shrink-0 self-start"
    />
    <div className="flex flex-1 flex-col max-md:max-w-full">
      <div className="text-xl font-bold leading-7 max-md:max-w-full">
        {title}
      </div>
      <div
        className={`mt-2 text-base leading-6 ${isLink ? "underline" : ""} max-md:max-w-full`}
      >
        {info}
      </div>
    </div>
  </div>
);

const contactData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/65f220b1381a696d0c9e9ab7f5d8e8a4c293fe6d06e9046d29e7db5a4553a648?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&",
    title: "Email",
    info: "hello@relume.io",
    isLink: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/774971d0be869cb2138210958bc365489bf88ec2d3b5f500360b15a784b4afdc?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&",
    title: "Phone",
    info: "+1 (555) 000-0000",
    isLink: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d5683984e8dfde32c4801b0fe4534c87f2816433067d6bd7b63415431614bad?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&",
    title: "Office",
    info: "123 Sample St, Sydney NSW 2000 AU",
  },
];

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-16 max-md:flex-wrap md:px-16 md:py-16">
      <div className="w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-[59%] flex-col max-md:ml-0 max-md:w-full">
            <div className="flex flex-col leading-[150%] max-md:mt-10 max-md:max-w-full">
              <h1 className="text-2xl font-bold leading-[57.6px] max-md:max-w-full md:text-4xl">
                Contact us
              </h1>
              <p className="mt-6 text-lg max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <div className="ml-5 flex w-[41%] flex-col max-md:ml-0 max-md:w-full">
            <div className="flex grow flex-col max-md:mt-10 max-md:max-w-full">
              {contactData.map((contact, index) => (
                <ContactInfo key={index} {...contact} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/88c994bbd13be64f86451afb8e6cc71834b4164d832076c0096415bde85bc66d?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&"
        alt="Contact us banner"
        className="mt-20 aspect-[1.89] w-full max-md:mt-10 max-md:max-w-full"
      />
    </section>
  );
};

export default Contact;
