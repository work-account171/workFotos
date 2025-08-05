"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
  className="fixed top-0 left-0 w-full bg-transparent bg-opacity-20 border-b border-white/10 h-[100px] flex items-center justify-center z-50"
  style={{ backdropFilter: "blur(16px)" }}
>
  <div className="w-[87%] max-w-[1240px] mx-auto flex items-center justify-between md:gap-8">
    {/* Logo */}
    <Link href="/" className="flex items-start">
      <Image src="/WorkFotos.png" alt="Logo" width={268} height={54} />
    </Link>

    <div className='bg-red-400'>WorkFotos Navbar</div>

    {/* Nav + Buttons Grouped Together */}
    <div className="flex items-center space-x-6 ml-auto">
      <nav className="hidden md:flex space-x-6 text-white text-[18px] font-medium">
        <Link href="/how-it-works">How it Works</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <Link
        href="/login"
        className="border border-white text-white py-2 px-4 rounded-full text-sm"
      >
        Member Login
      </Link>
      <Link
        href="/signup"
        className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-700"
      >
        Join Today
      </Link>
    </div>
  </div>
</header>

  );
}
