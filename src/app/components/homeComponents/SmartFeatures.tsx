"use client";

import React from "react";
import Image from "next/image";

const SmartFeatures: React.FC = () => {
  return (
    <section className="lg:py-[150px] bg-white md:py-[100px] py-[64px]  w-[90%] md:w-[87%] mx-auto relative overflow-hidden ">
      <div className=" mx-auto text-center mb-12 max-w-[550px]">
        <h1 className="text-2xl lg:text-5xl md:text-[36px] font-bold text-gray-800">
          Smart <span className="text-blue-600">Features</span> For Every Step
          Of The <span className="text-blue-600">Job</span>
        </h1>
        <p className="mt-4 md:mt-5 lg:mt-6 text-gray-600 lg:text-lg md:text-[16px] text-sm">
          Job photos, notes, teams, and sharing WorkFotos brings everything
          together to help you grow.
        </p>
      </div>
      <div className="flex md:w-[87%] w-full ml-auto justify-center items-center gap-8 md:gap-12">
        <div className="flex h-[267px] md:h-[504px] rounded-md overflow-visible shadow-lg">
          <div className="relative w-[149px] md:w-[240px]  bg-[#0d2e7e] h-full rounded-tl-[20px]">
           
            <div className="absolute top-4 left-4">
              <Image
                src="/WorkFotos.png" 
                alt="WorkFotos Logo"
                width={100}
                height={30}
                className="md:h-auto md:w-auto w-[87px] h-[22px] "
              />
            </div>
            <div className="absolute md:-left-[70px] left-0 right-0 top-[70%] -translate-y-1/2 w-[130px] md:w-[240px] z-10">
              <Image
                src="/Mobile3.png"
                alt="Phone Preview"
                width={281}
                height={580}
                className=" w-[130px] h-[250px] md:w-[281px] md:h-auto "
              />
            </div>
          </div>

          <div className="w-[calc(100%-5rem)]">
            {" "}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-tr-md rounded-br-md"
            >
              <source src="/videos/SmartFeatures.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;
