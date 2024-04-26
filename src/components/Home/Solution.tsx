import * as React from "react";
import Image from "next/image";

interface CheckmarkItemProps {
  iconSrc: string;
  children: React.ReactNode;
}

const CheckmarkItem: React.FC<CheckmarkItemProps> = ({ iconSrc, children }) => (
  <div className="mt-4 flex gap-4 max-md:flex-wrap">
    <Image
      src={iconSrc}
      alt=""
      width={16}
      height={16}
      className="my-auto aspect-square w-4 shrink-0"
    />
    <div className="max-md:max-w-full">{children}</div>
  </div>
);

const Solution: React.FC = () => {
  const checkmarkItems = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/19de1a702fe2ff16c8d4869747135a0267763ca985ed269585bf754f412d72f1?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/19de1a702fe2ff16c8d4869747135a0267763ca985ed269585bf754f412d72f1?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/19de1a702fe2ff16c8d4869747135a0267763ca985ed269585bf754f412d72f1?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="flex flex-col justify-center bg-white px-16 py-20 max-md:px-5">
      <div className="mt-8 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
            <div className="my-auto flex flex-col self-stretch text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-center font-semibold max-md:max-w-full">
                Tagline
              </div>
              <h2 className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Medium length section heading goes here
              </h2>
              <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              {checkmarkItems.map(({ iconSrc, text }) => (
                <CheckmarkItem key={iconSrc} iconSrc={iconSrc}>
                  {text}
                </CheckmarkItem>
              ))}
              <div className="mt-6 flex items-start justify-between gap-5 self-start whitespace-nowrap pt-4">
                <button className="justify-center border border-solid border-black px-6 py-3 max-md:px-5">
                  Button
                </button>
                <div className="mt-3 flex justify-center gap-2">
                  <div>Button</div>
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e67c4a45a7bc622b8e20d8cc04a32dad26f7545434fc28bd08e88fedc4edc23?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&"
                    alt=""
                    width={24}
                    height={24}
                    className="aspect-square w-6 shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=2ed0e0cd3d194791a0d86a908e2022b7&"
              alt=""
              width={1920}
              height={2000}
              className="aspect-[0.96] w-full grow max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
