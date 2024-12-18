"use client";
import React from "react";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <section className="mt-16 mx-[112px] min-h-[350px] rounded-xl bg-center bg-cover bg-joinBg font-rubik relative">
      {/* Overlay with animation */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-[rgba(0,0,0,0.5)] z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Content Wrapper */}
      <div className="relative z-10 pt-9 pr-[66px] flex flex-col gap-4 text-white">
        {/* Heading with animation */}
        <motion.h2
          className="font-extrabold text-[44px] leading-snug"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          انضم إلى .... <br /> أكـــــبر مجتمع فني <br /> في الوطن العربي
        </motion.h2>

        {/* Paragraph with animation */}
        <motion.p
          className="text-[22px] font-normal leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          استكشف الفن، وطور مهاراتك كفنان، أو قم بشراء وبيع الأعمال يمكنك <br />
          القيام بكل ذلك هنا.
        </motion.p>
      </div>

      {/* Button with animation */}
      <motion.div
        className="absolute bottom-5 left-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          type: "spring",
          stiffness: 120,
          damping: 25,
        }}
      >
        <button className="bg-white text-black flex items-center justify-center rounded-full py-[18px] px-[45px] font-semibold text-lg">
          سجل يا فنان
        </button>
      </motion.div>
    </section>
  );
};

export default JoinUs;
