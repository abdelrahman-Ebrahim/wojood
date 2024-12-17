import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Library = () => {
  return (
    <section className="mt-16 text-center flex flex-col justify-center items-center gap-12 font-rubik mb-96">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4 mt-6">
        <h2 className="font-semibold text-[38px]">مكتبة صور تنمو باستمرار</h2>
        <p className="font-normal text-xl">
          اكتشف تنوعا لا حدود له في عالم الصور مع مكتبة لا تنتهي من الفنون
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-col justify-center items-center gap-6 px-[117px]">
        <div className="flex justify-center items-center gap-[15px]">
          <button className="bg-[#6152C11A] rounded-[26px] text-[#390089] flex justify-center items-center py-2 px-9">
            فيكتور
          </button>
          <button className="bg-[#6152C11A] rounded-[26px] text-[#390089] flex justify-center items-center py-2 px-9">
            رسومات
          </button>
          <button className="bg-[#390089] rounded-[26px] text-white font-semibold flex justify-center items-center py-2 px-9">
            صور فوتوغرافية
          </button>
        </div>

        {/* Image Grid 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[13px] w-full">
          {/* Image Wrapper */}
          <div className="relative w-[328px] h-[338px] overflow-hidden rounded-[12px]">
            <Image
              src="/library1.png"
              alt="library1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[328px] h-[338px] overflow-hidden rounded-[12px]">
            <Image
              src="/library2.png"
              alt="library2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[328px] h-[338px] overflow-hidden rounded-[12px]">
            <Image
              src="/library3.png"
              alt="library3"
              layout="fill"
              objectFit="cover"
              className="w-full"
            />
          </div>
        </div>

        {/* Image Grid 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] w-full">
          {/* Image Wrapper */}
          <div className="relative w-[481px] h-[293px] overflow-hidden">
            <Image
              src="/library4.png"
              alt="library4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[481px] h-[293px] overflow-hidden">
            <Image
              src="/library5.png"
              alt="library5"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <button className="flex justify-center items-center gap-2 bg-[#04FF99] rounded-[43px] px-[14px] py-2 mt-10 text-[#390089]">
          <p className="font-medium text-[22px]">
            مشاهدة المزيد
          </p>
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
      </div>
    </section>
  );
};

export default Library;
