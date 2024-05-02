import { type LucideProps, Mail, MapPin } from "lucide-react";
import * as React from "react";
import SectionSplit from "./SectionSplit";

interface ContactInfoProps {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  info: string;
  isLink?: boolean;
  link: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  Icon,
  title,
  info,
  isLink = false,
  link,
}) => (
  <div className="mt-4 flex items-center gap-4 max-md:flex-wrap">
    <Icon className="aspect-square w-6 shrink-0" color="blue" />
    <div className="flex flex-1 flex-col max-md:max-w-full">
      <div className="font-extra text-xl font-bold leading-7 max-md:max-w-full">
        {title}
      </div>
      <a
        href={link}
        target="_blank"
        className={`text-base leading-6 ${isLink ? "underline" : ""} cursor-pointer font-extralight hover:text-primary-700 max-md:max-w-full`}
      >
        {info}
      </a>
    </div>
  </div>
);

const Contact = () => {
  return (
    <>
      <section className="flex flex-col items-center pb-16 max-md:flex-wrap md:px-16 md:py-16">
        <div className="w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex w-[59%] flex-col max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-[150%] max-md:mt-10 max-md:max-w-full">
                <h1 className="text-2xl font-bold leading-[57.6px] max-md:max-w-full md:text-4xl">
                  Get in Touch
                </h1>
                <p className="mt-6 text-lg text-neutral-400 max-md:max-w-full">
                  We&apos;re here to answer any questions you may have. Contact
                  us today!
                </p>
              </div>
            </div>
            <div className="ml-5 flex w-[41%] flex-col max-md:ml-0 max-md:w-full">
              <div className="mt-4 flex grow flex-col max-md:max-w-full md:mt-0">
                {contactData.map((contact, index) => (
                  <ContactInfo key={index} {...contact} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <Image
        loading="lazy"
        src=""
        alt="Contact us banner"
        className="mt-20 aspect-[1.89] w-full max-md:mt-10 max-md:max-w-full"
      /> */}
        <div className="max-md:max-w-ful mt-20 aspect-[1.89] w-full overflow-hidden rounded-xl bg-background max-md:mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.0745203874108!2d115.84651127522858!3d-32.013095025350324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a34daa204c8d%3A0x57ee78233ca9c99f!2s3b%2F907%20Canning%20Hwy%2C%20Mount%20Pleasant%20WA%206153!5e0!3m2!1sen!2sau!4v1714602148547!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(10%) invert(100%)",
            }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <SectionSplit />
    </>
  );
};

export default Contact;

const contactData = [
  {
    Icon: Mail,
    title: "Email",
    info: "Info@web3in.net",
    isLink: true,
    link: "mailto:Info@web3in.net",
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
    link: "https://maps.app.goo.gl/vX9jZd6hRuToMn7W7",
  },
];
