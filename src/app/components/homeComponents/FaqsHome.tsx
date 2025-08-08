import React from "react";
import Image, { StaticImageData } from "next/image";

import FaqsContent from "./FaqsContent";

type FaqsSectionProps = {
  imgSrc: StaticImageData;
};

const FaqsHome: React.FC<FaqsSectionProps> = ({ imgSrc }) => {
  return (
    <>
      <div className="m-auto md:w-[87%] overflow-hidden w-[90%] max-w-[1240px] lg:pb-[150px] md:pb-[100px] pb-16 flex justify-center md:justify-between items-center">
        <div className="flex flex-col md:w-[48%] w-full lg:gap-16 md:gap-12 gap-7">
          <div className="max-w-[503px]">
            <p className="font-bold text-transparent lg:text-5xl md:text-4xl text-[28px] leading-[normal]">
              <span className="text-blue-600">Everything</span>
              <span className="text-black"> You Need to Know</span>
            </p>
          </div>
          <Image
            src={imgSrc}
            alt="Faq section image"
            width={300}
            height={300}
            className="md:hidden block rounded-2xl w-full h-full"
          />
          <div className="absolute left-0   z-[-1]">
            <Image
              src="/right-color.png"
              alt="Decorative Left Glow"
              width={669}
              height={504}
              className="pointer-events-none"
            />
          </div>
         <FaqsContent/>
        </div>
        <div className="md:w-[45%] h-full md:block hidden ">
          <Image
            src={imgSrc}
            alt="Faq section image"
            width={527}
            height={544}
            className="rounded-3xl w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default FaqsHome;
