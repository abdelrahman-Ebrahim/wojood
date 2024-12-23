import AboutBanner from "@/app/components/AboutComponents/AboutBanner";
import AboutHeader from "@/app/components/AboutComponents/AboutHeader";
import OurApproach from "@/app/components/AboutComponents/OurApproach";
import WhyUs from "@/app/components/AboutComponents/WhyUs";
import React from "react";

const AboutPage = () => {
  return (
    <div className="pt-[77px] px-[150px] overflow-hidden bg-[#F7F7F7]">
      <AboutHeader />
      <AboutBanner />
      <WhyUs />
      <OurApproach />
    </div>
  );
};

export default AboutPage;
