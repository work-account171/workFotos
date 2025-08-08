'use client';

import React from 'react';
import Image from 'next/image';

const HowitWorks: React.FC = () => {
  return (
    <section className='relative bg-white'>
      <div className="md:w-[87%] w-[90%] overflow-hidden max-w-[1240px] mx-auto pt-[64px] md:pt-[100px] lg:pt-[150px]  flex flex-col items-center text-center lg:gap-[64px] md:gap-[48px] gap-[28px]">
       
        <div className="flex flex-col lg:gap-6 md:gap-5 gap-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center text-black font-bold leading-snug">
            How WorkFotos <span className="text-primary">Works</span>
          </h1>
          <h2 className="font-light lg:text-lg md:text-[16px] text-sm md:text-xl text-black">
            Simplify your workflow in just three steps
          </h2>
        </div>

       <div className="absolute left-0  -translate-y-[30%] z-50">
               <Image
                 src="/right-color.png"
                 alt="Decorative Left Glow"
                 width={669}
                 height={504}
                 className="pointer-events-none"
               />
             </div>
        <div className="flex flex-col  md:flex-row items-center w-full justify-between gap-6  group">
         {/* div 1 */}
          <div className="relative w-full flex justify-center items-center  md:w-[47%] ">
           
            <div className=" lg:w-[238px] lg:h-[491px] w-[153px] h-[313px]  transform -rotate-[6deg]   z-10 transition-all duration-500 group-hover:rotate-0 group-hover:-translate-x-[0px]">
              <Image
                src="/Mobile 2.png"
                alt="Phone Left"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Right Image */}
            <div className=" lg:w-[238px] lg:h-[491px] w-[153px] h-[313px]  transform rotate-[6deg]   z-20 transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-[0px]">
              <Image
                src="/Mobile.png"
                alt="Phone Right"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Steps List div2*/}
          <div className="w-full md:w-[46%] flex flex-col lg:gap-6 md:gap-5 gap-4 text-left">
            <div className="flex items-start  lg:gap-6 md:gap-5 gap-4">
              <Image src="/icons/Folder.png" alt="Create" width={32} height={32} className='lg:w-[48px] lg:h-[48px] w-[40px] h-[40px]' />
              <div className='flex flex-col lg:gap-4 gap-3 md:gap-3.5'>
                <h3 className="text-lg font-semibold text-black">Create Projects</h3>
                <p className="text-black text-sm">
                  Start by adding a job using the address or client name — simple and organized from the start.
                </p>
              </div>
            </div>

            <div className="flex items-start lg:gap-6 md:gap-5 gap-4 ">
              <Image src="/icons/Upload.png" alt="Upload" width={32} height={32} className='lg:w-[48px] lg:h-[48px] w-[40px] h-[40px]'/>
              <div className='flex flex-col lg:gap-4 gap-3 md:gap-3.5'>
                <h3 className="text-lg font-semibold text-black">Upload & Track</h3>
                <p className="text-black text-sm">
                  Add jobsite photos, write notes, and keep progress visible all in one place.
                </p>
              </div>
            </div>

            <div className="flex items-start lg:gap-6 md:gap-5 gap-4 ">
              <Image src="/icons/Share.png" alt="Share" width={32} height={32} className='lg:w-[48px] lg:h-[48px] w-[40px] h-[40px]'/>
              <div className='flex flex-col lg:gap-4 gap-3 md:gap-3.5'>
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
