"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Services");
  const serviceItems = [
    {
      id: 1,
      imageSrc: "/services1.png",
      altText: "services1",
      title: t("title1"),
      description: t("description1"),
    },
    {
      id: 2,
      imageSrc: "/services2.png",
      altText: "services2",
      title: t("title2"),
      description: t("description2"),
    },
    {
      id: 3,
      imageSrc: "/services3.png",
      altText: "services3",
      title: t("title3"),
      description: t("description3"),
    },
  ];
  return (
    <section className="mt-16 text-center font-rubik">
      <div className="my-4 mx-[86px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[115px] px-[65px]">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.id}
              className="rounded-[10px] border border-black"
              initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
              whileInView={{ opacity: 1, y: 0 }} // Final state: fully visible and in place
              transition={{
                duration: 0.8,
                delay: index * 0.3, // Staggered animation delay for each item
                ease: "easeOut",
              }}
            >
              <div className="p-[26px] flex flex-col justify-center items-center gap-4">
                <div>
                  <Image
                    src={service.imageSrc}
                    alt={service.altText}
                    width={197}
                    height={138}
                  />
                </div>
                <p className="font-bold text-xl">{service.title}</p>
                <p className="font-normal text-sm text-[#64626A] max-w-[247px]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
