"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize with Arabic as default language
  const [lang, setLang] = useState<"ar" | "en">("ar");
  
  // State to determine if the app has mounted
  const [mounted, setMounted] = useState(false);

  // Set language and direction
  const toggleLanguage = () => {
    setLang((prev) => {
      const newLang = prev === "ar" ? "en" : "ar";
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      return newLang;
    });
  };

  // Wait until the page is mounted before applying lang and dir
  useEffect(() => {
    setMounted(true); // This makes sure the rest of the app is rendered after initial setup
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  if (!mounted) {
    return null; // Return nothing while the app is waiting for language setup
  }

  return (
    <>
      <Navbar toggleLanguage={toggleLanguage} lang={lang} />
      {children}
    </>
  );
}
