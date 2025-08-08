import React from "react";
import Image, { StaticImageData } from "next/image";
import FaqsPricing from "./FaqsPricing";

type FaqsSectionProps = {
  imgSrc: StaticImageData;
};

const FaqsSectionpricing: React.FC<FaqsSectionProps> = ({ imgSrc }) => {
  return (
    <div className="relative m-auto md:w-[87%] w-[90%] max-w-[1240px] lg:pb-[150px] md:pb-[100px] pb-16 pt-15 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">

      <div className="absolute right-[-140px] z-0 hidden lg:block pointer-events-none ">
        <Image
          src="/Leftcolor.png"
          alt="Decorative Right Glow"
          width={700}
          height={504}
        />
      </div>

   
      <div className="md:w-[45%] h-full md:block hidden relative z-10">
        <Image
          src={imgSrc}
          alt="Faq section image"
          width={527}
          height={544}
          className="rounded-3xl w-full h-full"
        />
      </div>

      {/* FAQ Content */}
      <div className="flex flex-col md:w-[48%] w-full lg:gap-16 md:gap-12 gap-7 relative z-10">
        {/* Image for small screens */}
        <Image
          src={imgSrc}
          alt="Faq section image"
          width={300}
          height={300}
          className="md:hidden block rounded-2xl w-full h-full"
        />

        <div className="max-w-[490px]">
          <p className="font-bold text-transparent lg:text-4xl md:text-4xl text-[28px] leading-[normal]">
            <span className="text-black">WorkFotos Pricing</span>
            <br />
            <span className="text-blue-600">FAQs</span>
          </p>
        </div>

        <FaqsPricing />
      </div>
    </div>
  );
};

export default FaqsSectionpricing;
