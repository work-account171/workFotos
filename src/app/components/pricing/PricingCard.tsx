'use client';

import React from "react";
import Image from "next/image";

const features = [
  "Unlimited Photo Storage",
  "Owner plus 2 FREE seats included (two team members)",
  "Project Album Tools",
  "Estimates & Invoices",
  "Before & After Templates",
  "Map-Linked Photos",
  "Public Portfolio Page",
  "Private Notes & Markups",
  "Mobile + Desktop Access",
];

const PricingCard: React.FC = () => {
  return (
    <div className="absolute inset-x-0 -bottom-[142%] sm:-bottom-[100%] lg:-bottom-[85%] flex justify-center px-4 ">
      <div
        className="
          bg-white text-gray-900 rounded-xl shadow-sm
           w-90 sm:max-w-sm= lg:w-96
          h-auto lg:h-[720px]
          overflow-hidden
        "
      >
        
        <div className="bg-primary text-white text-md font-semibold py-2 text-center">
          RECOMMENDED
        </div>

     
        <div className="p-8 sm:p-10">
          <h3 className="text-lg font-semibold text-center mb-1">
            WorkFotos Pro
          </h3>
          <p className="text-sm text-black text-center mb-4">
            Perfect for solo professionals and growing teams.
          </p>

          <div className="text-3xl font-bold text-center text-blue-600 mb-1">
            $29/mo
          </div>
          <p className="text-xs text-center text-gray-500 mb-4">
            15-Day Free Trial. Cancel Anytime.
          </p>

        
          <div className="flex justify-center">
            <a
              href="#"
              className="bg-gradient-to-r from-[#153885] to-[#2563EB] text-white rounded-full px-6 py-[14px] font-semibold text-base w-full text-center hover:opacity-90 transition"
            >
              Get Start Now
            </a>
          </div>

          <div className="my-6 border-t border-[#E8E5DC]" />

         
          <div className="text-start">
            <h4 className="font-semibold text-md mb-3">
              Top Features Included:
            </h4>
            <ul className="space-y-3 text-sm">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Image
                    src="/icons/tickicon.png"
                    alt="check"
                    width={20}
                    height={20}
                    className="mr-2 mt-0.5"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
