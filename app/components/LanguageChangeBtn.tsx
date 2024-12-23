"use client"
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const LanguageChangeBtn = () => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <Link
      href={`/${locale.toLowerCase() === "en" ? "ar" : "en"}${pathname.replace(`/${locale}`, "")}`}
      className="hidden md:flex justify-center items-center gap-1"
    >
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4472 20.6666C16.5098 20.6666 20.6139 16.5625 20.6139 11.4999C20.6139 6.43731 16.5098 2.33325 11.4472 2.33325C6.38457 2.33325 2.28052 6.43731 2.28052 11.4999C2.28052 16.5625 6.38457 20.6666 11.4472 20.6666Z"
          stroke="#141B34"
          strokeWidth="1.25"
        />
        <path
          d="M7.78052 11.4999C7.78052 16.9999 11.4472 20.6666 11.4472 20.6666C11.4472 20.6666 15.1139 16.9999 15.1139 11.4999C15.1139 5.99992 11.4472 2.33325 11.4472 2.33325C11.4472 2.33325 7.78052 5.99992 7.78052 11.4999Z"
          stroke="#141B34"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path
          d="M19.6973 14.25H3.19727"
          stroke="#141B34"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.6973 8.75H3.19727"
          stroke="#141B34"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-lg font-semibold">{locale.toLowerCase() === "en" ? "ع" : "En"}</p>
    </Link>
  );
};

export default LanguageChangeBtn;
