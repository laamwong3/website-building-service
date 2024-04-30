"use client";
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import * as React from "react";

const Faq = () => {
  const questions = [
    {
      question: "How does it work?",
      answer:
        "Our website building service involves a team of experts who will design and develop your website according to your specific requirements. We ensure that your website is visually appealing, user-friendly, and optimized for search engines.",
    },
    {
      question: "What are the benefits?",
      answer:
        "By choosing our website building service, you can expect a customized website that reflects your brand identity and meets your business goals. Our team will handle all technical aspects, saving you time and effort.",
    },
    {
      question: "How long does it take?",
      answer:
        "The time required to build a website depends on its complexity and the specific features you require. Our team will provide you with a timeline based on your project requirements.",
    },
    {
      question: "What is the cost?",
      answer:
        "The cost of our manual website building service varies depending on the scope of the project. We offer competitive pricing and will provide you with a detailed quote based on your specific requirements.",
    },
    {
      question: "Do you offer support?",
      answer:
        "Yes, we provide ongoing support for our clients. Whether you need assistance with website updates, maintenance, or troubleshooting, our team is here to help you.",
    },
  ];

  return (
    <section className="-mx-6 flex flex-col items-center justify-center rounded-md bg-background bg-opacity-10 bg-clip-padding px-6 py-16 backdrop-blur-xl backdrop-filter md:mx-0 md:px-16">
      <h1 className="gap-0 text-center text-2xl font-bold leading-[57.6px] max-md:max-w-full max-md:flex-wrap md:text-4xl">
        FAQs
      </h1>
      <p className="mt-6 gap-0 text-center leading-7 text-neutral-400 max-md:max-w-full max-md:flex-wrap">
        Find answers to common questions about our website building services.
      </p>
      <Accordion
        // defaultExpandedKeys={"all"}
        variant="bordered"
        className="mt-6 w-2/3"
        itemClasses={{ content: "font-extralight", title: "font-bold" }}
      >
        {questions.map((question, index) => (
          <AccordionItem
            key={index}
            title={question.question}
            aria-label={question.question}
          >
            {question.answer}
          </AccordionItem>
        ))}
      </Accordion>
      <h2 className="mt-6 gap-0 text-center text-3xl font-bold leading-10 max-md:max-w-full max-md:flex-wrap">
        Still have a question?
      </h2>
      <p className="mt-6 gap-0 text-center text-neutral-400 max-md:max-w-full max-md:flex-wrap">
        Contact us for more information.
      </p>
      <div className="flex items-start gap-4 whitespace-nowrap pt-6 text-base leading-6">
        <Button color="primary" variant="faded">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Faq;
