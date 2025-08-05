"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-transparent border-b border-white/10"
      }`}
      style={{ backdropFilter: scrolled ? "none" : "blur(16px)" }}
    >
      <div className="w-[87%] max-w-[1240px] mx-auto flex items-center justify-between h-[100px] md:gap-8 transition-colors duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-start">
          <Image
            src={scrolled ? "/Black logo.png" : "/WorkFotos.png"} // Make sure you have both in `/public`
            alt="Logo"
            width={268}
            height={54}
            priority
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center space-x-6 ml-auto">
          <nav
            className={`hidden md:flex space-x-6 text-[18px] font-medium transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <Link href="/how-it-works">How it Works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link
            href="/login"
            className={`py-2 px-4 rounded-full text-sm border transition-all duration-300 ${
              scrolled
                ? "border-black text-black"
                : "border-white text-white"
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
    </header>
  );
}
