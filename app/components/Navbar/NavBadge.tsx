import { useTranslations } from "next-intl";
import React from "react";

const NavBadge = () => {
  const t = useTranslations("Navbar");
  return (
    <div className="w-full bg-[#390089] text-center flex justify-center items-center text-sm px-5 md:px-0 md:text-base text-white h-[40px] overflow-hidden">
      <p>
        {t("header")
          .split("20%")
          .map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && (
                <strong className="font-bold">20%</strong>
              )}
            </React.Fragment>
          ))}
      </p>
    </div>
  );
};

export default NavBadge;
