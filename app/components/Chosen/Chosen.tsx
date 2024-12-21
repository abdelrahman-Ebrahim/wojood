"use client";
import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Chosen = () => {
  const t = useTranslations("Chosen");

  // Variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Card details using translation
  const cards = [
    { imageSrc: "/Chosen4.png", altText: "Chosen4", title: t("card1Title"), linkText: t("cardLink") },
    { imageSrc: "/Chosen2.png", altText: "Chosen2", title: t("card2Title"), linkText: t("cardLink") },
    { imageSrc: "/Chosen3.png", altText: "Chosen3", title: t("card3Title"), linkText: t("cardLink") },
    { imageSrc: "/Chosen1.png", altText: "Chosen1", title: t("card4Title"), linkText: t("cardLink") },
  ];

  return (
    <motion.section
      className="mt-[90px] flex flex-col text-center font-rubik lg:mx-0 xl:mx-[143px] mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Heading */}
      <motion.h2
        className="text-[#390089] font-semibold text-xl md:text-[34px]"
        variants={fadeUpVariant}
      >
        {t("title")}
      </motion.h2>
      <motion.p
        className="mt-2 text-[#140623] font-normal text-base md:text-xl"
        variants={fadeUpVariant}
      >
        {t("subtitle")}
      </motion.p>

      {/* Image Cards Section */}
      <div className="md:px-2 lg:px-[58px]">
        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 px-5 md:px-2 lg:px-[58px] mt-8 gap-8"
          variants={staggerContainer}
        >
          {/* First Card */}
          <motion.div variants={cardVariant}>
            <ImageCard
              imageSrc={cards[0].imageSrc}
              altText={cards[0].altText}
              title={cards[0].title}
              linkText={cards[0].linkText}
            />
          </motion.div>

          {/* Second & Third Cards Group */}
          <motion.div
            className="flex flex-col gap-4 lg:gap-[29px]"
            variants={staggerContainer}
          >
            <motion.div variants={cardVariant}>
              <ImageCard
                imageSrc={cards[1].imageSrc}
                altText={cards[1].altText}
                title={cards[1].title}
                linkText={cards[1].linkText}
              />
            </motion.div>
            <motion.div variants={cardVariant}>
              <ImageCard
                imageSrc={cards[2].imageSrc}
                altText={cards[2].altText}
                title={cards[2].title}
                linkText={cards[2].linkText}
              />
            </motion.div>
          </motion.div>

          {/* Fourth Card */}
          <motion.div variants={cardVariant}>
            <ImageCard
              imageSrc={cards[3].imageSrc}
              altText={cards[3].altText}
              title={cards[3].title}
              linkText={cards[3].linkText}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Chosen;
