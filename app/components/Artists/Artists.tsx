"use client";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Artists = () => {
  const t = useTranslations("Artist");

  const artistsData = [
    {
      name: t("artist1"),
      role: t("role1"),
      bio: t("bio1"),
      image: "/artist1.png",
      social: [<FaInstagram key="ig1" />, <FiFacebook key="fb1" />],
    },
    {
      name: t("artist2"),
      role: t("role2"),
      bio: t("bio2"),
      image: "/artist2.png",
      social: [<FiFacebook key="fb2" />],
    },
    {
      name: t("artist3"),
      role: t("role3"),
      bio: t("bio3"),
      image: "/artist3.png",
      social: [<FaInstagram key="ig2" />, <FiFacebook key="fb3" />],
    },
    {
      name: t("artist4"),
      role: t("role4"),
      bio: t("bio4"),
      image: "/artist4.png",
      social: [
        <FiTwitter key="tw1" />,
        <FaInstagram key="ig3" />,
        <FiFacebook key="fb4" />,
      ],
    },
  ];

  return (
    <section className="mt-16 font-rubik flex flex-col mx-[157px] text-center justify-center items-center">
      {/* whileInView Title */}
      <motion.h2
        className="font-semibold text-[38px]"
        initial={{ opacity: 0, y: 20 }} // Start with slightly lower opacity and slide in
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to position
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {t("title")}
      </motion.h2>

      {/* whileInView Subtitle */}
      <motion.p
        className="text-xl mt-4 font-rubik font-normal"
        initial={{ opacity: 0 }} // Start with hidden opacity
        whileInView={{ opacity: 1 }} // Fade in
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {t("subtitle")}
      </motion.p>

      {/* Container with a fade-in effect for artist cards */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[27px]"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 },
          },
        }}
      >
        {artistsData.map((artist, index) => (
          <motion.div
            key={index}
            className="flex flex-col border rounded-[14px] gap-[14px] max-w-[300px]"
            initial={{ opacity: 0, y: 50 }} // Start off-screen with opacity 0
            whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
          >
            <Image
              src={artist.image}
              alt={`Artist ${artist.name}`}
              width={500}
              height={500}
              className="w-full h-[218px] object-cover rounded-t-[14px]"
            />
            <div className="flex flex-col items-start h-full px-[14px]">
              <div>
                <h3 className="text-[15px] font-semibold text-start">
                  {artist.name}
                </h3>
                <p className="text-[12px] font-normal text-[#3E3E59] mt-1 text-start">
                  {artist.role}
                </p>
                <p className="text-[12px] font-normal text-[#3E3E59] mt-2 text-start">
                  {artist.bio}
                </p>
              </div>
              <div className="flex gap-[14px] items-end mt-[15px]">
                {artist.social.map((icon, i) => (
                  <div
                    key={i}
                    className="size-[30px] flex justify-center items-center bg-[#F2F4F7] rounded-full"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Artists;
