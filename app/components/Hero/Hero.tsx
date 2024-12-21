"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { useLocale, useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const buttonKeys = ["btn1", "btn2", "btn3"];
  // Animation Variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className={`${
        locale === "ar" ? "bg-heroBackground" : "bg-heroMirrorBackground"
      }  bg-center bg-cover relative w-full pb-32 md:pb-28 lg:pb-24 hero`}
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
    >
      <motion.div
        className="flex flex-col font-rubik mx-[40px] md:mx-[120px] pt-16"
        variants={staggerContainer}
      >
        {/* Headings */}
        <motion.p
          className="text-white font-extrabold text-[22px] md:text-[36px] md:max-w-[487px]"
          variants={fadeUpVariant}
        >
          {t("title")}
        </motion.p>
        <motion.p
          className="text-[#BAA3D9] font-normal mt-2"
          variants={fadeUpVariant}
        >
          {t("subtitle")}
        </motion.p>

        {/* Search Section */}
        <motion.div
          className="relative max-w-[601px] w-full mt-[32px]"
          variants={fadeUpVariant}
        >
          {/* Input Field */}
          <input
            type="text"
            className="w-full rounded-[20px] h-[55px] px-4 backdrop-blur-custom focus:outline-none text-white"
          />
          {/* Centered Box and Search */}
          <div className="absolute inset-y-0 left-0 flex items-center justify-between w-full px-2">
            <motion.div
              className="bg-[#390089] flex items-center gap-2 rounded-[20px] text-white font-rubik px-[14px] py-[8px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={"/canvas.png"}
                alt="canvas"
                width={18}
                height={18}
                className="size-[18px]"
              />
              <p className="text-sm md:text-base">{t("button")}</p>
              <IoIosArrowUp size={16} />
            </motion.div>
            <motion.div
              className="size-[25px] bg-[#140623] flex justify-center items-center rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <CiSearch size={15} className="text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Popular Search Section */}
        <motion.div
          className="flex items-center gap-1 md:gap-4 mt-6 text-white flex-wrap sm:flex-nowrap"
          variants={staggerContainer}
        >
          <p className="text-nowrap">{t("label")}</p>
          <div className="flex gap-3">
            {buttonKeys.map((key, index) => (
              <motion.div
                key={index}
                className="bg-[#FFFFFF38] px-2 py-2 md:px-4 md:py-[6px] rounded-[40px] backdrop-blur-custom text-nowrap"
                variants={fadeUpVariant}
                whileHover={{ scale: 1.1 }}
              >
                <p>{t(key)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
