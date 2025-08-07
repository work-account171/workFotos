import React from "react";
import HeroContact from "../components/contact/HeroContact";

function contact() {
  return (
    <>
      <HeroContact />
      <div className="lg:py-[120px] md:pt-[82px] md:pb-[120px] py-[64px] md:w-[87%] w-[90%] max-w-[1240px] m-auto flex md:flex-row flex-col justify-between items-center ">
        <div className="max-w-[503px] md:w-[45%] w-full flex flex-col lg:gap-11 md:gap-[34px] gap-7">
          <h2 className="font-bold text-transparent  lg:text-4xl  md:text-[28px] text-2xl  text-[28px] leading-[normal]">
            <span className="text-black">Need Help? We &apos; re Just </span>
            <span className="text-blue-600"> a Message Away</span>
          </h2>
          <div className="flex flex-col lg:gap-4 md:gap-3.5 gap-3">
            <p className="lg:text-xl md:text-[16px] text-sm text-black">
              Whether you &apos; re managing a busy construction site, running a
              growing service business, or just exploring what WorkFotos can do,
              we&apos;re here to help.
            </p>
            <p className="lg:text-xl md:text-[16px] text-sm text-black">
              Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
        <div className="form w-[47%]">
          <form className="bg-white py-5 px-6 rounded-lg shadow-[0_1_2px rgba(16,24,40,0.05)] flex flex-col gap-6" action="">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-black">
                Name
              </label>
              <input type="text" name="name" id="name" placeholder="John Doe" className="py-3 px-4 placeholder:text-[rgba(0,0,0,0.6)] rounded-lg border border-[rgba(0,0,0,0.1)] text-black" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-black">
                Email
              </label>
              <input type="email" name="email" id="email" placeholder="you@company.com" className="py-3 px-4 placeholder:text-[rgba(0,0,0,0.6)] rounded-lg border border-[rgba(0,0,0,0.1)] text-black" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-black">
                How can we help?
              </label>
              <textarea  name="message" id="message" placeholder="Tell us a little about the project..." className="py-3 px-4 placeholder:text-[rgba(0,0,0,0.6)] rounded-lg border border-[rgba(0,0,0,0.1)] text-black" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default contact;
