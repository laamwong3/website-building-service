import { type LucideProps, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import * as React from "react";

interface ContactInfoProps {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  info: string;
  isLink?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  Icon,
  title,
  info,
  isLink = false,
}) => (
  <div className="mt-4 flex items-center gap-4 max-md:flex-wrap">
    <Icon className="aspect-square w-6 shrink-0" color="blue" />
    <div className="flex flex-1 flex-col max-md:max-w-full">
      <div className="font-extra text-xl font-bold leading-7 max-md:max-w-full">
        {title}
      </div>
      <a
        className={`text-base leading-6 ${isLink ? "underline" : ""} cursor-pointer font-extralight hover:text-primary-700 max-md:max-w-full`}
      >
        {info}
      </a>
    </div>
  </div>
);

const Contact = () => {
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
        src=""
        alt="Contact us banner"
        className="mt-20 aspect-[1.89] w-full max-md:mt-10 max-md:max-w-full"
      />
    </section>
  );
};

export default Contact;

const contactData = [
  {
    Icon: Mail,
    title: "Email",
    info: "Info@web3in.net",
    isLink: true,
  },
  // {
  //   Icon: Phone,
  //   title: "Phone",
  //   info: "+1 (555) 000-0000",
  //   isLink: true,
  // },
  {
    Icon: MapPin,
    title: "Office",
    info: "Unit 3b, 907 Canning Highway,Mount Pleasant, WA 6153",
    isLink: true,
  },
];
