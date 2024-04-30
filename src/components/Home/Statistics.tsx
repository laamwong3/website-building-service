import * as React from "react";
import SectionSplit from "./SectionSplit";

function Statistics() {
  return (
    <>
      <div className="flex flex-col justify-center pb-16 md:px-16 md:py-16">
        <div className="mt-8 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="self-stretch text-2xl font-bold leading-10 max-md:mt-10 max-md:max-w-full md:text-4xl">
                Discover the Power of Our Website Building Service
              </div>
            </div>
            <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col max-md:mt-10 max-md:max-w-full">
                <div className="text-lg leading-7 text-neutral-400 max-md:max-w-full">
                  Our website building service boosts traffic, conversions, and
                  client revenue, enhancing customer engagement and
                  satisfaction.
                </div>
                <div className="py-2 max-md:max-w-full md:mt-8">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
                      <div className="flex grow flex-col max-md:mt-8">
                        <div className="text-5xl font-bold leading-[57.6px] max-md:text-4xl">
                          30%
                        </div>
                        <div className="mt-2 text-base leading-6">
                          Improved Customer Engagement
                        </div>
                      </div>
                    </div>
                    <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
                      <div className="flex grow flex-col max-md:mt-8">
                        <div className="text-5xl font-bold leading-[57.6px] max-md:text-4xl">
                          50%
                        </div>
                        <div className="mt-2 text-base leading-6">
                          Higher Conversions Rates
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionSplit />
    </>
  );
}

export default Statistics;
