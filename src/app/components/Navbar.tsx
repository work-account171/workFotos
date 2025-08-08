"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import hamburgerIcon from "@/../public/hamburger.svg";
import cross from "@/../public/cross.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Check if we've scrolled beyond 100vh
      if (scrollY > viewportHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed overflow-visible  top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "md:bg-transparent bg-white border-b border-white/10"
      }`}
      style={{ backdropFilter: scrolled ? "none" : "blur(16px)" }}
    >
      <div className="md:w-[87%] w-[90%] max-w-[1240px] mx-auto flex items-center justify-between lg:py-6 py-4 md:gap-8 transition-colors duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-start">
          <Image
            src="/Black logo.png"
            alt="Logo"
            width={139}
            height={28}
            priority
            className="block md:hidden w-[139px] h-[28px]"
          />

          {/* Tablet & Desktop: Switch Based on Scroll */}
          <Image
            src={scrolled ? "/Black logo.png" : "/WorkFotos.png"}
            alt="Logo"
            width={268}
            height={54}
            priority
            className="hidden md:block md:w-[218px] md:h-[44px] lg:w-[268px] lg:h-[54px]"
          />
        </Link>

        {/* Navigation */}
        <div className="lg:flex md:hidden items-center space-x-6 ml-auto">
          <nav
            className={`hidden lg:flex space-x-6 text-[18px] font-medium transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <Link href="/how-it-works">How it Works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="lg:flex flex-row hidden gap-3">
            <Link
              href="/login"
              className={`py-2 px-4 rounded-full text-sm border transition-all duration-300 ${
                scrolled ? "border-black text-black" : "border-white text-white"
              }`}
            >
              Member Login
            </Link>
            <Link
              href="/signup"
              className={`py-2 px-4 rounded-full text-sm transition-colors duration-300 ${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Join Today
            </Link>
          </div>
        </div>
        <Image
          src={hamburgerIcon}
          alt="hamburger icon"
          width={19}
          height={19}
          className="lg:hidden block"
          onClick={() => setSidebar(true)}
        />
      </div>
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] bg-white z-50 px-6 pt-[20px] pb-[100px] flex flex-col gap-24 transform transition-transform duration-300 ease-in-out ${
          sidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-24">
          <div className="flex justify-between items-center">
            <Image
              src={"/Black logo.png"}
              alt="logo"
              width={268}
              height={54}
              priority
              className="w-[139px] md:w-[219px] md:h-[44px] h-[28px]"
              onClick={() => setSidebar(false)}
            />
            <Image
              src={cross}
              alt="cross icon"
              width={19}
              height={19}
              className="lg:hidden block"
              onClick={() => setSidebar(false)}
            />
          </div>
          <div className="flex flex-col h-[70vh] items-between justify-between">
            <nav className="flex flex-col gap-5 text-[18px] font-medium transition-colors duration-300 text-black">
              <Link href="/how-it-works" onClick={() => setSidebar(false)}>
                How it Works
              </Link>
              <Link href="/pricing" onClick={() => setSidebar(false)}>
                Pricing
              </Link>
              <Link href="/contact" onClick={() => setSidebar(false)}>
                Contact
              </Link>
            </nav>
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                className="py-2 px-4 rounded-full text-sm text-center border transition-all duration-300 border-black text-black"
              >
                Member Login
              </Link>
              <Link
                href="/signup"
                className={`py-2 px-4 rounded-full text-center text-sm transition-colors duration-300 ${
                  scrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Join Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
