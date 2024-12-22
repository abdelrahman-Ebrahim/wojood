"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const ColorsSection = () => {
  const t = useTranslations("Colors");
  const locale = useLocale();

  return (
    <section className="mt-16 text-center font-rubik">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10 xl:gap-20">
        {/* Text Section */}
        <div
          className={`flex flex-col min-w-[364px] ${
            locale === "ar"
              ? "lg:mr-[80px] xl:mr-[127px]"
              : "lg:ml-[80px] xl:ml-[127px]"
          }`}
        >
          {/* Text Block 1 */}
          <div className="text-center lg:text-start">
            <h2 className="text-3xl md:text-[40px] font-semibold relative inline-block leading-3">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#04FF99] -z-10 text-nowrap" />
                {t("title1")}
              </span>
            </h2>
          </div>

          {/* Text Block 2 */}
          <div className="text-center lg:text-start">
            <h2 className="text-3xl md:text-[40px] font-semibold relative inline-block text-nowrap leading-[60px]">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#04FF99] -z-10" />
                {t("title2")}
              </span>
            </h2>
          </div>

          {/* Paragraph */}
          <p className="font-normal text-lg md:text-xl leading-[29px] text-center lg:text-start mt-2 lg:mt-4 mx-4 md:mx-0">
            {t("subtitle1")}
            <br /> {t("subtitle2")}
          </p>
        </div>

        {/* Image Section */}
        <div
          className={`${
            locale === "ar"
              ? "lg:ml-[80px] xl:ml-[137px]"
              : "lg:mr-[80px] xl:mr-[137px]"
          }`}
        >
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
