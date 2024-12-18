import Image from "next/image";
import React from "react";

const ArtSection = () => {
  return (
    <section className="mt-16 text-center font-rubik">
      <div className="flex gap-[127px] justify-center items-center py-[92px]">
        {/* Image Section */}
        <div className="mr-[137px] relative w-full flex justify-center items-center">
          <div className="w-full">
            <div className="flex flex-col justify-center items-center gap-[44px] relative">
              {/* Two Skewed Orange Lines */}
              <div className="bg-[#FF4800] w-[651px] h-[100px] skew-x-0 skew-y-2" />
              <div className="bg-[#FF4800] w-[651px] h-[100px] skew-x-0 -skew-y-2" />

              {/* Centered Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full flex justify-center items-center">
                <Image
                  src="/art1.png"
                  alt="art1"
                  width={473}
                  height={350}
                  className="-rotate-6 shadow-artCombinedShadows w-[473px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Text Section */}
        <div className="flex flex-col min-w-[364px] ml-[127px]">
          {/* Text Block 1 */}
          <div className="text-start">
            <h2 className="text-[40px] font-semibold relative inline-block leading-3">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#FF8C5E] -z-10" />
                جمال الفن في كل
              </span>
            </h2>
          </div>

          {/* Text Block 2 */}
          <div className="text-start">
            <h2 className="text-[40px] font-semibold relative inline-block">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#FF8C5E] -z-10" />
                زاويـــة
              </span>
            </h2>
          </div>

          {/* Paragraph */}
          <p className="font-normal text-xl leading-[29px] text-start mt-4">
            اكتشف لوحات فنية مميزة تضفي المزيد من <br />
            الجمال على منزلك
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtSection;
