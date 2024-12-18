import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="h-[404px] flex flex-col justify-center items-center gap-[10px] font-rubik w-full">
      <div className="py-[45px] px-[60px] rounded-[16px] bg-[#EFE9FF] mt-[19px] mx-[38px]">
        <div className="py-[45px] px-[22px] flex flex-col gap-2">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-1 flex flex-col gap-1 items-start justify-start">
              <div className="pb-[7px]">
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={145}
                  height={90}
                  className="w-[145] h-[90]"
                />
              </div>
              <p className="font-normal text-sm text-[#212529BF]">
                الرياض, حي السليمانية, طريق الملك عبدالعزيز
              </p>
              <p className="font-normal text-sm text-[#212529BF]">
                الرقم الضريبي : 31042565670000
              </p>
              <div className="font-normal text-sm text-[#212529BF] flex justify-start gap-2 items-center">
                <TfiHeadphoneAlt size={15} />
                <p>الدعم الفنى : +966570133338</p>
              </div>
            </div>
            <div className="col-span-2 flex justify-center items-start gap-10">
              <div className="flex flex-col gap-[7px] justify-center items-center w-[293px]">
                <h6 className="font-semibold text-[15px]">روابط مهمة</h6>
                <p className="font-normal text-[15px] text-[#253D4E]">من نحن</p>
                <p className="font-normal text-[15px] text-[#253D4E]">
                  انشر فنك
                </p>
              </div>
              <div className="flex flex-col gap-[7px] justify-center items-center w-[293px]">
                <h6 className="font-semibold text-[15px]">المساعدة</h6>
                <p className="font-normal text-[15px] text-[#253D4E]">
                  الاسئلة المتكررة
                </p>
                <p className="font-normal text-[15px] text-[#253D4E]">
                  تواصل معنا
                </p>
              </div>
              <div className="flex flex-col gap-[7px] justify-center items-center w-[293px]">
                <h6 className="font-semibold text-[15px]">قانوني</h6>
                <p className="font-normal text-[15px] text-[#253D4E]">
                  سياسة الخصوصية
                </p>
                <p className="font-normal text-[15px] text-[#253D4E]">
                  الشروط والأحكام
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start gap-2 mt-2">
            <span>
              <FaWhatsapp size={20} className="text-[#212529BF]" />
            </span>
            <span>
              <FaInstagram size={20} className="text-[#212529BF]" />
            </span>
            <span>
              <FaYoutube size={20} className="text-[#212529BF]" />
            </span>
            <span>
              <FaXTwitter size={20} className="text-[#212529BF]" />
            </span>
            <span>
              <FaFacebookF size={20} className="text-[#212529BF]" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
