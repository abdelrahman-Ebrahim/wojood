import Image from "next/image";
import React from "react";

const ColorsSection = () => {
  return (
    <section className="mt-16 text-center font-rubik">
      <div className="flex justify-between items-center">
        {/* Text Section */}
        <div className="flex flex-col min-w-[364px] mr-[127px]">
          {/* Text Block 1 */}
          <div className="text-start">
            <h2 className="text-[40px] font-semibold relative inline-block leading-3">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#04FF99] -z-10"/>
                ألوانٌ مُستوحاة من
              </span>
            </h2>
          </div>

          {/* Text Block 2 */}
          <div className="text-start">
            <h2 className="text-[40px] font-semibold relative inline-block">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#04FF99] -z-10"/>
                جَمالِ الطَّبيعة.
              </span>
            </h2>
          </div>

          {/* Paragraph */}
          <p className="font-normal text-xl leading-[29px] text-start mt-4">
            لوحات مستوحاة من جمال الطبيعة <br /> تضفي لمسة من الهدوء والسحر على{" "}
            <br /> منزلك
          </p>
        </div>

        {/* Image Section */}
        <div className="ml-[137px]">
          <Image
            src="/ColorSection.png"
            alt="ColorSection"
            width={800}
            height={400}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ColorsSection;
