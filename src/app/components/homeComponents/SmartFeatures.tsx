"use client";

import React from "react";
import Image from "next/image";

const SmartFeatures: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-20 relative overflow-hidden bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12 w-[550px]">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Smart <span className="text-blue-600">Features</span> For Every Step
          Of The <span className="text-blue-600">Job</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Job photos, notes, teams, and sharing WorkFotos brings everything
          together to help you grow.
        </p>
      </div>
      <div className="flex justify-center items-center gap-8 md:gap-12">
        <div className="flex h-[504px] rounded-md overflow-visible shadow-lg">
          <div className="relative w-[240px] bg-[#0d2e7e] h-[504px] rounded-tl-[20px]">
           
            <div className="absolute top-4 left-4">
              <Image
                src="/WorkFotos.png" 
                alt="WorkFotos Logo"
                width={100}
                height={30}
                className="h-auto w-auto"
              />
            </div>
            <div className="absolute  -left-[70px] top-[70%] -translate-y-1/2 w-28 md:w-[240px] z-10">
              <Image
                src="/Mobile3.png"
                alt="Phone Preview"
                width={281}
                height={580}
                className="w-full h-auto"
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
              controls
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
