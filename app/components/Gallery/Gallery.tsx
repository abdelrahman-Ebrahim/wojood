import Image from "next/image";
import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const galleryItems = [
  { id: 1, src: "/gallery1.png", alt: "gallery1", price: "١٥.٩٩ ر.س" },
  { id: 2, src: "/gallery2.png", alt: "gallery2", price: "١٥.٩٩ ر.س" },
  { id: 3, src: "/gallery3.png", alt: "gallery3", price: "١٥.٩٩ ر.س" },
  { id: 4, src: "/gallery4.png", alt: "gallery4", price: "١٥.٩٩ ر.س" },
];

const Gallery = () => {
  return (
    <section className="bg-galleryBackground bg-center bg-cover relative w-full flex flex-col font-rubik mt-16">
      {/* Top Button */}
      <div className="px-[171px] mt-[59px] flex self-end">
        <button className="flex justify-center items-center gap-2 bg-[#04FF99] rounded-[43px] px-[14px] py-2">
          <p className="font-semibold text-[15px] text-[#140623]">مشاهدة المزيد</p>
          <MdOutlineKeyboardArrowLeft size={15} />
        </button>
      </div>

      {/* Gallery */}
      <div className="mt-6 px-[114px] flex justify-center items-center gap-8 pb-[59px]">
        {/* Left Arrow */}
        <div className="size-12 rounded-full flex justify-center items-center border border-[#D1D5DB] cursor-pointer">
          <MdKeyboardArrowRight size={24} />
        </div>

        {/* Gallery Items */}
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center"
          >
            <div className="bg-[#F5F5F5] rounded-[12px] size-[241px]">
              <div className="px-[50px] py-6">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                  className="w-full border-black border-[5px] shadow-galleryCombinedShadows"
                />
              </div>
            </div>
            <p className="font-medium font-rubik text-[15px] mt-2">
              عصفور مع أزهار
            </p>
            <p className="font-normal font-rubik text-[16px]">
              يبدأ من{" "}
              <span className="text-[#390089] font-bold">{item.price}</span>
            </p>
          </div>
        ))}

        {/* Right Arrow */}
        <div className="size-12 rounded-full flex justify-center items-center border border-[#D1D5DB] cursor-pointer">
          <MdKeyboardArrowLeft size={24} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
