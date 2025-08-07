'use client';

import React from 'react';
import Image from 'next/image';

const HowitWorks: React.FC = () => {
  return (
    <section className='bg-white'>
      <div className="w-[87%] max-w-[1240px] mx-auto pt-[64px] md:pt-[100px] lg:pt-[150px] pb-[100px] flex flex-col items-center text-center gap-[64px]">
       
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl text-center text-black font-bold leading-snug">
            How WorkFotos <span className="text-primary">Works</span>
          </h1>
          <h2 className="font-light text-lg md:text-xl text-black">
            Simplify your workflow in just three steps
          </h2>
        </div>

       
        <div className="flex flex-col  md:flex-row items-center w-full justify-between gap-6 md:gap-80 group">
         
          <div className="relative w-full  md:w-[47%] md:h-[491px] bg-blue-500">
           
            <div className="absolute w-[238px] h-[491px] inset-0 transform -rotate-[6deg] -translate-x-[40px] md:-translate-x-[20px] z-10 transition-all duration-500 group-hover:rotate-0 group-hover:-translate-x-[90px]">
              <Image
                src="/Mobile 2.png"
                alt="Phone Left"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Right Image */}
            <div className="absolute w-[238px] h-[491px] inset-0 transform rotate-[6deg] translate-x-[40px] md:translate-x-[20px] z-20 transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-[90px]">
              <Image
                src="/Mobile.png"
                alt="Phone Right"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Steps List */}
          <div className="w-full md:w-[47%]  space-y-8 text-left">
            <div className="flex items-start gap-4">
              <Image src="/icons/Folder.png" alt="Create" width={32} height={32} />
              <div>
                <h3 className="text-lg font-semibold text-black">Create Projects</h3>
                <p className="text-black text-sm">
                  Start by adding a job using the address or client name — simple and organized from the start.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image src="/icons/Upload.png" alt="Upload" width={32} height={32} />
              <div>
                <h3 className="text-lg font-semibold text-black">Upload & Track</h3>
                <p className="text-black text-sm">
                  Add jobsite photos, write notes, and keep progress visible all in one place.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image src="/icons/Share.png" alt="Share" width={32} height={32} />
              <div>
                <h3 className="text-lg font-semibold text-black">Share or Showcase</h3>
                <p className="text-black text-sm">
                  Keep everyone updated or impress potential clients by showcasing your best work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
