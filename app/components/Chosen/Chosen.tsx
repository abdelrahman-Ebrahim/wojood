import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const Chosen = () => {
  return (
    <section className="mt-[90px] flex flex-col text-center font-rubik mx-[143px] mb-8">
      <h2 className="text-[#390089] font-semibold text-[34px]">أقسام مُختارة</h2>
      <p className="mt-2 text-[#140623] font-normal text-xl">
        استكشِف مجموعة مُختارة من الأعمال الفنيّة المُميّزة بعناية لتُناسب ذوقك
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-[58px] mt-8 gap-8">
        <ImageCard
          imageSrc="/Chosen4.png"
          altText="Chosen4"
          title="صور فوتوغرافية"
          linkText="المزيد"
        />
        <div className="flex flex-col gap-[29px]">
          <ImageCard
            imageSrc="/Chosen2.png"
            altText="Chosen2"
            title="الخط العربي"
            linkText="المزيد"
          />
          <ImageCard
            imageSrc="/Chosen3.png"
            altText="Chosen3"
            title="رسومات"
            linkText="المزيد"
          />
        </div>
        <ImageCard
          imageSrc="/Chosen1.png"
          altText="Chosen1"
          title="لوحات"
          linkText="المزيد"
        />
      </div>
    </section>
  );
};

export default Chosen;
