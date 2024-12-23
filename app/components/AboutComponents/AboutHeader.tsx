import { useTranslations } from "next-intl";
import React from "react";

const AboutHeader = () => {
  const t = useTranslations("AboutHeader");
  return (
    <section className="px-[127px] text-center">
      <h1 className="font-semibold text-[40px] text-[#390089]">
        {t("header")}
      </h1>
      <p className="mt-10 text-xl">{t("description")}</p>
    </section>
  );
};

export default AboutHeader;
