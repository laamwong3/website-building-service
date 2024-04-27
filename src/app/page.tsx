import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Cta from "@/components/Home/Cta";
import Faq from "@/components/Home/Faq";
// import Feature from "@/components/Home/Feature";
// import FeatureList from "@/components/Home/FeatureList";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/Pricing";
import Problem from "@/components/Home/Problem";
import ProductList from "@/components/Home/ProductList";
import Service from "@/components/Home/Service";
import Solution from "@/components/Home/Solution";
import Statistics from "@/components/Home/Statistics";
import Testimonial from "@/components/Home/Testimonial";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <About />
      <Statistics />
      {/* <Feature />
      <FeatureList /> */}
      <Service />
      <ProductList />
      <Testimonial />
      <Pricing />
      <Cta />
      <Faq />
      <Contact />
    </>
  );
};

export default page;
