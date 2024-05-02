import * as React from "react";
import web3in from "@/assets/icons/web3in.webp";
import Image from "next/image";

// interface SocialIconProps {
//   src: string;
//   alt: string;
// }

// const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
//   <img
//     loading="lazy"
//     src={src}
//     alt={alt}
//     className="aspect-square w-6 shrink-0"
//   />
// );

function Footer() {
  return (
    <footer className="flex flex-col items-center pb-16 max-md:flex-wrap md:px-16">
      <div className="flex w-full flex-col items-center justify-center gap-5 max-md:max-w-full max-md:flex-wrap">
        <Image src={web3in} alt="web3in logo" height={50} />
        <div className="my-auto flex gap-2 max-md:flex-wrap">
          <div className="flex flex-1 gap-3">
            {/* {socialIcons.map(({ src, alt }, index) => (
              <SocialIcon key={index} src={src} alt={alt} />
            ))} */}
          </div>
        </div>
      </div>
      <div className="mt-8 h-px w-full shrink-0 border-b-[0.5px] border-white max-md:mt-10" />
      <div className="mt-8 flex justify-between gap-5 self-center text-sm leading-5 max-md:flex-wrap">
        <div>2024 Web3in. All right reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;

// const socialIcons = [
//   {
//     src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cb14ad2a93b6b3a5f6779774b00ea9979e4593abdd26f850601973b3da4ab21?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&",
//     alt: "Social Icon 1",
//   },
//   {
//     src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ea003e49fd93659e1550be5605e2cfa00850629e05d9c9a3ab4d9a5231c7d49?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&",
//     alt: "Social Icon 2",
//   },
//   {
//     src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c526b5f36ed774814623889a298073f6b03a54ab7a1d44d33a212340c19561f9?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&",
//     alt: "Social Icon 3",
//   },
//   {
//     src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7dc4208c3c955b42542a250641d3ad0c2aa7f782e1cc8e26b90e21427e49696?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&",
//     alt: "Social Icon 4",
//   },
//   {
//     src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0dc00635b373d3e5de68441d9146c25e003ce1b4d547c3f3078043913a3b2af5?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&",
//     alt: "Social Icon 5",
//   },
// ];
