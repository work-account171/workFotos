"use client";

import React from "react";

import Button from "../Button";

const Hero: React.FC = () => {
  return (
    <section className="relative w-[100vw] h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 translate-r-7 min-w-max inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/Herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       
      </div>

      <div className=" md:w-[87%] w-[90%] max-w-[1240px] z-10  px-4 md:px-0 mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="w-full lg:w-[55%] md:[75%] text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Turn <span className="text-primary">Work Photos</span> Into More
              Business
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl">
              Organize, showcase, and grow with the visual platform built for
              service pros who want to win more work.
            </p>

            <div className="mt-8 sm:mt-10">
              <Button text="Join WorkFotos" variant="primary" href="/"  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
