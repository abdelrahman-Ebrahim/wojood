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
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="flex flex-col justify-center items-center gap-[10px] font-rubik w-full py-[45px] px-5 xl:px-[60px]">
      {/* Main Footer with Scroll Animation */}
      <div className="rounded-[16px] bg-[#EFE9FF] mt-[19px] mx-[38px] w-full">
        <div className="py-[45px] px-[22px] flex flex-col gap-2">
          {/* Grid Layout for Content */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left Column (Logo and Contact Information) */}
            <div className="col-span-1 flex flex-col gap-1 items-start justify-start">
              <Link href={"/"} className="pb-[7px]">
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={145}
                  height={90}
                  className="w-[145] h-[90]"
                />
              </Link>
              <p className="font-normal text-sm text-[#212529BF]">
                {t("address")}
              </p>
              <p className="font-normal text-sm text-[#212529BF]">{t("tax")}</p>
              <div className="font-normal text-sm text-[#212529BF] flex justify-start gap-2 items-center">
                <TfiHeadphoneAlt size={15} />
                <p>{t("support")}</p>
              </div>
              {/* Social Icons with Staggered Animation */}
              <div className="flex justify-start items-start gap-2 mt-2">
                {[
                  FaWhatsapp,
                  FaInstagram,
                  FaYoutube,
                  FaXTwitter,
                  FaFacebookF,
                ].map((Icon, index) => (
                  <span key={index}>
                    <Icon size={20} className="text-[#212529BF]" />
                  </span>
                ))}
              </div>
            </div>

            {/* Right Columns (Important Links) */}
            <div className="col-span-2 flex justify-start sm:justify-center items-start gap-5 sm:gap-10 mt-5 md:mt-0 flex-wrap sm:flex-nowrap">
              <div className="flex flex-col gap-[7px] justify-center items-start sm:w-[293px] flex-wrap">
                <p className="font-semibold text-[15px] text-nowrap">
                  {t("title1")}
                </p>
                <Link href={"/about"} className="font-normal text-[15px] text-[#253D4E] cursor-pointer text-nowrap">
                  {t("title1link1")}
                </Link>
                <Link href={"/publish"} className="font-normal text-[15px] text-[#253D4E] cursor-pointer text-nowrap">
                  {t("title1link2")}
                </Link>
              </div>
              <div className="flex flex-col gap-[7px] justify-center items-start sm:w-[293px]">
                <p className="font-semibold text-[15px]">{t("title2")}</p>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer text-nowrap">
                  {t("title2link1")}
                </p>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer text-nowrap">
                  {t("title2link2")}
                </p>
              </div>
              <div className="flex flex-col gap-[7px] justify-center items-start sm:w-[293px]">
                <p className="font-semibold text-[15px]">{t("title3")}</p>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer text-nowrap">
                  {t("title3link1")}
                </p>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer text-nowrap">
                  {t("title3link2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section with Logo and Information */}
      <div className="px-16 py-[22px] flex flex-col md:flex-row justify-between items-center rounded-[16px] bg-[#EEEEEE] mx-[38px] w-full gap-5 md:gap-0">
        <p className="text-sm font-normal text-nowrap">{t("copyright")}</p>
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
      </div>
    </footer>
  );
};

export default Footer;
