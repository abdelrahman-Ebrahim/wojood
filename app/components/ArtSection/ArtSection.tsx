"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ArtSection = () => {
  return (
    <section className="mt-16 text-center font-rubik">
      <div className="flex gap-[127px] justify-center items-center py-[92px]">
        {/* Image Section */}
        <motion.div
          className="mr-[137px] relative w-full flex justify-center items-center"
          initial={{ opacity: 0, y: 100 }} // Start with opacity 0 and below
          whileInView={{ opacity: 1, y: 0 }} // whileInView to full opacity and original Y position
          transition={{ duration: 1.5, ease: "easeOut" }} // Transition settings
        >
          <div className="w-full">
            <motion.div
              className="flex flex-col justify-center items-center gap-[44px] relative"
              initial={{ opacity: 0, scale: 0.8 }} // Initial state
              whileInView={{ opacity: 1, scale: 1 }} // Target state
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth animation
            >
              {/* Two Skewed Orange Lines */}
              <div className="bg-[#FF4800] w-[651px] h-[100px] skew-x-0 skew-y-2" />
              <div className="bg-[#FF4800] w-[651px] h-[100px] skew-x-0 -skew-y-2" />

              {/* Centered Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full flex justify-center items-center">
                <Image
                  src="/art1.png"
                  alt="art1"
                  width={473}
                  height={350}
                  className="-rotate-6 shadow-artCombinedShadows w-[473px] h-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Text Section */}
        <div className="flex flex-col min-w-[364px] ml-[127px]">
          {/* Text Block 1 */}
          <motion.div
            className="text-start"
            initial={{ opacity: 0, x: -100 }} // Start from left
            whileInView={{ opacity: 1, x: 0 }} // whileInView to original position
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className="text-[40px] font-semibold relative inline-block leading-3">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#FF8C5E] -z-10" />
                جمال الفن في كل
              </span>
            </h2>
          </motion.div>

          {/* Text Block 2 */}
          <motion.div
            className="text-start"
            initial={{ opacity: 0, x: 100 }} // Start from right
            whileInView={{ opacity: 1, x: 0 }} // whileInView to original position
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className="text-[40px] font-semibold relative inline-block">
              <span className="relative">
                <span className="absolute bottom-1 -left-[18px] w-[calc(100%+20px)] h-[24px] bg-[#FF8C5E] -z-10" />
                زاويـــة
              </span>
            </h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            className="font-normal text-xl leading-[29px] text-start mt-4"
            initial={{ opacity: 0 }} // Start with opacity 0
            whileInView={{ opacity: 1 }} // whileInView to full opacity
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            اكتشف لوحات فنية مميزة تضفي المزيد من <br />
            الجمال على منزلك
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ArtSection;
