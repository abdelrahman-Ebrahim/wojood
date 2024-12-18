"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Library = () => {
  return (
    <section className="mt-16 text-center flex flex-col justify-center items-center gap-12 font-rubik">
      {/* Section Animation (Fade & Scale) */}
      <motion.div
        className="flex flex-col justify-center items-center gap-4 mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        {/* Header */}
        <motion.h2
          className="font-semibold text-[38px]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          مكتبة صور تنمو باستمرار
        </motion.h2>
        <motion.p
          className="font-normal text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          اكتشف تنوعا لا حدود له في عالم الصور مع مكتبة لا تنتهي من الفنون
        </motion.p>
      </motion.div>

      {/* Filter Buttons with scroll animations */}
      <div className="flex flex-col justify-center items-center gap-6 px-[117px]">
        <div className="flex justify-center items-center gap-[15px]">
          <motion.button
            className="bg-[#6152C11A] rounded-[26px] text-[#390089] flex justify-center items-center py-2 px-9"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#04FF99",
              color: "#390089",
            }}
          >
            فيكتور
          </motion.button>
          <motion.button
            className="bg-[#6152C11A] rounded-[26px] text-[#390089] flex justify-center items-center py-2 px-9"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#04FF99",
              color: "#390089",
            }}
          >
            رسومات
          </motion.button>
          <motion.button
            className="bg-[#390089] rounded-[26px] text-white font-semibold flex justify-center items-center py-2 px-9"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#04FF99",
              color: "#390089",
            }}
          >
            صور فوتوغرافية
          </motion.button>
        </div>

        {/* Image Grids */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[13px] w-full">
          {["library1.png", "library2.png", "library3.png"].map(
            (image, index) => (
              <motion.div
                className="relative w-[328px] h-[338px] overflow-hidden rounded-[12px]"
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: index * 0.3,
                }}
              >
                <Image
                  src={`/${image}`}
                  alt={`library${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            )
          )}
        </div>

        {/* Image Grid 2 with fade-in & scale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] w-full">
          {["library4.png", "library5.png"].map((image, index) => (
            <motion.div
              className="relative w-[481px] h-[293px] overflow-hidden"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: index * 0.3,
              }}
            >
              <Image
                src={`/${image}`}
                alt={`library${index + 4}`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Button with bounce effect */}
        <motion.button
          className="flex justify-center items-center gap-2 bg-[#04FF99] rounded-[43px] px-[14px] py-2 mt-10 text-[#390089]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 150,
            damping: 15,
          }}
        >
          <p className="font-medium text-[15px]">مشاهدة المزيد</p>
          <MdOutlineKeyboardArrowLeft size={15} />
        </motion.button>
      </div>
    </section>
  );
};

export default Library;
