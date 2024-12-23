import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PublishHeader = () => {
  const t = useTranslations("PublishHeader");
  return (
    <div className="relative mb-10 flex flex-col lg:flex-row items-center justify-between rounded-2xl bg-[#6152C1]">
      <div className="relative max-w-screen px-5 py-8 lg:py-4 xl:py-8 lg:p-[60px] text-center md:text-start text-white">
        <h2 className="text-2xl md:text-[37px] font-bold mb-4 leading-9">{t("title")}</h2>
        <p>{t("subtitle")}</p>
      </div>
      {/* Large publish background */}
      <Image
        src={"/publishBg.webp"}
        alt="publishBackground"
        width={756}
        height={500}
        className="hidden lg:block h-full w-auto max-w-[600px]"
      />

      {/* Small publish background */}

      <Image
        src={"/publishMob.png"}
        alt="publishSmallBackground"
        width={756}
        height={306}
        className="block lg:hidden h-auto w-full"
      />
    </div>
  );
};

export default PublishHeader;
