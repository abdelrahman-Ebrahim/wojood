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
    <footer className="flex flex-col justify-center items-center gap-[10px] font-rubik w-full py-[45px] px-[60px]">
      <div className=" rounded-[16px] bg-[#EFE9FF] mt-[19px] mx-[38px] w-full">
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
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">من نحن</p>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">
                  انشر فنك
                </p>
              </div>
              <div className="flex flex-col gap-[7px] justify-center items-center w-[293px]">
                <h6 className="font-semibold text-[15px]">المساعدة</h6>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">
                  الاسئلة المتكررة
                </p>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">
                  تواصل معنا
                </p>
              </div>
              <div className="flex flex-col gap-[7px] justify-center items-center w-[293px]">
                <h6 className="font-semibold text-[15px]">قانوني</h6>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">
                  سياسة الخصوصية
                </p>
                <p className="font-normal text-[15px] text-[#253D4E] cursor-pointer">
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
      <div className="px-16 py-[22px] flex justify-between items-center rounded-[16px] bg-[#EEEEEE] mx-[38px] w-full">
        <p className="text-sm font-norma">جميع الحقوق محفوظة لصالح وجود 2024©</p>
        <div className="flex justify-center items-center gap-2">
            <Image src={"/footer1.png"} alt="footer1" width={44} height={15} className="w-full"/>
            <Image src={"/footer2.png"} alt="footer2" width={45} height={15} className="w-full"/>
            <Image src={"/footer3.png"} alt="footer3" width={19} height={15} className="w-full"/>
            <Image src={"/footer4.png"} alt="footer4" width={89} height={15} className="w-full"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
