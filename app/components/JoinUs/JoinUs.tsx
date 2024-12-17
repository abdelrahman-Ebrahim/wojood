import React from "react";

const JoinUs = () => {
  return (
    <section className="mt-16 mx-[112px] min-h-[350px] rounded-xl bg-center bg-cover bg-joinBg font-rubik relative mb-96">
      <div className="pt-9 pr-[66px] flex flex-col gap-4 text-white">
        <h2 className="font-extrabold text-[44px]">
          انضم إلى .... <br /> أكـــــبر مجتمع فني <br /> في الوطن العربي
        </h2>
        <p className="text-[22px] font-normal">
          استكشف الفن، وطور مهاراتك كفنان، أو قم بشراء وبيع الأعمال يمكنك <br />
          القيام بكل ذلك هنا.
        </p>
      </div>
      <div className="absolute bottom-5 left-16">
        <button className="bg-white flex items-center justify-center rounded-full py-[18px] px-[45px] font-semibold text-lg">
          سجل يا فنان
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
