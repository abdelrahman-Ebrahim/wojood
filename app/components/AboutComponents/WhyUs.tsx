"use client";
import { useTranslations } from "next-intl";
import React from "react";
import ArcherGrid from "./ArcherGrid";
import MobileGrid from "./MobileGrid";

const WhyUs = () => {
  const t = useTranslations("AboutWhyUs");
  return (
    <section className="mt-[104px]">
      <div className="px-[30px] lg:px-[70px] pb-10">
        {/* title */}
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="font-semibold text-[40px] text-[#390089]">
            {t("title")}
          </h2>
          <p className="font-medium text-xl text-[#626C83]">{t("subtitle")}</p>
        </div>
        {/* icons */}
        {/* Medium and Large Screens */}
        <div className="hidden md:block">
          <ArcherGrid />
        </div>
        {/* Small Screens */}
        <div className="block md:hidden">
          <MobileGrid />
        </div>

        <div className="mt-[151px] xl:mx-[25px] flex flex-col justify-center items-center gap-[46px] relative">
          <div className="w-full">
            <div className="flex justify-center items-center gap-[62.036px] relative">
              {/* Container */}
              <div className="w-full flex flex-col pt-[32px] pb-[62px] px-[35.5px] gap-3 flex-shrink-0 bg-white border-[0.27px] border-white rounded-[38.408px] shadow-aboutBox relative z-40">
                <p className="self-start text-[#390089] text-[32px] font-semibold">
                  {t("vision")}
                </p>
                <p className="self-start text-base font-semibold">
                  {t("visiontext")}
                </p>
              </div>
              {/* Overlay Background */}
              <div className="rounded-[39.868px] absolute bg-[#EBE3F9] z-20 right-0 top-[4px] -left-[13px] -bottom-[4px] border-[0.27px] border-white" />
              <div className="rounded-[39.868px] absolute bg-[#DED1F3] z-10 right-0 top-[13px] -left-[20px] -bottom-[13px] border-[0.27px] border-white" />
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-center items-center gap-[62.036px] relative">
              {/* Container */}
              <div className="w-full flex flex-col pt-[32px] pb-[62px] px-[35.5px] gap-3 flex-shrink-0 bg-white border-[0.27px] border-white rounded-[38.408px] shadow-aboutBox relative z-40">
                <p className="self-start text-[#390089] text-[32px] font-semibold">
                  {t("mission")}
                </p>
                <p className="self-start text-base font-semibold">
                  {t("missiontext")}
                </p>
              </div>
              {/* Overlay Background */}
              <div className="rounded-[39.868px] absolute bg-[#EBE3F9] z-20 right-0 top-[4px] -left-[13px] -bottom-[4px] border-[0.27px] border-white" />
              <div className="rounded-[39.868px] absolute bg-[#DED1F3] z-10 right-0 top-[13px] -left-[20px] -bottom-[13px] border-[0.27px] border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
