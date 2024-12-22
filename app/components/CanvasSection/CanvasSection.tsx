"use client";
import Image from "next/image";
import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";

const CanvasSection = () => {
  const t = useTranslations("Canvas");
  const locale = useLocale();
  return (
    <section className="bg-canvasBackground bg-center bg-cover relative w-full flex flex-col font-rubik mt-16">
      {/* Top Button */}
      <div className="px-[20px] md:px-[40px] lg:px-[80px] xl:px-[171px] mt-[59px] flex justify-between items-center w-full">
        <p className="text-base lg:text-[22px] font-semibold">{t("header")}</p>
        <button className="button-1 bg-[#04FF99] rounded-[43.717px]">
          <p className="text-1">{t("button")}</p>
          {locale === "ar" ? (
            <MdOutlineKeyboardArrowLeft size={15} />
          ) : (
            <MdOutlineKeyboardArrowRight size={15} />
          )}
        </button>
      </div>

      {/* Gallery */}
      <div className="mt-6 lg:px-[50px] xl:px-[114px] flex justify-center items-center gap-2 xl:gap-8 pb-[59px]">
        {/* Left Arrow */}
        <div className="hidden md:size-12 rounded-full md:flex justify-center items-center border border-[#D1D5DB] cursor-pointer">
          {locale === "ar" ? (
            <MdKeyboardArrowRight size={24} />
          ) : (
            <MdKeyboardArrowLeft size={24} />
          )}
        </div>

        {/* Card 1 with animation */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#F5F5F5] rounded-[12px] size-[180px] sm:size-[220px] md:size-[200px] lg:size-[220px] xl:size-[241px]">
            <div className="p-[50px]">
              <div className="border-[7px] border-[#CEA956]">
                <Image
                  src="/canvas1.png"
                  alt="canvas1"
                  width={1000}
                  height={1000}
                  className="w-full border-black border-[2px] shadow-galleryCombinedShadows"
                />
              </div>
            </div>
          </div>
          <p className="font-medium font-rubik text-[15px] mt-2">
            {t("title")}
          </p>
          <p className="font-normal font-rubik text-[16px]">
            {t("subtitle")}{" "}
            <span className="text-[#390089] font-bold">{t("price")}</span>
          </p>
        </div>

        {/* Card 2 with animation */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#F5F5F5] rounded-[12px] size-[180px] sm:size-[220px] md:size-[200px] lg:size-[220px] xl:size-[241px]">
            <div className="py-[50px] px-[22px]">
              <div className="border-[7px] border-[#CEA956]">
                <Image
                  src="/canvas2.png"
                  alt="canvas2"
                  width={1000}
                  height={1000}
                  className="w-full border-black border-[2px] shadow-galleryCombinedShadows"
                />
              </div>
            </div>
          </div>
          <p className="font-medium font-rubik text-[15px] mt-2">
            {t("title")}
          </p>
          <p className="font-normal font-rubik text-[16px]">
            {t("subtitle")}
            <span className="text-[#390089] font-bold">{t("price")}</span>
          </p>
        </div>

        {/* Card 3 with animation */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <div className="bg-[#F5F5F5] rounded-[12px] size-[180px] sm:size-[220px] md:size-[200px] lg:size-[220px] xl:size-[241px]">
            <div className="py-[60px] px-[30px] flex">
              <div className="border-[7px] border-[#CEA956] -rotate-90 overflow-hidden w-[195px] h-[135px] relative">
                <div className="bg-canvas3 bg-center bg-cover h-[200px] w-[200px] rotate-90" />
              </div>
            </div>
          </div>
          <p className="font-medium font-rubik text-[15px] mt-2">
            {t("title")}
          </p>
          <p className="font-normal font-rubik text-[16px]">
            {t("subtitle")}{" "}
            <span className="text-[#390089] font-bold">{t("price")}</span>
          </p>
        </div>

        {/* Card 4 with animation */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="bg-[#F5F5F5] rounded-[12px] size-[180px] sm:size-[220px] md:size-[200px] lg:size-[220px] xl:size-[241px]">
            <div className="py-[60px] px-[30px]">
              <div className="">
                <Image
                  src="/canvas4.png"
                  alt="canvas4"
                  width={1000}
                  height={1000}
                  className="w-full shadow-galleryCombinedShadows"
                />
              </div>
            </div>
          </div>
          <p className="font-medium font-rubik text-[15px] mt-2">
            {t("title")}
          </p>
          <p className="font-normal font-rubik text-[16px]">
            {t("subtitle")}
            <span className="text-[#390089] font-bold">{t("price")}</span>
          </p>
        </div>

        {/* Right Arrow */}
        <div className="hidden md:size-12 rounded-full md:flex justify-center items-center border border-[#D1D5DB] cursor-pointer">
          {locale === "ar" ? (
            <MdKeyboardArrowLeft className="md:size-[24px] size-[12px]" />
          ) : (
            <MdKeyboardArrowRight className="md:size-[24px] size-[12px]" />
          )}
        </div>
      </div>
    </section>
  );
};

export default CanvasSection;
