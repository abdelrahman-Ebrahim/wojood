import { useTranslations } from "next-intl";
import React from "react";

const PublishDesc = () => {
  const t = useTranslations("PublishDesc");
  return (
    <section className="mt-[51px] px-3 lg:px-[277px] flex flex-col justify-center items-center text-center">
      <p className="font-normal text-[19px] mb-10">
        {t("text")}
      </p>
      <button className="w-[242px] h-[49px] rounded-[32px] bg-[#390089] text-white">
        <p className="text-lg font-medium">{t("button")}</p>
      </button>
    </section>
  );
};

export default PublishDesc;
