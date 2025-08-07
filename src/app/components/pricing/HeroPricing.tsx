'use client';

import React from 'react';
import PricingCard from './PricingCard';
import Image from 'next/image';

const HeroPricing: React.FC = () => {
  return (
    <section
      className="
        relative 
        bg-[url('/pricingimg.png')] 
        bg-cover bg-center 
        text-white 
        pt-24 sm:pt-28 md:pt-40 
        pb-20 sm:pb-20 lg:pb-36 
        text-center 
        min-h-[100vh] sm:min-h-[70vh] lg:min-h-[600px]
        mb-150
        bg-white
      "
    >
      
      <div className="absolute left-0 top-[100%] -translate-y-[30%] z-50">
        <Image
          src="/right-color.png"
          alt="Decorative Left Glow"
          width={669}
          height={504}
          className="pointer-events-none"
        />
      </div>

     
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
          Smart Plans. WorkFotos Results.
        </h2>
        <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
          Join the modern platform designed to grow your business, boost your online presence, and showcase your work visually to your clients and community.
        </p>
      </div>

      {/* Pricing Card */}
      <PricingCard />
    </section>
  );
};

export default HeroPricing;
