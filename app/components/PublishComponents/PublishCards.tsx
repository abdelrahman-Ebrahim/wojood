import Image from "next/image";
import React from "react";

const PublishCards = () => {
  return (
    <section className="container mx-auto flex max-w-screen-lg flex-col items-start gap-16 px-10 py-24 md:flex-row">
      <div className="flex w-full flex-1 flex-col gap-16 md:gap-20">
        <div className="relative flex min-h-[240px] items-start gap-2 rounded-xl bg-[#5106AC]">
          <div className="flex flex-col items-start gap-2 pt-[48px] pb-[72px] pr-[26px]">
            <div className="text-lg font-semibold text-white">
              لوحة تحكم بسيطة وسهلة الاستخدام
            </div>
            <small className="inline-block text-sm text-white">
              تمكنك من إدارة ملفك الشخصي وأعمالك الفنية، وتتبع مبيعاتك وأرباحك،
              والوصول إلى التقارير اللازمة لفهم وتعزيز أداء محتواك على المنصة.
            </small>
          </div>
          <div className="w-1/3 shrink-0">
            <Image
              src={"/publish1.png"}
              alt="publish1"
              width={320}
              height={349}
              className="absolute bottom-0 -left-[68px] md:-left-20 lg:-bottom-5 lg:-left-14 w-[250px] h-[250px] lg:w-[320px] lg:h-[349px]"
            />
          </div>
        </div>
        <div className="relative flex min-h-[240px] items-start gap-2 rounded-xl bg-white">
          <div className="flex flex-col items-start gap-2 pt-[87px] pr-[32px] pb-[110px]">
            <div className="text-lg font-semibold text-[#390089]">
              تحويل شهري للمبيعات
            </div>
            <small className="inline-block text-sm text-[#606060]">
              احصل على أرباحك بشكل منتظم وتلقائي وأدر دخلك بكفاءة.
            </small>
          </div>
          <div className="w-1/2 shrink-0">
            <Image
              src={"/publish2.png"}
              alt="publish2"
              width={291}
              height={231}
              className="absolute bottom-0 -left-10 md:-bottom-5 md:-left-12 w-[200px] h-[200px] lg:w-[291px] lg:h-[231px]"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col gap-16 md:mt-20 md:gap-20">
        <div className="relative flex min-h-[240px] items-start gap-2 rounded-xl bg-white">
          <div className="flex flex-col items-start gap-2 py-[87px] pr-[32px]">
            <div className="text-lg font-semibold text-[#390089]">
              وصول عالمي
            </div>
            <small className="inline-block text-sm text-[#606060]">
              وسع نطاق تأثيرك من خلال عرض أعمالك الفنية على جمهور أكبر دون أية
              قيود جغرافية
            </small>
          </div>
          <div className="w-1/2 shrink-0">
            <Image
              src={"/publish3.png"}
              alt="publish3"
              width={328}
              height={260}
              className="absolute bottom-0 -left-12 w-[200px] h-[200px] md:w-[250px] mdh-[250px]  md:bottom-0 lg:w-[328px] lg:h-[260px]"
            />
          </div>
        </div>
        <div className="relative flex min-h-[240px] items-start gap-2 rounded-xl bg-[#5106AC]">
          <div className="flex flex-col items-start gap-2 py-[69px] pr-[10px]">
            <div className="text-lg font-semibold text-white">
            خيارات تخصيص مزدوجة
            </div>
            <small className="inline-block text-sm text-white">
            تمنحك مرونة أكبر في تقديم أعمالك الفنية وتوسيع قاعدة عملاءك.
            </small>
          </div>
          <div className="w-1/2 shrink-0">
            <Image
              src={"/publish4.png"}
              alt="publish4"
              width={270}
              height={236}
              className="absolute bottom-0 -left-12 w-[200px] h-[200px] lg:w-[270px] lg:h-[236px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishCards;
