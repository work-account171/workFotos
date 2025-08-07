import React from "react";

function HeroContact() {
  return (
    <>
      <div className="lg:pb-[100px] pt-[124px] pb-[64px] md:pb-[82px] lg:pt-[220px] md:pt-[166px] bg-[url('/heroContact.svg')] bg-repeat bg-cover">
        <div className="flex flex-col justify-center items-center lg:gap-6 md:gap-5 gap-4">
          <h1
            className="text-[28px] md:max-w-[695px] max-w-[342px] font-bold md:text-4xl lg:text-5xl text-white text-center"
          >
            Let’s Build Better Together
          </h1>
          <p className="lg:text-xl md:text-[16px] text-sm font-normal text-center text-white max-w-[342px] md:max-w-[695px]">Have a question about WorkFotos or need help getting started? Our team is here to support you.</p>
        </div>
      </div>
    </>
  );
}

export default HeroContact;
