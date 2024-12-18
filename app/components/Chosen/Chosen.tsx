"use client";
import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { motion } from "framer-motion";

const Chosen = () => {
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

  return (
    <motion.section
      className="mt-[90px] flex flex-col text-center font-rubik mx-[143px] mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Heading */}
      <motion.h2
        className="text-[#390089] font-semibold text-[34px]"
        variants={fadeUpVariant}
      >
        أقسام مُختارة
      </motion.h2>
      <motion.p
        className="mt-2 text-[#140623] font-normal text-xl"
        variants={fadeUpVariant}
      >
        استكشِف مجموعة مُختارة من الأعمال الفنيّة المُميّزة بعناية لتُناسب ذوقك
      </motion.p>

      {/* Image Cards Section */}
      <div className="px-[58px]">
        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-[58px] mt-8 gap-8"
          variants={staggerContainer}
        >
          <motion.div variants={cardVariant}>
            <ImageCard
              imageSrc="/Chosen4.png"
              altText="Chosen4"
              title="صور فوتوغرافية"
              linkText="المزيد"
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-[29px]"
            variants={staggerContainer}
          >
            <motion.div variants={cardVariant}>
              <ImageCard
                imageSrc="/Chosen2.png"
                altText="Chosen2"
                title="الخط العربي"
                linkText="المزيد"
              />
            </motion.div>
            <motion.div variants={cardVariant}>
              <ImageCard
                imageSrc="/Chosen3.png"
                altText="Chosen3"
                title="رسومات"
                linkText="المزيد"
              />
            </motion.div>
          </motion.div>
          <motion.div variants={cardVariant}>
            <ImageCard
              imageSrc="/Chosen1.png"
              altText="Chosen1"
              title="لوحات"
              linkText="المزيد"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Chosen;
