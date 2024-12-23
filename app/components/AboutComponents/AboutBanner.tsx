import { useTranslations } from "next-intl";
import React from "react";

const AboutBanner = () => {
  const t = useTranslations("AboutBanner");
  return (
    <div className="px-[10px] lg:px-[51px]">
      <div className="w-full rounded-full md:rounded-[48px] bg-[#FFB545] mt-[50px] md:mt-[104px]">
        <p className="px-8 xl:px-[40px] py-[20px] font-semibold lg:text-lg xl:text-2xl text-[#140623] text-center">
          {t("text")}
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
