import { useTranslations } from "next-intl";
import React from "react";

const WhyUs = () => {
  const t = useTranslations("AboutWhyUs");
  return (
    <section className="mt-[104px]">
      <div className="px-[30px] lg:px-[70px] pb-10">
        {/* title */}
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="font-semibold text-[40px] text-[#390089]">
            {t("title")}
          </h2>
          <p className="font-medium text-xl text-[#626C83]">{t("subtitle")}</p>
        </div>
        {/* icons */}
        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
          {/* <div className="absolute bg-dashedLine bg-center bg-no-repeat top-[34.37px] right-[166.85px] w-[663.92px] h-[78.47px]"></div> */}
          {/* First card */}
          <div className="flex flex-col text-center items-center gap-4 even:mt-20 sm:even:mt-12">
            <div className="size-16 rounded-[100px] flex justify-center items-center bg-[#EDEEF0]">
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5941 4.25645C17.0522 2.73337 19.1977 3.34715 20.4866 4.32484C21.0151 4.7257 21.2792 4.92615 21.4347 4.92615C21.5902 4.92615 21.8544 4.7257 22.3829 4.32484C23.6717 3.34715 25.8172 2.73337 28.2754 4.25645C31.5016 6.25532 32.2316 12.8497 24.7902 18.4132C23.3729 19.4729 22.6642 20.0025 21.4347 20.0025C20.2052 20.0025 19.4966 19.4729 18.0792 18.4132C10.638 12.8497 11.368 6.25532 14.5941 4.25645Z"
                  stroke="#390089"
                  stroke-width="2.51979"
                  stroke-linecap="round"
                />
                <path
                  d="M7.26807 23.3359H11.2594C11.7497 23.3359 12.2332 23.4464 12.6717 23.6586L16.075 25.3053C16.5135 25.5174 16.997 25.6278 17.4872 25.6278H19.2249C20.9056 25.6278 22.2681 26.9463 22.2681 28.5726C22.2681 28.6383 22.2231 28.6961 22.1577 28.7141L17.9229 29.8851C17.1632 30.0951 16.3497 30.0219 15.6431 29.6799L12.0049 27.9198"
                  stroke="#390089"
                  stroke-width="2.51979"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.2681 27.503L29.9227 25.1511C31.2797 24.7283 32.7466 25.2296 33.5966 26.4068C34.2112 27.2578 33.9609 28.4766 33.0656 28.9933L20.5396 36.2205C19.7429 36.6801 18.8029 36.7923 17.9267 36.5323L7.26807 33.3695"
                  stroke="#390089"
                  stroke-width="2.51979"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="font-semibold text-xl text-[#390089]">
                {t("text1")}
              </p>
              <p className="font-normal text-lg text-[#444444]">
                {t("subtext1")}
              </p>
            </div>
          </div>
          {/* Second card */}
          <div className="flex flex-col text-center items-center gap-4 even:mt-20 sm:even:mt-12">
            <div className="size-16 rounded-[100px] flex justify-center items-center bg-[#EDEEF0]">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3401 37.3956L16.9804 27.3164H3.5415L6.90122 37.3956H20.3401ZM20.3401 37.3956H27.0595"
                  stroke="#390089"
                  stroke-width="2.51979"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.3402 22.2771V21.4372C20.3402 18.2697 20.3402 16.6858 19.3562 15.7018C18.3721 14.7178 16.7884 14.7178 13.6208 14.7178C10.4532 14.7178 8.86944 14.7178 7.88541 15.7018C6.90137 16.6858 6.90137 18.2697 6.90137 21.4372V22.2771"
                  stroke="#390089"
                  stroke-width="2.51979"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.0988 22.2767C32.0988 24.1323 30.5947 25.6364 28.7391 25.6364C26.8835 25.6364 25.3794 24.1323 25.3794 22.2767C25.3794 20.4211 26.8835 18.917 28.7391 18.917C30.5947 18.917 32.0988 20.4211 32.0988 22.2767Z"
                  stroke="#390089"
                  stroke-width="2.51979"
                />
                <path
                  d="M16.9802 7.15854C16.9802 9.01407 15.476 10.5183 13.6205 10.5183C11.7649 10.5183 10.2607 9.01407 10.2607 7.15854C10.2607 5.30302 11.7649 3.79883 13.6205 3.79883C15.476 3.79883 16.9802 5.30302 16.9802 7.15854Z"
                  stroke="#390089"
                  stroke-width="2.51979"
                />
                <path
                  d="M23.6997 29.8359H33.7789C35.6344 29.8359 37.1386 31.3401 37.1386 33.1957V34.0356C37.1386 35.8912 35.6344 37.3953 33.7789 37.3953H32.099"
                  stroke="#390089"
                  stroke-width="2.51979"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="font-semibold text-xl text-[#390089]">{t("text2")}</p>
              <p className="font-normal text-lg text-[#444444]">
                {t("subtext2")}
              </p>
            </div>
          </div>
          {/* Third card */}
          <div className="flex flex-col text-center items-center gap-4 even:mt-20 sm:even:mt-12">
            <div className="size-16 rounded-[100px] flex justify-center items-center bg-[#EDEEF0]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="64" rx="32" fill="#EDEEF0" />
                <path
                  d="M31.4036 22.5826L33.8992 20.0871C36.7091 17.2772 40.3879 16.1116 44.2811 15.9212C45.7955 15.8471 46.5526 15.81 47.1597 16.4172C47.767 17.0244 47.7299 17.7815 47.6558 19.2958C47.4653 23.1891 46.2998 26.8678 43.4899 29.6777L40.9943 32.1733C38.9392 34.2284 38.3549 34.8129 38.7863 37.042C39.2121 38.7449 39.6242 40.3939 38.386 41.6321C36.884 43.134 35.5139 43.134 34.012 41.6321L21.9448 29.565C20.4429 28.063 20.4428 26.6929 21.9448 25.191C23.183 23.9527 24.832 24.3649 26.5349 24.7906C28.7641 25.2221 29.3485 24.6378 31.4036 22.5826Z"
                  stroke="#390089"
                  stroke-width="2.51979"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.1304 23.4395H40.1454"
                  stroke="#390089"
                  stroke-width="3.35972"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7788 47.7977L24.1781 39.3984"
                  stroke="#390089"
                  stroke-width="2.51979"
                  stroke-linecap="round"
                />
                <path
                  d="M25.8579 47.7982L29.2176 44.4385"
                  stroke="#390089"
                  stroke-width="2.51979"
                  stroke-linecap="round"
                />
                <path
                  d="M15.7788 37.7181L19.1385 34.3584"
                  stroke="#390089"
                  stroke-width="2.51979"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="font-semibold text-xl text-[#390089]">{t("text3")}</p>
              <p className="font-normal text-lg text-[#444444]">
                {t("subtext3")}
              </p>
            </div>
          </div>

          {/* Fourth card */}
          <div className="flex flex-col text-center items-center gap-4 even:mt-20 sm:even:mt-12">
            <div className="size-16 rounded-[100px] flex justify-center items-center bg-[#EDEEF0]">
              <svg
                width="64"
                height="65"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="64" height="64" rx="32" fill="#EDEEF0" />
                <path
                  d="M32.1584 49.1392C22.8808 49.1392 15.3599 41.6181 15.3599 32.3406C15.3599 27.6495 17.2827 23.4075 20.3833 20.3599M32.1584 49.1392C30.5407 47.9404 30.7989 46.5446 31.6105 45.149C32.8583 43.0033 32.8583 43.0033 32.8583 40.1425C32.8583 37.2817 34.5583 35.9403 40.5577 37.1401C43.2534 37.6793 45.2178 33.9547 48.7173 35.1846M32.1584 49.1392C40.4667 49.1392 47.3662 43.1078 48.7173 35.1846M20.3833 20.3599C21.8099 20.5104 22.6087 21.2747 23.9355 22.6766C26.4543 25.3381 28.9731 25.5602 30.6525 24.673C33.1712 23.3423 31.0546 21.1868 34.0108 20.0154C35.8232 19.2973 36.1686 17.4167 35.3109 15.8373M20.3833 20.3599C23.4147 17.3801 27.5719 15.542 32.1584 15.542C33.2359 15.542 34.2897 15.6434 35.3109 15.8373M48.7173 35.1846C48.8749 34.2601 48.957 33.31 48.957 32.3406C48.957 24.1405 43.0816 17.3126 35.3109 15.8373"
                  stroke="#390089"
                  stroke-width="2.51979"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="font-semibold text-xl text-[#390089]">{t("text4")}</p>
              <p className="font-normal text-lg text-[#444444]">
                {t("subtext4")}
              </p>
            </div>
          </div>
        </div>














        <div className="mt-[151px] xl:mx-[25px] flex flex-col justify-center items-center gap-[46px] relative">
          <div className="w-full">
            <div className="flex justify-center items-center gap-[62.036px] relative">
              {/* Container */}
              <div className="w-full flex flex-col pt-[32px] pb-[62px] px-[35.5px] gap-3 flex-shrink-0 bg-white border-[0.27px] border-white rounded-[38.408px] shadow-aboutBox relative z-40">
                <p className="self-start text-[#390089] text-[32px] font-semibold">
                  {t("vision")}
                </p>
                <p className="self-start text-base font-semibold">
                  {t("visiontext")}
                </p>
              </div>
              {/* Overlay Background */}
              <div className="rounded-[39.868px] absolute bg-[#EBE3F9] z-20 right-0 top-[4px] -left-[13px] -bottom-[4px] border-[0.27px] border-white" />
              <div className="rounded-[39.868px] absolute bg-[#DED1F3] z-10 right-0 top-[13px] -left-[20px] -bottom-[13px] border-[0.27px] border-white" />
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-center items-center gap-[62.036px] relative">
              {/* Container */}
              <div className="w-full flex flex-col pt-[32px] pb-[62px] px-[35.5px] gap-3 flex-shrink-0 bg-white border-[0.27px] border-white rounded-[38.408px] shadow-aboutBox relative z-40">
                <p className="self-start text-[#390089] text-[32px] font-semibold">
                  {t("mission")}
                </p>
                <p className="self-start text-base font-semibold">
                  {t("missiontext")}
                </p>
              </div>
              {/* Overlay Background */}
              <div className="rounded-[39.868px] absolute bg-[#EBE3F9] z-20 right-0 top-[4px] -left-[13px] -bottom-[4px] border-[0.27px] border-white" />
              <div className="rounded-[39.868px] absolute bg-[#DED1F3] z-10 right-0 top-[13px] -left-[20px] -bottom-[13px] border-[0.27px] border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
