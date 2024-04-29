import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import SectionSplit from "./SectionSplit";
import asteroidx from "@/assets/images/asteroidx.png";
import nicho from "@/assets/images/nicho.png";
import nichoAuction from "@/assets/images/nichoAuction.png";

interface ProductProps {
  name: string;
  variant: string;
  price: number;
  imageSrc: StaticImageData;
  imageAlt: string;
}

const Product: React.FC<ProductProps> = ({
  name,
  variant,
  price,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
      <div className="flex grow flex-col font-semibold leading-[150%] max-md:mt-8">
        <Image
          src={imageSrc}
          alt={imageAlt}
          // width={500}
          // height={500}
          className="aspect-video w-full"
        />
        <div className="mt-4 text-lg font-bold">{name}</div>
        <div className="text-sm font-extralight">{variant}</div>
        {/* <div className="mt-2 text-xl">${price}</div> */}
      </div>
    </div>
  );
};

const products: ProductProps[] = [
  {
    name: "Nicho Auction App",
    variant:
      "An nicho auction app enables users to list and bid on items in real-time, offering a convenient and competitive platform for buying and selling a variety of goods",
    price: 55,
    imageSrc: nichoAuction,
    imageAlt: "Product image",
  },
  {
    name: "Nicho App",
    variant:
      "An NFT marketplace is a digital platform where users can create, buy, sell, and trade non-fungible tokens (NFTs), which represent unique digital assets such as art, music, and collectibles using blockchain technology",
    price: 55,
    imageSrc: nicho,
    imageAlt: "Product image",
  },
  {
    name: "Asteroid X",
    variant:
      "A real-world asset, represents a tangible investment opportunity involving the extraction of valuable minerals or resources from a specific geographical location",
    price: 55,
    imageSrc: asteroidx,
    imageAlt: "Product image",
  },
];

function ProductList() {
  return (
    <>
      <section className="flex flex-col items-center py-16 md:px-16">
        <div className="flex justify-between gap-5 leading-[150%] max-md:max-w-full max-md:flex-wrap">
          <div className="flex flex-col items-center max-md:max-w-full">
            <div className="text-base font-semibold text-secondary max-md:max-w-full">
              Our Build
            </div>
            <h1 className="mt-4 text-2xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl md:text-4xl">
              Designs
            </h1>
            <p className="mt-4 text-lg text-neutral-400 max-md:max-w-full">
              A variety of website examples
            </p>
          </div>
        </div>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex justify-center gap-10 max-md:flex-col max-md:gap-0">
            {products.slice(0, 4).map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
      <SectionSplit />
    </>
  );
}

export default ProductList;
