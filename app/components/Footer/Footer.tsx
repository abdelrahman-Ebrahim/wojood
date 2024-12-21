"use client";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="flex flex-col justify-center items-center gap-[10px] font-rubik w-full py-[45px] px-5 xl:px-[60px]">
      {/* Main Footer with Scroll Animation */}
      <motion.div
        className="rounded-[16px] bg-[#EFE9FF] mt-[19px] mx-[38px] w-full"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden and below view)
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in place
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }} // Smooth transition
        viewport={{ once: true }} // Trigger animation only once when in view
      >
        <div className="py-[45px] px-[22px] flex flex-col gap-2">
          {/* Grid Layout for Content */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left Column (Logo and Contact Information) */}
            <motion.div
              className="col-span-1 flex flex-col gap-1 items-start justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="pb-[7px]">
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={145}
                  height={90}
                  className="w-[145] h-[90]"
                />
              </div>
              <p className="font-normal text-sm text-[#212529BF]">
                {t("address")}
              </p>
              <p className="font-normal text-sm text-[#212529BF]">{t("tax")}</p>
              <div className="font-normal text-sm text-[#212529BF] flex justify-start gap-2 items-center">
                <TfiHeadphoneAlt size={15} />
                <p>{t("support")}</p>
              </div>
            </motion.div>

            {/* Right Columns (Important Links) */}
            <motion.div
              className="col-span-2 flex justify-center items-start gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex flex-col gap-[7px] justify-center items-start w-[293px]">
                <h6 className="font-semibold text-[15px]">{t("title1")}</h6>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">
                  {t("title1link1")}
                </p>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">
                  {t("title1link2")}
                </p>
              </div>
              <div className="flex flex-col gap-[7px] justify-center items-start w-[293px]">
                <h6 className="font-semibold text-[15px]">{t("title2")}</h6>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">
                  {t("title2link1")}
                </p>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">
                  {t("title2link2")}
                </p>
              </div>
              <div className="flex flex-col gap-[7px] justify-center items-start w-[293px]">
                <h6 className="font-semibold text-[15px]">{t("title3")}</h6>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">
                  {t("title3link1")}
                </p>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">
                  {t("title3link2")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Icons with Staggered Animation */}
          <motion.div
            className="flex justify-start items-start gap-2 mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
              staggerChildren: 0.2, // Stagger animations for icons
            }}
          >
            {[FaWhatsapp, FaInstagram, FaYoutube, FaXTwitter, FaFacebookF].map(
              (Icon, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                >
                  <Icon size={20} className="text-[#212529BF]" />
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bottom Section with Logo and Information */}
      <motion.div
        className="px-16 py-[22px] flex justify-between items-center rounded-[16px] bg-[#EEEEEE] mx-[38px] w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <p className="text-sm font-normal">{t("copyright")}</p>
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/footer1.png"}
            alt="footer1"
            width={44}
            height={15}
            className="w-full"
          />
          <Image
            src={"/footer2.png"}
            alt="footer2"
            width={45}
            height={15}
            className="w-full"
          />
          <Image
            src={"/footer3.png"}
            alt="footer3"
            width={19}
            height={15}
            className="w-full"
          />
          <Image
            src={"/footer4.png"}
            alt="footer4"
            width={89}
            height={15}
            className="w-full"
          />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
