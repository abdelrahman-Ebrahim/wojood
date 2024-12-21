"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";

const galleryItems = [
  { id: 1, src: "/gallery1.png", alt: "gallery1", price: "١٥.٩٩ ر.س" },
  { id: 2, src: "/gallery2.png", alt: "gallery2", price: "١٥.٩٩ ر.س" },
  { id: 3, src: "/gallery3.png", alt: "gallery3", price: "١٥.٩٩ ر.س" },
  { id: 4, src: "/gallery4.png", alt: "gallery4", price: "١٥.٩٩ ر.س" },
];

const Gallery = () => {
  const t = useTranslations("Gallery");
  const locale = useLocale();
  // Define animation variants
  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const arrowVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-galleryBackground bg-center bg-cover relative w-full flex flex-col font-rubik mt-16">
      {/* Top Button */}
      <motion.div
        className={`px-[20px] md:px-[40px] lg:px-[80px] xl:px-[171px] mt-[59px] flex justify-end w-full`}
        variants={buttonVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <button className="flex justify-center items-center gap-2 bg-[#04FF99] rounded-[43px] px-[14px] py-2">
          <p className="font-semibold text-[15px] text-[#140623]">
            {t("button")}
          </p>
          {locale === "ar" ? (
            <MdOutlineKeyboardArrowLeft size={15} />
          ) : (
            <MdOutlineKeyboardArrowRight size={15} />
          )}
        </button>
      </motion.div>

      {/* Gallery */}
      <div className="mt-6 xl:px-[114px] flex justify-center items-center gap-2 xl:gap-8 pb-[59px]">
        {/*Arrow */}
        <motion.div
          className="hidden md:size-12 rounded-full md:flex justify-center items-center border border-[#D1D5DB] cursor-pointer"
          variants={arrowVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {locale === "ar" ? (
            <MdKeyboardArrowRight className="md:size-[24px] size-[12px]" />
          ) : (
            <MdKeyboardArrowLeft className="md:size-[24px] size-[12px]"  />
          )}
        </motion.div>

        {/* Gallery Items */}
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-center justify-center"
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div
              className={`bg-[#F5F5F5] rounded-[12px] size-[180px] sm:size-[220px] md:size-[200px] lg:size-[220px] xl:size-[241px] ${
                item.id !== 4 ? "block" : "hidden lg:block"
              }  ${
                item.id !== 3 ? "block" : "hidden md:block"
              }`}
            >
              <div className="px-[50px] py-6">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                  className="w-full border-black border-[5px] shadow-galleryCombinedShadows"
                />
              </div>
            </div>
            <p className={`font-medium font-rubik text-[15px] mt-2 ${
                item.id !== 4 ? "block" : "hidden lg:block"
              } ${
                item.id !== 3 ? "block" : "hidden md:block"
              }`}>
              {t("title")}
            </p>
            <p className={`font-normal font-rubik text-[16px] ${
                item.id !== 4 ? "block" : "hidden lg:block"
              } ${
                item.id !== 3 ? "block" : "hidden md:block"
              }`}>
              {t("subtitle")}
              <span className="text-[#390089] font-bold">{t("price")}</span>
            </p>
          </motion.div>
        ))}

        {/*Arrow*/}
        <motion.div
          className="hidden md:size-12 rounded-full md:flex justify-center items-center border border-[#D1D5DB] cursor-pointer"
          variants={arrowVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {locale === "ar" ? (
            <MdKeyboardArrowLeft className="md:size-[24px] size-[12px]"  />
          ) : (
            <MdKeyboardArrowRight className="md:size-[24px] size-[12px]"  />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
