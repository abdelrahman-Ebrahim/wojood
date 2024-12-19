"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const ColorsSection = () => {
  // Variants for Animations
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideRightVariant = {
    hidden: { opacity: 0, x: -50, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9, rotate: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const t = useTranslations("Colors");
  const locale = useLocale();

  return (
    <motion.section
      className="mt-16 text-center font-rubik"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="flex justify-between items-center">
        {/* Text Section */}
        <div
          className={`flex flex-col min-w-[364px] ${
            locale === "ar" ? "mr-[127px]" : "ml-[127px]"
          }`}
        >
          {/* Text Block 1 */}
          <motion.div className="text-start" variants={slideRightVariant}>
            <h2 className="text-[40px] font-semibold relative inline-block leading-3">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#04FF99] -z-10 text-nowrap" />
                {t("title1")}
              </span>
            </h2>
          </motion.div>

          {/* Text Block 2 */}
          <motion.div className="text-start" variants={slideRightVariant}>
            <h2 className="text-[40px] font-semibold relative inline-block">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#04FF99] -z-10 text-nowrap" />
                {t("title2")}
              </span>
            </h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            className="font-normal text-xl leading-[29px] text-start mt-4"
            variants={fadeUpVariant}
          >
            {t("subtitle1")}
            <br /> {t("subtitle2")}
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          className={`${locale === "ar" ? "ml-[137px]" : "mr-[137px]"}`}
          variants={imageVariant}
          whileHover={{ scale: 1.05 }} // Slight zoom on hover for more interactivity
        >
          <Image
            src="/ColorSection.png"
            alt="ColorSection"
            width={800}
            height={400}
            className="w-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ColorsSection;
