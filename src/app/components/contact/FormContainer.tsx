"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrowImg from "@/../public/linkWhite.svg";
import layer from "@/../public/layer-bg.svg";

function FormContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await res.json();
      if (result.success) {
        console.log("email sent successfully!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        console.log("failed to send email", result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <div className=" relative lg:py-[120px] overflow-hidden  md:pt-[82px] md:pb-[120px] py-[64px] md:w-[87%] w-[90%] max-w-[1240px] m-auto flex md:flex-row flex-col justify-start items-start gap-[34px] md:justify-between md:items-center ">
        <Image
          src={layer}
          width="669"
          alt="detail image"
          height="446"
          className="absolute top-0  -right-28"
        />
        <Image
          src={layer}
          width="669"
          alt="detail image"
          height="446"
          className="absolute top-0  -left-28 "
        />

        <div className="max-w-[503px] z-10 md:w-[45%] w-full flex flex-col lg:gap-11 md:gap-[34px] gap-7">
          <h2 className="font-bold text-transparent  lg:text-4xl  md:text-[28px] text-2xl  text-[28px] leading-[normal]">
            <span className="text-black">Need Help? We&apos;re Just </span>
            <span className="text-blue-600"> a Message Away</span>
          </h2>
          <div className="flex flex-col lg:gap-4 md:gap-3.5 gap-3">
            <p className="lg:text-xl md:text-[16px] text-sm text-black">
              Whether you&apos;re managing a busy construction site, running a
              growing service business, or just exploring what WorkFotos can do,
              we&apos;re here to help.
            </p>
            <p className="lg:text-xl md:text-[16px] text-sm text-black">
              Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
        <div className="form md:w-[47%] z-10 w-full shadow-[0_1_2px_rgba(16,24,40,0.05)]">
          {submitted && (
            <div className="mb-4 text-green-700 bg-green-100 border border-green-200 rounded-lg px-4 py-3 text-sm font-medium">
              ✅ Your message has been sent successfully!
            </div>
          )}
          <form
            className="bg-white border border-gray-400 md:py-5 md:px-6 rounded-lg  flex flex-col lg:gap-6 md:gap-5 py-4 px-5 gap-4 "
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-black md:text-[16px] text-sm"
              >
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
                placeholder="John Doe"
                className="py-3 px-4  shadow-[0_1_2px_rgba(16,24, 40,0.05)] placeholder:text-[rgba(0,0,0,0.6)] md:rounded-lg border border-[rgba(0,0,0,0.1)] text-black"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-black md:text-[16px] text-sm"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="you@company.com"
                className="py-3 px-4 placeholder:text-[rgba(0,0,0,0.6)] rounded-lg border border-[rgba(0,0,0,0.1)] text-black"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-black md:text-[16px] text-sm"
              >
                How can we help?
              </label>
              <textarea
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                placeholder="Tell us a little about the project..."
                className="py-2.5 px-3.5 placeholder:text-[rgba(0,0,0,0.6)] rounded-lg border border-[rgba(0,0,0,0.1)] text-black"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white hover:shadow-[0_2_15px_rgba(0,0,0,0.2)] group rounded-xl py-3.5 px-5 text-[16px] font-semibold flex gap-3.5 justify-center items-center "
            >
              Join WorkFotos
              <Image
                src={arrowImg}
                alt="arrow img"
                width={20}
                height={20}
                className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormContainer;
