"use client";
import React from "react";
import Image from "next/image";
import Testimonial from "./Testimonial";
import author1Img from "@/../public/author1img.svg";
import prevArrow from "@/../public/prev-arrow.svg";
import nextArrow from "@/../public/next-arrow.svg";
import { useRef } from "react";



const TestimonialSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
  const el = scrollRef.current;
  if (!el) return;

  const cardWidth = el.firstElementChild
    ? (el.firstElementChild as HTMLElement).offsetWidth + 24 // 24px = gap-6
    : 0;

  el.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });
};

const handlePrev = () => {
  const el = scrollRef.current;
  if (!el) return;

  const cardWidth = el.firstElementChild
    ? (el.firstElementChild as HTMLElement).offsetWidth + 24
    : 0;

  el.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });
};

  

  return (
    <div className="md:w-[87%] w-[90%] lg:pb-[150px] md:pb-[100px] pb-[64px]  text-center flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center lg:mb-16 md:mb-12 mb-8 lg:max-w-[704px] max-w-[342px] mx-auto">
          <h1 className="md:text-[36px] text-[28px]/8 md:text-5xl font-bold text-gray-900 mb-4">
            Real <span className="text-blue-600">Stories</span> from the Field
          </h1>
          <p className="md:text-lg text-sm text-gray-600  ">
            See how real users streamline jobs, impress clients, and grow faster
            with WorkFotos.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative flex flex-col lg:gap-9 md:gap-7 gap-5">
          <div className="flex flex-row justify-end items-center lg:gap-3.5 gap-2.5">
            <Image
              src={prevArrow}
              alt="prev arrow"
              width={44}
              height={44}
              className="shadow-lg lg:w-[44px] lg:h-[44px] md:w-[34px] md:h-[34px] w-[24px] h-[24px]"
              onClick={handlePrev}
            />
            <Image
              src={nextArrow}
              alt="next arrow"
              width={44}
              height={44}
              className="shadow-lg lg:w-[44px] lg:h-[44px] md:w-[34px] md:h-[34px] w-[24px] h-[24px] "
              onClick={handleNext}
            />
          </div>

          {/* Testimonial Cards Container */}
          <div className="overflow-hidden rounded-2xl mx-auto w-[90%] ">
            <div ref={scrollRef} className="flex overflow-x-scroll  snap-x snap-mandatory  justify-start hide-scrollbar  items-center  gap-6 transition-transform duration-500 ease-in-out">
              <Testimonial
                saying="WorkFotos has completely simplified how we organize and access our photo archives. The folder system is intuitive and sharing albums with clients is now effortless."
                author="Jessica M.
"
                authorImg={author1Img}
                role="Head of Talent Acquisition"
              />
              <Testimonial
                saying="WorkFotos has completely simplified how we organize and access our photo archives. The folder system is intuitive and sharing albums with clients is now effortless."
                author="Jessica M.
"
                authorImg={author1Img}
                role="Head of Talent Acquisition"
              />
              <Testimonial
                saying="WorkFotos has completely simplified how we organize and access our photo archives. The folder system is intuitive and sharing albums with clients is now effortless."
                author="Jessica M.
"
                authorImg={author1Img}
                role="Head of Talent Acquisition"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
