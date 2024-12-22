"use client";
import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

const FramesSection = () => {
  const t = useTranslations("Frames");
  const locale = useLocale();
  return (
    <section className="mt-16 text-center font-rubik lg:mx-10 xl:mx-0">
      <div
        className={`flex flex-col lg:flex-row justify-center items-center ${
          locale === "ar" ? " gap-5 lg:gap-[80px]" : "gap-5 lg:gap-[200px]"
        }`}
      >
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center min-w-[364px]">
          {/* Text Block 1 */}
          <div className="text-center lg:text-start">
            <h2 className="text-3xl md:text-[40px] font-semibold relative inline-block leading-3">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#3AFAFC] -z-10" />
                {t("title1")}
              </span>
            </h2>
          </div>

          {/* Text Block 2 */}
          <div className="text-center lg:text-start">
            <h2 className="text-3xl md:text-[40px] font-semibold relative inline-block leading-[60px]">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#3AFAFC] -z-10" />
                {t("title2")}
              </span>
            </h2>
          </div>

          {/* Paragraph */}
          <p className="font-normal text-lg md:text-xl leading-[29px] text-center lg:text-start mt-4 max-w-[300px]">
            {t("subtitle1")} <br />
            {t("subtitle2")} <br /> {t("subtitle3")}
          </p>
        </div>

        {/* Image Section */}
        <div className="mx-2 md:mx-0">
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
