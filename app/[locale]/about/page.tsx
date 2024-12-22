import AboutBanner from "@/app/components/AboutComponents/AboutBanner";
import AboutHeader from "@/app/components/AboutComponents/AboutHeader";
import WhyUs from "@/app/components/AboutComponents/WhyUs";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mt-[77px] px-[150px] overflow-hidden">
      <AboutHeader />
      <AboutBanner />
      <WhyUs />
    </div>
  );
};

export default AboutPage;
