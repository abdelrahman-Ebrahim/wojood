import { NextIntlClientProvider, useLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "../components/Navbar/Navbar";
import "../globals.css";
import Footer from "../components/Footer/Footer";
import NavBadge from "../components/Navbar/NavBadge";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Determine the text direction based on the locale
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body className="!font-rubik bg-[#F7F7F7]">
        <NextIntlClientProvider messages={messages}>
          <NavBadge/>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
