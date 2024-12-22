"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";

const Library = () => {
  const t = useTranslations("Library");
  const locale = useLocale();
  return (
    <section className="mt-16 text-center flex flex-col justify-center items-center gap-12 font-rubik">
      {/* Section Animation (Fade & Scale) */}
      <div
        className="flex flex-col justify-center items-center gap-4 mt-6"
      >
        {/* Header */}
        <h2
          className="font-semibold text-3xl md:text-[38px]"
        >
          {t("title")}
        </h2>
        <p
          className="font-normal text-lg md:text-xl"
        >
          {t("subtitle")}
        </p>
      </div>

      {/* Filter Buttons with scroll animations */}
      <div className="flex flex-col justify-center items-center gap-2 md:gap-6 xl:px-[117px] w-full">
        <div className="flex justify-center items-center gap-[15px]">
          <button
            className="bg-[#6152C11A] rounded-[26px] text-[#390089] flex justify-center items-center py-2 px-4 md:px-9 "
          >
            {t("btn1")}
          </button>
          <button
            className="bg-[#6152C11A] rounded-[26px] text-[#390089] flex justify-center items-center py-2 px-4 md:px-9"
          >
            {t("btn2")}
          </button>
          <button
            className="bg-[#390089] rounded-[26px] text-white font-semibold flex justify-center items-center py-2 px-4 md:px-9 text-nowrap"
          >
            {t("btn3")}
          </button>
        </div>

        {/* Image Grids */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-y-0 gap-x-[13px] w-full px-5 xl:px-0">
          {["library1.png", "library2.png", "library3.png"].map(
            (image, index) => (
              <div
                className="relative w-full h-[280px] md:h-[240px] lg:h-[338px] overflow-hidden rounded-[12px]"
                key={index}
              >
                <Image
                  src={`/${image}`}
                  alt={`library${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full"
                />
              </div>
            )
          )}
        </div>

        {/* Image Grid 2 with fade-in & scale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-0 gap-x-2 lg:gap-x-[20px] w-full px-5 xl:px-0">
          {["library4.png", "library5.png"].map((image, index) => (
            <div
              className="relative w-full h-[280px] lg:h-[293px] overflow-hidden"
              key={index}
            >
              <Image
                src={`/${image}`}
                alt={`library${index + 4}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        {/* Button with bounce effect */}
        <button
          className="button-2 bg-[#04FF99] rounded-[43px] text-[#390089] mt-[20px]"
        >
          <p className="text-2 ">{t("btn4")}</p>
          {locale === "ar" ? (
            <MdOutlineKeyboardArrowLeft size={15} />
          ) : (
            <MdOutlineKeyboardArrowRight size={15} />
          )}
        </button>
      </div>
    </section>
  );
};

export default Library;
