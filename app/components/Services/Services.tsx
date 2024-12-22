"use client";
import Image from "next/image";
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
      <div className="my-4 mx-5 lg:mx-[86px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-[115px] lg:px-5 xl:px-[65px]">
          {serviceItems.map((service, index) => (
            <div
              key={service.id}
              className="rounded-[10px] border border-black"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
