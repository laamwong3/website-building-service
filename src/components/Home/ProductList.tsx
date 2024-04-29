import * as React from "react";
import Image from "next/image";
import SectionSplit from "./SectionSplit";
import asteroidx from "@/assets/images/asteroidx.svg";
import nicho from "@/assets/images/nicho.svg";
import nichoAuction from "@/assets/images/nichoAuction.svg";

interface ProductProps {
  name: string;
  variant: string;
  price: number;
  imageSrc: string;
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
          height={500}
          className="aspect-square w-full"
        />
        <div className="mt-4 text-lg">{name}</div>
        <div className="text-sm">{variant}</div>
        <div className="mt-2 text-xl">${price}</div>
      </div>
    </div>
  );
};

const products: ProductProps[] = [
  {
    name: "Product name",
    variant: "Variant",
    price: 55,
    imageSrc: nichoAuction,
    imageAlt: "Product image",
  },
  {
    name: "Product name",
    variant: "Variant",
    price: 55,
    imageSrc: nicho,
    imageAlt: "Product image",
  },
  {
    name: "Product name",
    variant: "Variant",
    price: 55,
    imageSrc: asteroidx,
    imageAlt: "Product image",
  },
];

function ProductList() {
  return (
    <>
      <section className="flex flex-col py-16 md:px-16">
        <div className="flex justify-between gap-5 leading-[150%] max-md:max-w-full max-md:flex-wrap">
          <div className="flex flex-col max-md:max-w-full">
            <div className="text-base font-semibold text-secondary max-md:max-w-full">
              Our Build
            </div>
            <h1 className="mt-4 text-2xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl md:text-4xl">
              Templates
            </h1>
            <p className="mt-4 text-lg text-neutral-400 max-md:max-w-full">
              Choose from a variety of website templates
            </p>
          </div>
        </div>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex justify-center gap-5 max-md:flex-col max-md:gap-0">
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
