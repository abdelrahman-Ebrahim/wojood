import Image from "next/image";
import React from "react";

const serviceItems = [
  {
    id: 1,
    imageSrc: "/services1.png",
    altText: "services1",
    title: "الفنون",
    description:
      "اجعل منزلك معرضًا فنيًا خاصًا بك مع لوحاتنا الفنية وبوستراتنا عالية الجودة.",
  },
  {
    id: 2,
    imageSrc: "/services2.png",
    altText: "services2",
    title: "المحتوى",
    description:
      "اكتشف مزيجًا فريدًا من المحتوى الرقمي والمطبوعات عالية الجودة على منصة وجود.",
  },
  {
    id: 3,
    imageSrc: "/services3.png",
    altText: "services3",
    title: "مجتمعنا",
    description:
      "إنضم إلى مجتمعنا النابض بالابداع وشاركنا إبداعاتك واعمالك الفنية والتصويرية.",
  },
];

const Services = () => {
  return (
    <section className="mt-16 text-center font-rubik">
      <div className="my-4 mx-[86px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[115px] px-[65px]">
          {serviceItems.map((service) => (
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
