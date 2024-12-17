import Image from "next/image";
import React from "react";

const FramesSection = () => {
  return (
    <section className="mt-16 text-center font-rubik">
      <div className="flex justify-center items-center gap-[80px]">
        {/* Text Section */}
        <div className="flex flex-col min-w-[364px]">
          {/* Text Block 1 */}
          <div className="text-start">
            <h2 className="text-[40px] font-semibold relative inline-block leading-3">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#3AFAFC] -z-10" />
                لوحات نابضــة
              </span>
            </h2>
          </div>

          {/* Text Block 2 */}
          <div className="text-start">
            <h2 className="text-[40px] font-semibold relative inline-block">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#3AFAFC] -z-10" />
                تحـــكى قصصاََ
              </span>
            </h2>
          </div>

          {/* Paragraph */}
          <p className="font-normal text-xl leading-[29px] text-start mt-4 max-w-[300px]">
            اكتشف القطع التي تروي حكايتك <br />
            وتضفي على منزلك لمسة فنية تعبر <br /> عنك.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <Image
            src="/mockup.png"
            alt="mockup"
            width={480}
            height={480}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FramesSection;
