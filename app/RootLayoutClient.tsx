"use client";

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
    document.documentElement.lang = lang === "ar" ? "en" : "ar";
    document.documentElement.dir = lang === "ar" ? "ltr" : "rtl";
  };

  return (
    <>
      <Navbar toggleLanguage={toggleLanguage} lang={lang} />
      {children}
    </>
  );
}
