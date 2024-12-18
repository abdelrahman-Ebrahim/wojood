"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize with Arabic (ar) as the default language.
  const [lang, setLang] = useState<"ar" | "en">("ar");

  // Toggle the language between Arabic and English.
  const toggleLanguage = () => {
    // Set the new language and update the document's lang and dir properties.
    setLang((prev) => {
      const newLang = prev === "ar" ? "en" : "ar";
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      return newLang;
    });
  };

  // Ensure the correct direction and language is applied when the component mounts.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <>
      <Navbar toggleLanguage={toggleLanguage} lang={lang} />
      {children}
    </>
  );
}
