import { useTranslations } from "next-intl";
import React from "react";

const AboutBanner = () => {
  const t  = useTranslations("AboutBanner")
  return (
    <div className="px-[51px] w-full rounded-[48px] bg-[#FFB545] mt-[104px]">
      <p className="px-[40px] py-[20px] font-semibold text-2xl text-[#140623] text-center">
        {t("text")}
      </p>
    </div>
  );
};

export default AboutBanner;
