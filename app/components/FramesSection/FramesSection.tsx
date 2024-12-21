"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const FramesSection = () => {
  const t = useTranslations("Frames");
  const locale = useLocale();
  return (
    <section className="mt-16 text-center font-rubik lg:mx-10 xl:mx-0">
      <div className={`flex flex-col lg:flex-row justify-center items-center ${locale === "ar" ? " gap-5 lg:gap-[80px]" : "gap-5 lg:gap-[200px]"}`}>
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center items-center min-w-[364px]"
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          viewport={{ once: false, amount: 0.5 }} // Trigger when 50% is in the viewport
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
        >
          {/* Text Block 1 */}
          <div className="text-center lg:text-start">
            <h2 className="text-3xl md:text-[40px] font-semibold relative inline-block leading-3">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#3AFAFC] -z-10" />
                {t("title1")}
              </span>
            </h2>
          </div>

          {/* Text Block 2 */}
          <div className="text-center lg:text-start">
            <h2 className="text-3xl md:text-[40px] font-semibold relative inline-block leading-[60px]">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#3AFAFC] -z-10" />
                {t("title2")}
              </span>
            </h2>
          </div>

          {/* Paragraph */}
          <motion.p
            className="font-normal text-lg md:text-xl leading-[29px] text-center lg:text-start mt-4 max-w-[300px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }} // Trigger when 50% is in the viewport
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            {t("subtitle1")} <br />
            {t("subtitle2")} <br /> {t("subtitle3")}
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 15 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{ once: false, amount: 0.5 }} // Trigger when 50% is in the viewport
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 120,
            damping: 30,
          }}
          className="mx-2 md:mx-0"
        >
          <Image
            src="/mockup.png"
            alt="mockup"
            width={480}
            height={480}
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FramesSection;
