"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

const JoinUs = () => {
  const t = useTranslations("Join");
  const locale = useLocale();
  return (
    <section
      className={`mt-16 mx-[20px] md:mx-[40px] lg:mx-[60px] xl:mx-[112px] min-h-[280px] md:min-h-[350px] rounded-xl bg-center bg-cover ${
        locale === "ar" ? "bg-joinBg" : "bg-joinBgMirror"
      } font-rubik relative`}
    >
      {/* Overlay with animation */}
      <div className="absolute inset-0 rounded-xl bg-[#00001B69] z-0"></div>

      {/* Content Wrapper */}
      <div
        className={`relative z-10 pt-9 ${
          locale === "ar" ? "pr-5 md:pr-[66px]" : "pl-5 md:pl-[66px]"
        } flex flex-col gap-4 text-white`}
      >
        {/* Heading with animation */}
        <h2 className="font-extrabold md:text-[28px] lg:text-[36px] xl:text-[44px] leading-snug text-center md:text-start">
          {t("header1")} <br /> {t("header2")}
          <br /> {t("header3")}
        </h2>

        {/* Paragraph with animation */}
        <p className="md:text-[18px] lg:text-lg xl:text-[22px] font-normal leading-relaxed text-center md:text-start">
          {t("des1")}
          <br />
          {t("des2")}
        </p>
      </div>

      {/* Button with animation */}
      <div
        className={`absolute ${
          locale === "ar" ? "md:left-16 left-5" : "md:right-16 right-5"
        } bottom-5 z-10`}
      >
        <button className="bg-white w-[130px] h-[35px] md:w-[188px] md:h-[56px] text-black flex items-center justify-center rounded-full md:py-[18px] py-[12px] md:px-[35px] px-[15px] font-semibold text-sm md:text-lg">
          <p className="text-sm md:text-xl">{t("button")}</p>
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
