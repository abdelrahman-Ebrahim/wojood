import Image from "next/image";
import React from "react";

const PublishHeader = () => {
  return (
    <div className="relative mb-10 flex flex-col lg:flex-row items-center justify-between gap-5 rounded-2xl bg-[#6152C1] my-5">
      <div className="relative max-w-screen px-5 py-8 lg:p-[60px] text-center md:text-start text-white">
        <h2 className="text-2xl md:text-[37px] font-bold mb-4">
          أنشــر فنــك فى دقائق ....
        </h2>
        <p>
          يسعدنا أن تصبح جزءاً من منصتنا التي تتيح لك مشاركة فنونك الفريدة مع
          عملاء المنصة حول العالم، والانضمام إلى نخبة من الفنانين يشاركونك
          الرؤية والقيم ومتابعة مبيعاتك بشكل مباشر
        </p>
      </div>
      <div className="min-w-[45%] h-full bg-wavesBg bg-center bg-cover bg-no-repeat overflow-hidden flex relative">
        <div className="size-full flex flex-col">
        <Image src={"/camera.png"} alt="camera" width={347} height={326} className="rotate-[-21deg]"/>
        <Image src={"/brush.png"} alt="brush" width={395} height={326} className="-mt-28 mr-40 w-full"/>
        </div>
        <div className="w-full relative">
        <Image src={"/portrait.png"} alt="portrait" width={347} height={326} className="h-full rounded-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default PublishHeader;
