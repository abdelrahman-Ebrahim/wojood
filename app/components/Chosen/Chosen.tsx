"use client";
import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { useTranslations } from "next-intl";

const Chosen = () => {
  const t = useTranslations("Chosen");

  // Card details using translation
  const cards = [
    { imageSrc: "/Chosen4.png", altText: "Chosen4", title: t("card1Title"), linkText: t("cardLink") },
    { imageSrc: "/Chosen2.png", altText: "Chosen2", title: t("card2Title"), linkText: t("cardLink") },
    { imageSrc: "/Chosen3.png", altText: "Chosen3", title: t("card3Title"), linkText: t("cardLink") },
    { imageSrc: "/Chosen1.png", altText: "Chosen1", title: t("card4Title"), linkText: t("cardLink") },
  ];

  return (
    <section
      className="mt-[90px] flex flex-col text-center font-rubik lg:mx-0 xl:mx-[143px] mb-8"
    >
      {/* Heading */}
      <h2
        className="text-[#390089] font-semibold text-xl md:text-[34px]"
      >
        {t("title")}
      </h2>
      <p
        className="mt-2 text-[#140623] font-normal text-base md:text-xl"    >
        {t("subtitle")}
      </p>

      {/* Image Cards Section */}
      <div className="md:px-2 lg:px-[58px]">
        <div
          className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 px-5 md:px-2 lg:px-[58px] mt-8 gap-8"
        >
          {/* First Card */}
          <div>
            <ImageCard
              imageSrc={cards[0].imageSrc}
              altText={cards[0].altText}
              title={cards[0].title}
              linkText={cards[0].linkText}
            />
          </div>

          {/* Second & Third Cards Group */}
          <div
            className="flex flex-col gap-4 lg:gap-[29px]"
          >
            <div>
              <ImageCard
                imageSrc={cards[1].imageSrc}
                altText={cards[1].altText}
                title={cards[1].title}
                linkText={cards[1].linkText}
              />
            </div>
            <div>
              <ImageCard
                imageSrc={cards[2].imageSrc}
                altText={cards[2].altText}
                title={cards[2].title}
                linkText={cards[2].linkText}
              />
            </div>
          </div>

          {/* Fourth Card */}
          <div>
            <ImageCard
              imageSrc={cards[3].imageSrc}
              altText={cards[3].altText}
              title={cards[3].title}
              linkText={cards[3].linkText}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chosen;
