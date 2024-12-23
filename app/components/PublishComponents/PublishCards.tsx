import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PublishCards = () => {
  const t = useTranslations("PublishCards");
  const locale = useLocale();

  return (
    <section className="container mx-auto flex max-w-screen-lg flex-col items-start gap-16 px-10 py-24 md:flex-row">
      <div className="flex w-full flex-1 flex-col gap-16 md:gap-20">
        <div className="relative flex min-h-[240px] items-start gap-2 rounded-xl bg-[#5106AC]">
          <div className="flex flex-col items-start gap-2 pt-[48px] pb-[72px] ps-[26px]">
            <div className="text-lg font-semibold text-white">
              {t("card1title")}
            </div>
            <small className="inline-block text-sm text-white">
              {t("card1text")}
            </small>
          </div>
          <div className="w-1/3 shrink-0">
            <Image
              src={"/publish1.png"}
              alt="publish1"
              width={320}
              height={349}
              className={`absolute bottom-0 lg:-bottom-5 w-[250px] h-[250px] lg:w-[320px] lg:h-[349px] ${
                locale === "ar"
                  ? "lg:-end-14 md:-end-20 -end-[68px]"
                  : "lg:-end-24 md:-end-24 -end-[80px]"
              }`}
            />
          </div>
        </div>
        <div className="relative flex min-h-[240px] items-start gap-2 rounded-xl bg-white">
          <div className="flex flex-col items-start gap-2 pt-[87px] ps-[32px] pb-[110px]">
            <div className="text-lg font-semibold text-[#390089]">
              {t("card2title")}
            </div>
            <small className="inline-block text-sm text-[#606060]">
              {t("card2text")}
            </small>
          </div>
          <div className="w-1/2 shrink-0">
            <Image
              src={"/publish2.png"}
              alt="publish2"
              width={291}
              height={231}
              className={`absolute bottom-0  md:-bottom-5 w-[200px] h-[200px] lg:w-[291px] lg:h-[231px] ${
                locale === "ar" ? "md:-end-12 -end-10" : "lg:-end-14"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col gap-16 md:mt-20 md:gap-20">
        <div className="relative flex min-h-[240px] items-start gap-2 rounded-xl bg-white">
          <div className="flex flex-col items-start gap-2 py-[87px] ps-[32px]">
            <div className="text-lg font-semibold text-[#390089]">
              {t("card3title")}
            </div>
            <small className="inline-block text-sm text-[#606060]">
              {t("card3text")}
            </small>
          </div>
          <div className="w-1/2 shrink-0">
            <Image
              src={"/publish3.png"}
              alt="publish3"
              width={328}
              height={260}
              className={`absolute bottom-0 w-[200px] h-[200px] md:w-[250px] md:h-[250px]  md:bottom-0 lg:w-[328px] lg:h-[260px] ${locale === "ar"? "-end-12" : "lg:-end-24 md:-end-16"}`}
            />
          </div>
        </div>
        <div className="relative flex min-h-[240px] items-start gap-2 rounded-xl bg-[#5106AC]">
          <div className="flex flex-col items-start gap-2 py-[69px] ps-[10px]">
            <div className="text-lg font-semibold text-white">
              {t("card4title")}
            </div>
            <small className="inline-block text-sm text-white">
              {t("card4text")}
            </small>
          </div>
          <div className="w-1/2 shrink-0">
            <Image
              src={"/publish4.png"}
              alt="publish4"
              width={270}
              height={236}
              className="absolute bottom-0 -end-12 w-[200px] h-[200px] lg:w-[270px] lg:h-[236px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishCards;
