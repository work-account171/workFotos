import React from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  iconPath: string; // Relative to /public
}

const features: Feature[] = [
  {
    title: "Visual Project Management",
    description: "Manage job sites by visual hub.",
    iconPath: "/icons/Visual project.png",
  },
  {
    title: "Photo & File Organization",
    description: "Project-Based Photo Storage",
    iconPath: "/icons/photo.png",
  },
  {
    title: "Shareable Project Albums",
    description: "Send polished albums to clients",
    iconPath: "/icons/albums.png",
  },
  {
    title: "Branded Public Portfolios",
    description: "Build a professional portfolio",
    iconPath: "/icons/Gallery.png",
  },
  {
    title: "CRM & Client Tracking",
    description: "Store contact info & track",
    iconPath: "/icons/Crm.png",
  },
  {
    title: "Smart Notes & Annotations",
    description: "Notes that add context",
    iconPath: "/icons/Smart.png",
  },
  {
    title: "All-in-One Visual Platform",
    description: "Workflow under one visual roof",
    iconPath: "/icons/Platform.png",
  },
  {
    title: "Team & Client Collaboration",
    description: "Assign tasks real-time updates.",
    iconPath: "/icons/client.png",
  },
];

const WorkFotosFeatures: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] w-[87%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-[510px] w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium bg-[#1e3a8a] text-white rounded-full mb-4">
            <Image
              src="/icons/Sf.png"
              alt="Smart Icon"
              width={12}
              height={12}
            />
            Smart Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            WorkFotos Features That{" "}
            <span className="text-blue-600">Simplify & Scale</span> Your
            Workflow
          </h2>
          <p className="text-gray-600 mb-6">
            Power up your project management with photo-first tools that keep
            everything organized and client-ready.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 flex-1">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white border border-gray-200 rounded-[12px] p-4 h-[220 px] md:h-[181px] transition-all duration-300 hover:border-t-[#1e3a8a] hover:border-b-8 hover:border-b-[#1e3a8a] hover:border-l-[#1e3a8a] hover:border-r-[#1e3a8a]"
            >
              <div className="mb-12">
                <Image
                  src={feature.iconPath}
                  alt={feature.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFotosFeatures;
