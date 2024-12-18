"use client"
import Image from "next/image";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { motion } from "framer-motion";

const CanvasSection = () => {
  return (
    <section className="bg-canvasBackground bg-center bg-cover relative w-full flex flex-col font-rubik mt-16">
      {/* Top Button */}
      <motion.div
        className="px-[171px] mt-[59px] flex justify-between"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
      >
        <motion.p
          className="text-[22px] font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          كانفاس اضيف حديثا
        </motion.p>
        <motion.button
          className="flex justify-center items-center gap-1 bg-[#04FF99] rounded-[43px] px-[14px] py-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, type: "spring", stiffness: 80, delay: 0.5 }}
        >
          <p className="font-semibold text-[15px] text-[#140623]">
            مشاهدة المزيد
          </p>
          <MdOutlineKeyboardArrowLeft size={15} />
        </motion.button>
      </motion.div>

      {/* Gallery */}
      <div className="mt-6 px-[114px] flex justify-center items-center gap-8 pb-[59px]">
        {/* Left Arrow */}
        <div className="size-12 rounded-full flex justify-center items-center border border-[#D1D5DB] cursor-pointer">
          <MdKeyboardArrowRight size={24} />
        </div>

        {/* Card 1 with animation */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 150 }}
        >
          <div className="bg-[#F5F5F5] rounded-[12px] size-[241px]">
            <div className="p-[50px]">
              <div className="border-[7px] border-[#CEA956]">
                <Image
                  src="/canvas1.png"
                  alt="canvas1"
                  width={1000}
                  height={1000}
                  className="w-full border-black border-[2px] shadow-galleryCombinedShadows"
                />
              </div>
            </div>
          </div>
          <p className="font-medium font-rubik text-[15px] mt-2">عصفور مع أزهار</p>
          <p className="font-normal font-rubik text-[16px]">يبدأ من <span className="text-[#390089] font-bold">١٥.٩٩ ر.س</span></p>
        </motion.div>

        {/* Card 2 with animation */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 150 }}
        >
          <div className="bg-[#F5F5F5] rounded-[12px] size-[241px]">
            <div className="py-[50px] px-[22px]">
              <div className="border-[7px] border-[#CEA956]">
                <Image
                  src="/canvas2.png"
                  alt="canvas2"
                  width={1000}
                  height={1000}
                  className="w-full border-black border-[2px] shadow-galleryCombinedShadows"
                />
              </div>
            </div>
          </div>
          <p className="font-medium font-rubik text-[15px] mt-2">عصفور مع أزهار</p>
          <p className="font-normal font-rubik text-[16px]">يبدأ من <span className="text-[#390089] font-bold">١٥.٩٩ ر.س</span></p>
        </motion.div>

        {/* Card 3 with animation */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 150 }}
        >
          <div className="bg-[#F5F5F5] rounded-[12px] size-[241px]">
            <div className="py-[60px] px-[30px]">
              <div className="border-[7px] border-[#CEA956] -rotate-90 overflow-hidden w-[195px] h-[135px] relative">
                <div className="bg-canvas3 bg-center bg-cover h-[200px] w-[200px] rotate-90" />
              </div>
            </div>
          </div>
          <p className="font-medium font-rubik text-[15px] mt-2">عصفور مع أزهار</p>
          <p className="font-normal font-rubik text-[16px]">يبدأ من <span className="text-[#390089] font-bold">١٥.٩٩ ر.س</span></p>
        </motion.div>

        {/* Card 4 with animation */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 150 }}
        >
          <div className="bg-[#F5F5F5] rounded-[12px] size-[241px]">
            <div className="py-[60px] px-[30px]">
              <div className="">
                <Image
                  src="/canvas4.png"
                  alt="canvas4"
                  width={1000}
                  height={1000}
                  className="w-full shadow-galleryCombinedShadows"
                />
              </div>
            </div>
          </div>
          <p className="font-medium font-rubik text-[15px] mt-2">عصفور مع أزهار</p>
          <p className="font-normal font-rubik text-[16px]">يبدأ من <span className="text-[#390089] font-bold">١٥.٩٩ ر.س</span></p>
        </motion.div>

        {/* Right Arrow */}
        <div className="size-12 rounded-full flex justify-center items-center border border-[#D1D5DB] cursor-pointer">
          <MdKeyboardArrowLeft size={24} />
        </div>
      </div>
    </section>
  );
};

export default CanvasSection;
