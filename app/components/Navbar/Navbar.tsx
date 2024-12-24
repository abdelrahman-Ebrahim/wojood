import Image from "next/image";
import React from "react";
import LanguageChangeBtn from "../LanguageChangeBtn";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  return (
      <nav className="flex justify-between items-center w-full px-5 md:px-[56px] h-[77px] border border-[#0000000F] shadow-navShadow bg-white overflow-hidden text-center rounded-b-[30px]">
        <div className="flex justify-center items-center">
          <Link href={"/"}
            className={`${
              locale === "ar" ? "ml-[49px]" : "mr-[49px]"
            }`}
          >
            <Image
              src={"/logo.png"}
              alt="logo"
              width={96}
              height={49}
              className="w-full"
            />
          </Link>

          <div className="hidden lg:flex justify-center items-center gap-8">
            <button className="flex justify-center items-center bg-[#F7F7F8] gap-2 rounded-full px-4 py-2">
              <div>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.19604 7.77246C5.19604 5.84403 5.19604 4.87981 5.88072 4.28073C6.56539 3.68164 7.66734 3.68164 9.87124 3.68164H11.4297C13.6336 3.68164 14.7356 3.68164 15.4202 4.28073C16.1049 4.87981 16.1049 5.84403 16.1049 7.77246V13.9087H5.19604V7.77246Z"
                    stroke="#140623"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.51416 13.9087H16.7866"
                    stroke="#140623"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.76318 6.11059C10.6019 5.99038 11.9918 6.03847 10.8415 7.19246C9.40373 8.63496 7.2471 11.8807 9.76318 10.7988C12.2793 9.71701 13.3578 10.4382 12.2794 11.5201"
                    stroke="#140623"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6504 13.9087V16.6359"
                    stroke="#140623"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5.87769 17.3177L7.9231 13.9087"
                    stroke="#140623"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.4231 17.3177L13.3777 13.9087"
                    stroke="#140623"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-[#140623] text-sm font-semibold">
                {t("btn1")}
              </p>
            </button>
            <button className="flex justify-center items-center bg-[#F7F7F8] gap-2 rounded-full px-4 py-2">
              <div>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2467 6.30265V14.6972M14.8476 4.90356H6.45304M14.8476 16.0963H6.45304M5.05396 14.6972V6.30265"
                    stroke="#140623"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.6458 4.90373C17.6458 5.67642 17.0195 6.30282 16.2467 6.30282C15.474 6.30282 14.8477 5.67642 14.8477 4.90373C14.8477 4.13103 15.474 3.50464 16.2467 3.50464C17.0195 3.50464 17.6458 4.13103 17.6458 4.90373Z"
                    stroke="#140623"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6.45321 4.90373C6.45321 5.67642 5.82681 6.30282 5.05412 6.30282C4.28142 6.30282 3.65503 5.67642 3.65503 4.90373C3.65503 4.13103 4.28142 3.50464 5.05412 3.50464C5.82681 3.50464 6.45321 4.13103 6.45321 4.90373Z"
                    stroke="#140623"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.6458 16.0964C17.6458 16.8691 17.0195 17.4954 16.2467 17.4954C15.474 17.4954 14.8477 16.8691 14.8477 16.0964C14.8477 15.3236 15.474 14.6973 16.2467 14.6973C17.0195 14.6973 17.6458 15.3236 17.6458 16.0964Z"
                    stroke="#140623"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6.45321 16.0964C6.45321 16.8691 5.82681 17.4954 5.05412 17.4954C4.28142 17.4954 3.65503 16.8691 3.65503 16.0964C3.65503 15.3236 4.28142 14.6973 5.05412 14.6973C5.82681 14.6973 6.45321 15.3236 6.45321 16.0964Z"
                    stroke="#140623"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <p className="text-[#140623] text-sm font-semibold">
                {t("btn2")}
              </p>
            </button>
            <button className="flex justify-center items-center bg-[#F7F7F8] gap-2 rounded-full px-4 py-2">
              <div>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.57698 8.44913C8.14279 8.44913 8.60147 7.99045 8.60147 7.42464C8.60147 6.85883 8.14279 6.40015 7.57698 6.40015C7.01117 6.40015 6.55249 6.85883 6.55249 7.42464C6.55249 7.99045 7.01117 8.44913 7.57698 8.44913Z"
                    stroke="#140623"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16187 10.497C4.16187 7.43831 4.16187 5.90897 5.11207 4.95875C6.06229 4.00854 7.59163 4.00854 10.6503 4.00854C13.709 4.00854 15.2383 4.00854 16.1886 4.95875C17.1388 5.90897 17.1388 7.43831 17.1388 10.497C17.1388 13.5556 17.1388 15.085 16.1886 16.0353C15.2383 16.9854 13.709 16.9854 10.6503 16.9854C7.59163 16.9854 6.06229 16.9854 5.11207 16.0353C4.16187 15.085 4.16187 13.5556 4.16187 10.497Z"
                    stroke="#140623"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5.86938 16.6449C8.85575 13.0763 12.2035 8.36982 17.1371 11.5515"
                    stroke="#140623"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <p className="text-[#140623] text-sm font-semibold">
                {t("btn3")}
              </p>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[30px]">
          <button className="bg-[#FDC856] hidden lg:flex justify-center items-center rounded-full px-4 py-2 gap-2">
            <p className="font-semibold text-sm">{t("yellowBtn")}</p>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2593 5.19377C12.8776 5.19189 12.4722 5.19189 12.0413 5.19189C8.4048 5.19189 6.58656 5.19189 5.45685 6.3216C4.32715 7.45131 4.32715 9.26954 4.32715 12.906C4.32715 16.5424 4.32715 18.3607 5.45685 19.4904C6.58656 20.6201 8.4048 20.6201 12.0413 20.6201C15.6777 20.6201 17.4959 20.6201 18.6257 19.4904C19.7125 18.4036 19.7537 16.6794 19.7553 13.312"
                stroke="#140623"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4.32715 14.234C4.8298 14.161 5.33797 14.1249 5.847 14.1262C8.00041 14.0806 10.1011 14.7516 11.7742 16.0194C13.3259 17.1951 14.4162 18.8133 14.8833 20.6201"
                stroke="#140623"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M19.7554 16.4757C18.8009 15.9923 17.8137 15.747 16.8209 15.7481C15.3173 15.7422 13.8289 16.2947 12.4473 17.372"
                stroke="#140623"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M16.5073 6.40991C16.9064 5.99928 17.9688 4.37988 18.5374 4.37988M18.5374 4.37988C19.1059 4.37988 20.1683 5.99928 20.5674 6.40991M18.5374 4.37988V10.876"
                stroke="#140623"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <LanguageChangeBtn />
          <div className="flex flex-col justify-center items-center gap-1">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_1_3519" fill="white">
                <path d="M9.59796 18.433C11.1379 18.433 12.3863 19.6792 12.3863 21.2165C12.3863 22.7538 11.1379 24 9.59798 24C8.05804 24 6.80967 22.7538 6.80967 21.2165C6.80967 19.6792 8.05802 18.433 9.59796 18.433ZM9.59796 22.087C10.0795 22.087 10.4699 21.6973 10.4699 21.2165C10.4699 20.7358 10.0795 20.3461 9.59796 20.3461C9.11639 20.3461 8.72601 20.7358 8.72601 21.2165C8.72601 21.6973 9.11641 22.087 9.59796 22.087ZM17.8288 18.433C19.3687 18.433 20.6171 19.6792 20.6171 21.2165C20.6171 22.7538 19.3687 24 17.8288 24C16.2888 24 15.0405 22.7538 15.0405 21.2165C15.0405 19.6792 16.2888 18.433 17.8288 18.433H17.8288ZM17.8288 22.087C18.3103 22.087 18.7007 21.6973 18.7007 21.2165C18.7007 20.7358 18.3103 20.3461 17.8288 20.3461C17.3472 20.3461 16.9568 20.7358 16.9568 21.2165C16.9568 21.6973 17.3472 22.087 17.8288 22.087ZM17.8096 20.3461H8.22703C6.4357 20.3461 4.98356 18.8965 4.98356 17.1083C4.98356 15.6084 6.00516 14.3467 7.39164 13.9788L7.41423 13.9737L4.70737 5.15651C4.47128 4.42944 3.79894 3.913 3.00573 3.913H0.447266V2H3.01051C4.65542 2 6.04917 3.07323 6.52739 4.55652L6.53466 4.58262V4.59218L9.97072 15.7835H8.22778C7.49485 15.7835 6.90068 16.3766 6.90068 17.1083C6.90068 17.84 7.49483 18.4331 8.22778 18.4331H17.8096L17.8096 20.3461ZM20.3814 15.7834H8.67806V13.8705H18.9364L20.5309 8.30349V7.56701H6.85753V5.65394H22.4473V8.57132L20.3814 15.7834Z" />
              </mask>
              <path
                d="M9.59796 18.433C11.1379 18.433 12.3863 19.6792 12.3863 21.2165C12.3863 22.7538 11.1379 24 9.59798 24C8.05804 24 6.80967 22.7538 6.80967 21.2165C6.80967 19.6792 8.05802 18.433 9.59796 18.433ZM9.59796 22.087C10.0795 22.087 10.4699 21.6973 10.4699 21.2165C10.4699 20.7358 10.0795 20.3461 9.59796 20.3461C9.11639 20.3461 8.72601 20.7358 8.72601 21.2165C8.72601 21.6973 9.11641 22.087 9.59796 22.087ZM17.8288 18.433C19.3687 18.433 20.6171 19.6792 20.6171 21.2165C20.6171 22.7538 19.3687 24 17.8288 24C16.2888 24 15.0405 22.7538 15.0405 21.2165C15.0405 19.6792 16.2888 18.433 17.8288 18.433H17.8288ZM17.8288 22.087C18.3103 22.087 18.7007 21.6973 18.7007 21.2165C18.7007 20.7358 18.3103 20.3461 17.8288 20.3461C17.3472 20.3461 16.9568 20.7358 16.9568 21.2165C16.9568 21.6973 17.3472 22.087 17.8288 22.087ZM17.8096 20.3461H8.22703C6.4357 20.3461 4.98356 18.8965 4.98356 17.1083C4.98356 15.6084 6.00516 14.3467 7.39164 13.9788L7.41423 13.9737L4.70737 5.15651C4.47128 4.42944 3.79894 3.913 3.00573 3.913H0.447266V2H3.01051C4.65542 2 6.04917 3.07323 6.52739 4.55652L6.53466 4.58262V4.59218L9.97072 15.7835H8.22778C7.49485 15.7835 6.90068 16.3766 6.90068 17.1083C6.90068 17.84 7.49483 18.4331 8.22778 18.4331H17.8096L17.8096 20.3461ZM20.3814 15.7834H8.67806V13.8705H18.9364L20.5309 8.30349V7.56701H6.85753V5.65394H22.4473V8.57132L20.3814 15.7834Z"
                fill="#333333"
              />
              <path
                d="M17.8096 20.3461V21.3461H18.8096L18.8096 20.3461L17.8096 20.3461ZM7.39164 13.9788L7.17097 13.0035L7.15299 13.0076L7.13518 13.0123L7.39164 13.9788ZM7.41423 13.9737L7.6349 14.9491L8.68667 14.7111L8.3702 13.6802L7.41423 13.9737ZM4.70737 5.15651L5.66334 4.86304L5.66098 4.85533L5.65849 4.84767L4.70737 5.15651ZM0.447266 3.913H-0.552734V4.913H0.447266V3.913ZM0.447266 2V1H-0.552734V2H0.447266ZM6.52739 4.55652L7.49068 4.28809L7.4853 4.26876L7.47914 4.24967L6.52739 4.55652ZM6.53466 4.58262H7.53466V4.4459L7.49796 4.31419L6.53466 4.58262ZM6.53466 4.59218H5.53466V4.74224L5.5787 4.88569L6.53466 4.59218ZM9.97072 15.7835V16.7835H11.3238L10.9267 15.49L9.97072 15.7835ZM17.8096 18.4331L18.8096 18.4331L18.8097 17.4331H17.8096V18.4331ZM20.3814 15.7834V16.7834H21.1352L21.3427 16.0588L20.3814 15.7834ZM8.67806 15.7834H7.67806V16.7834H8.67806V15.7834ZM8.67806 13.8705V12.8705H7.67806V13.8705H8.67806ZM18.9364 13.8705V14.8705H19.6902L19.8978 14.1458L18.9364 13.8705ZM20.5309 8.30349L21.4922 8.57883L21.5309 8.44387V8.30349H20.5309ZM20.5309 7.56701H21.5309V6.56701H20.5309V7.56701ZM6.85753 7.56701H5.85753V8.56701H6.85753V7.56701ZM6.85753 5.65394V4.65394H5.85753V5.65394H6.85753ZM22.4473 5.65394H23.4473V4.65394H22.4473V5.65394ZM22.4473 8.57132L23.4086 8.84669L23.4473 8.71172V8.57132H22.4473ZM9.59796 19.433C10.5873 19.433 11.3863 20.2332 11.3863 21.2165H13.3863C13.3863 19.1253 11.6886 17.433 9.59796 17.433V19.433ZM11.3863 21.2165C11.3863 22.1999 10.5873 23 9.59798 23V25C11.6886 25 13.3863 23.3077 13.3863 21.2165H11.3863ZM9.59798 23C8.60868 23 7.80967 22.1999 7.80967 21.2165H5.80967C5.80967 23.3077 7.50739 25 9.59798 25V23ZM7.80967 21.2165C7.80967 20.2332 8.60867 19.433 9.59796 19.433V17.433C7.50736 17.433 5.80967 19.1253 5.80967 21.2165H7.80967ZM9.59796 23.087C10.6302 23.087 11.4699 22.2512 11.4699 21.2165H9.46992C9.46992 21.1433 9.52887 21.087 9.59796 21.087V23.087ZM11.4699 21.2165C11.4699 20.1819 10.6302 19.3461 9.59796 19.3461V21.3461C9.52887 21.3461 9.46992 21.2897 9.46992 21.2165H11.4699ZM9.59796 19.3461C8.56573 19.3461 7.72601 20.1819 7.72601 21.2165H9.72601C9.72601 21.2897 9.66706 21.3461 9.59796 21.3461V19.3461ZM7.72601 21.2165C7.72601 22.2512 8.56579 23.087 9.59796 23.087V21.087C9.66704 21.087 9.72601 21.1433 9.72601 21.2165H7.72601ZM17.8288 19.433C18.8181 19.433 19.6171 20.2332 19.6171 21.2165H21.6171C21.6171 19.1253 19.9194 17.433 17.8288 17.433V19.433ZM19.6171 21.2165C19.6171 22.1999 18.8181 23 17.8288 23V25C19.9194 25 21.6171 23.3077 21.6171 21.2165H19.6171ZM17.8288 23C16.8395 23 16.0405 22.1999 16.0405 21.2165H14.0405C14.0405 23.3077 15.7382 25 17.8288 25V23ZM16.0405 21.2165C16.0405 20.2332 16.8395 19.433 17.8288 19.433V17.433C15.7382 17.433 14.0405 19.1253 14.0405 21.2165H16.0405ZM17.8288 17.433H17.8288V19.433H17.8288V17.433ZM17.8288 23.087C18.861 23.087 19.7007 22.2512 19.7007 21.2165H17.7007C17.7007 21.1433 17.7597 21.087 17.8288 21.087V23.087ZM19.7007 21.2165C19.7007 20.1819 18.861 19.3461 17.8288 19.3461V21.3461C17.7597 21.3461 17.7007 21.2897 17.7007 21.2165H19.7007ZM17.8288 19.3461C16.7965 19.3461 15.9568 20.1819 15.9568 21.2165H17.9568C17.9568 21.2897 17.8978 21.3461 17.8288 21.3461V19.3461ZM15.9568 21.2165C15.9568 22.2512 16.7965 23.087 17.8288 23.087V21.087C17.8978 21.087 17.9568 21.1434 17.9568 21.2165H15.9568ZM17.8096 19.3461H8.22703V21.3461H17.8096V19.3461ZM8.22703 19.3461C6.98635 19.3461 5.98356 18.3426 5.98356 17.1083H3.98356C3.98356 19.4504 5.88506 21.3461 8.22703 21.3461V19.3461ZM5.98356 17.1083C5.98356 16.0742 6.68794 15.2002 7.64809 14.9454L7.13518 13.0123C5.32238 13.4933 3.98356 15.1426 3.98356 17.1083H5.98356ZM7.61231 14.9542L7.6349 14.9491L7.19356 12.9984L7.17097 13.0035L7.61231 14.9542ZM8.3702 13.6802L5.66334 4.86304L3.75141 5.44999L6.45827 14.2672L8.3702 13.6802ZM5.65849 4.84767C5.29346 3.72353 4.24784 2.913 3.00573 2.913V4.913C3.35003 4.913 3.6491 5.13535 3.75626 5.46536L5.65849 4.84767ZM3.00573 2.913H0.447266V4.913H3.00573V2.913ZM1.44727 3.913V2H-0.552734V3.913H1.44727ZM0.447266 3H3.01051V1H0.447266V3ZM3.01051 3C4.20975 3 5.22701 3.78205 5.57563 4.86337L7.47914 4.24967C6.87133 2.36441 5.10109 1 3.01051 1V3ZM5.56409 4.82495L5.57136 4.85105L7.49796 4.31419L7.49068 4.28809L5.56409 4.82495ZM5.53466 4.58262V4.59218H7.53466V4.58262H5.53466ZM5.5787 4.88569L9.01476 16.077L10.9267 15.49L7.49062 4.29868L5.5787 4.88569ZM9.97072 14.7835H8.22778V16.7835H9.97072V14.7835ZM8.22778 14.7835C6.94422 14.7835 5.90068 15.8227 5.90068 17.1083H7.90068C7.90068 16.9306 8.04549 16.7835 8.22778 16.7835V14.7835ZM5.90068 17.1083C5.90068 18.3939 6.94419 19.4331 8.22778 19.4331V17.4331C8.04548 17.4331 7.90068 17.2861 7.90068 17.1083H5.90068ZM8.22778 19.4331H17.8096V17.4331H8.22778V19.4331ZM16.8096 18.4331L16.8096 20.3461L18.8096 20.3461L18.8096 18.4331L16.8096 18.4331ZM20.3814 14.7834H8.67806V16.7834H20.3814V14.7834ZM9.67806 15.7834V13.8705H7.67806V15.7834H9.67806ZM8.67806 14.8705H18.9364V12.8705H8.67806V14.8705ZM19.8978 14.1458L21.4922 8.57883L19.5695 8.02815L17.9751 13.5951L19.8978 14.1458ZM21.5309 8.30349V7.56701H19.5309V8.30349H21.5309ZM20.5309 6.56701H6.85753V8.56701H20.5309V6.56701ZM7.85753 7.56701V5.65394H5.85753V7.56701H7.85753ZM6.85753 6.65394H22.4473V4.65394H6.85753V6.65394ZM21.4473 5.65394V8.57132H23.4473V5.65394H21.4473ZM21.4859 8.29595L19.4201 15.5081L21.3427 16.0588L23.4086 8.84669L21.4859 8.29595Z"
                fill="#333333"
                mask="url(#path-1-inside-1_1_3519)"
              />
              <rect
                x="11.4473"
                width="13"
                height="13"
                rx="6.5"
                fill="#04FF99"
              />
              <path
                d="M15.8232 10V9.19922L17 9.05273V4.13086H15.8086V3.36426L18.3281 2.89062V9.05273L19.5049 9.19922V10H15.8232Z"
                fill="#333333"
              />
            </svg>
            <p className="text-[10px] font-semibold">{t("badge1")}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_3516)">
                <path
                  d="M13.0148 21.0504L5.46039 13.1837C3.33252 10.9679 3.46652 7.33466 5.75132 5.29532C8.018 3.27214 11.4549 3.66501 13.2461 6.15204L13.5473 6.57015L13.8484 6.15204C15.6397 3.66501 19.0765 3.27214 21.3432 5.29532C23.628 7.33466 23.762 10.9679 21.6341 13.1837L14.0797 21.0504C13.7856 21.3565 13.3089 21.3565 13.0148 21.0504Z"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3516">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.947266)"
                  />
                </clipPath>
              </defs>
            </svg>

            <p className="text-[10px] font-semibold">{t("badge2")}</p>
          </div>
          {/* Account Button */}
          <div className="hidden md:flex flex-col justify-center items-center gap-1">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9473 12C15.7087 12 17.9473 9.76142 17.9473 7C17.9473 4.23858 15.7087 2 12.9473 2C10.1858 2 7.94727 4.23858 7.94727 7C7.94727 9.76142 10.1858 12 12.9473 12Z"
                stroke="#333333"
                strokeWidth="1.7"
              />
              <path
                d="M17.9474 14H18.2991C19.812 14 21.0882 15.1266 21.2759 16.6279L21.6664 19.7519C21.8156 20.9456 20.8848 22 19.6818 22H6.21293C5.00994 22 4.07917 20.9456 4.22838 19.7519L4.61888 16.6279C4.80654 15.1266 6.08275 14 7.59572 14H7.94737"
                stroke="#333333"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[10px] font-semibold">{t("badge3")}</p>
          </div>

          {/* Mobile toggler */}
          <div className="block md:hidden cursor-pointer">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.1789 22.4183C25.1789 20.9846 24.0169 19.8223 22.5836 19.8223C21.1503 19.8223 19.9883 20.9846 19.9883 22.4183C19.9883 23.8521 21.1503 25.0144 22.5836 25.0144C24.0169 25.0144 25.1789 23.8521 25.1789 22.4183Z"
                fill="#141B34"
              />
              <path
                d="M16.1789 22.4183C16.1789 20.9846 15.0169 19.8223 13.5836 19.8223C12.1503 19.8223 10.9883 20.9846 10.9883 22.4183C10.9883 23.8521 12.1503 25.0144 13.5836 25.0144C15.0169 25.0144 16.1789 23.8521 16.1789 22.4183Z"
                fill="#141B34"
              />
              <path
                d="M6.17893 22.4183C6.17893 20.9846 5.01692 19.8223 3.58361 19.8223C2.15029 19.8223 0.988281 20.9846 0.988281 22.4183C0.988281 23.8521 2.15029 25.0144 3.58361 25.0144C5.01692 25.0144 6.17893 23.8521 6.17893 22.4183Z"
                fill="#141B34"
              />
              <path
                d="M25.1789 13.4183C25.1789 11.9846 24.0169 10.8223 22.5836 10.8223C21.1503 10.8223 19.9883 11.9846 19.9883 13.4183C19.9883 14.8521 21.1503 16.0144 22.5836 16.0144C24.0169 16.0144 25.1789 14.8521 25.1789 13.4183Z"
                fill="#141B34"
              />
              <path
                d="M25.1789 3.41807C25.1789 1.98431 24.0169 0.822021 22.5836 0.822021C21.1503 0.822021 19.9883 1.98431 19.9883 3.41807C19.9883 4.85183 21.1503 6.01412 22.5836 6.01412C24.0169 6.01412 25.1789 4.85183 25.1789 3.41807Z"
                fill="#141B34"
              />
              <path
                d="M16.1789 13.4183C16.1789 11.9846 15.0169 10.8223 13.5836 10.8223C12.1503 10.8223 10.9883 11.9846 10.9883 13.4183C10.9883 14.8521 12.1503 16.0144 13.5836 16.0144C15.0169 16.0144 16.1789 14.8521 16.1789 13.4183Z"
                fill="#141B34"
              />
              <path
                d="M16.1789 3.41831C16.1789 1.98455 15.0169 0.822266 13.5836 0.822266C12.1503 0.822266 10.9883 1.98455 10.9883 3.41831C10.9883 4.85208 12.1503 6.01436 13.5836 6.01436C15.0169 6.01436 16.1789 4.85208 16.1789 3.41831Z"
                fill="#141B34"
              />
              <path
                d="M6.17893 13.4183C6.17893 11.9846 5.01692 10.8223 3.58361 10.8223C2.15029 10.8223 0.988281 11.9846 0.988281 13.4183C0.988281 14.8521 2.15029 16.0144 3.58361 16.0144C5.01692 16.0144 6.17893 14.8521 6.17893 13.4183Z"
                fill="#141B34"
              />
              <path
                d="M6.17893 3.41831C6.17893 1.98455 5.01692 0.822266 3.58361 0.822266C2.15029 0.822266 0.988281 1.98455 0.988281 3.41831C0.988281 4.85208 2.15029 6.01436 3.58361 6.01436C5.01692 6.01436 6.17893 4.85208 6.17893 3.41831Z"
                fill="#141B34"
              />
            </svg>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
