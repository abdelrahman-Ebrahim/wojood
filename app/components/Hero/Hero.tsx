import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";

const Hero = () => {
  return (
    <div className="bg-heroBackground bg-center bg-cover relative w-full pb-24">
      <div className="flex flex-col font-rubik mx-[120px] pt-16">
        {/* Headings */}
        <p className="text-white font-extrabold text-[36px] max-w-[487px]">
          إستمتع بتجربة غنية تثري حواسك
          <br /> وتلهم إبداعك...
        </p>
        <p className="text-[#BAA3D9] font-normal mt-2">
          امتلك فنك. شارك قصتك. بِع حول العالم
        </p>

        {/* Search Section */}
        <div className="relative max-w-[601px] w-full mt-[32px]">
          {/* Input Field */}
          <input
            type="text"
            className="w-full rounded-[20px] h-[55px] px-4 backdrop-blur-custom focus:outline-none text-white"
          />
          {/* Centered Box and Search */}
          <div className="absolute inset-y-0 left-0 flex items-center justify-between w-full px-2">
            <div className="bg-[#390089] flex items-center gap-2 rounded-[20px] text-white font-rubik px-[14px] py-[8px]">
              <Image
                src={"/canvas.png"}
                alt="canvas"
                width={18}
                height={18}
                className="size-[18px]"
              />
              <p>كانفاس</p>
              <IoIosArrowUp size={16} />
            </div>
            <div className="size-[25px] bg-[#140623] flex justify-center items-center rounded-full cursor-pointer">
              <CiSearch size={15} className="text-white" />
            </div>
          </div>
        </div>

        {/* Popular Search Section */}
        <div className="flex items-center gap-4 mt-6 text-white">
          <p>الأكثر بحثا :</p>
          <div className="flex gap-3">
            {["طبيعة", "مناسبات", "اليوم الوطني"].map((item, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF38] px-4 py-[6px] rounded-[40px] backdrop-blur-custom"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
