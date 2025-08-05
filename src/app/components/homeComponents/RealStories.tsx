// "use client";

// import React, { useState } from "react";
// import Image, { StaticImageData } from "next/image";

// type Testimonial = {
//   quote: string;
//   highlight: string;
//   author: string;
//   role: string;
//   image: string;
// };

// interface TestimonialsCarouselProps {
//   leftArrowImage: StaticImageData;
//   rightArrowImage: StaticImageData;
//   testimonials?: Testimonial[];
// }

// const RealStories: React.FC<TestimonialsCarouselProps> = ({
//   leftArrowImage,
//   rightArrowImage,
//   testimonials = [
//     {
//       highlight:
//         "WorkFotos has completely simplified how we organize and access our photo archives. The folder system is intuitive and sharing albums with clients is now effortless.",
//       author: "Jessica M.",
//       role: "Head of Talent Acquisition",
//       image: "/icons/pfp.png",
//     },
//     {
//       highlight:
//         "We need a reliable cloud solution for storing thousands of project photos that WorkFotos did. It’s fast, easy to use and keeps everything perfectly organized.",
//       author: "Danny D.",
//       role: "Project Manager",
//       image: "/icons/pfp2.png",
//     },
//     {
//       highlight:
//         "No more digging through hard drives or shared folders. Workfotos lets us keep pur visual content neat, searchable, and secure.",
//       author: "Priya S.",
//       role: "Marketing Coordinator ",
//       image: "/icons/pfp3.png",
//     },
//   ],
// }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isAnimating, setIsAnimating] = useState<boolean>(false);

//   const animateToTestimonial = (newIndex: number): void => {
//     if (isAnimating || newIndex === currentIndex) return;

//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex(newIndex);
//       setIsAnimating(false);
//     }, 300);
//   };

//   const nextTestimonial = (): void => {
//     const newIndex =
//       currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
//     animateToTestimonial(newIndex);
//   };

//   const prevTestimonial = (): void => {
//     const newIndex =
//       currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
//     animateToTestimonial(newIndex);
//   };

//   const renderText = (text: string): string => {
//     return text.replace(/"/g, "&quot;").replace(/'/g, "&apos;");
//   };

//   return (
//     <section className=" py-16 px-4 sm:px-6 lg:px-8 max-w-4xl m-auto">
//       <div className="text-center mb-25">
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//           Real <span className="text-primary">Stories</span> from the Field
//         </h2>
//         <p className="text-lg text-black">
//           See how real users streamline jobs, impress clients, and grow faster
//           with WorkFotos.
//         </p>
//       </div>

//       <div className="relative bg-[url('/testimonial-bg-img.png')] bg-cover bg-center p-8 rounded-lg min-h-[300px] overflow-visible">
//         <div
//           className={`text-start transition-opacity duration-300 ${
//             isAnimating ? "opacity-0" : "opacity-100"
//           }`}
//           key={currentIndex}
//         >
//           <div className="flex  mb-6">
//             <Image
//               src="/icons/Commas.png"
//               alt="Quote Icon"
//               width={54}
//               height={54}
//             />
//           </div>

//           {/* {testimonials[currentIndex].highlight && (
//             <p
//               className="text-lg font-light text-black mb-4"
//               dangerouslySetInnerHTML={{
//                 __html: `&ldquo;${renderText(
//                   testimonials[currentIndex].highlight
//                 )}&rdquo;`,
//               }} */}
//               <div className="w-[100wh] overflow-x-auto">
// {testimonials.map(item,index)}
//               </div>
//             />
//           )}

//           <div className="flex gap-4  pt-4 mt-6">
//             <Image
//               src={testimonials[currentIndex].image}
//               alt={testimonials[currentIndex].author}
//               width={48}
//               height={48}
//               className="rounded-full object-cover"
//             />
//             <div className="text-left">
//               <p className="font-semibold text-gray-900">
//                 {testimonials[currentIndex].author}
//               </p>
//               <p className="text-gray-600">{testimonials[currentIndex].role}</p>
//             </div>
//           </div>
//         </div>
//         <button
//           onClick={prevTestimonial}
//           disabled={isAnimating}
//           className={`absolute left-[87%] top-[-30px] -translate-y-1/2 hover:scale-110 transition-transform ${
//             isAnimating ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           aria-label="Previous testimonial"
//         >
//           <Image
//             src={leftArrowImage}
//             alt="Previous"
//             width={40}
//             height={40}
//             priority
//           />
//         </button>
//         <button
//           onClick={nextTestimonial}
//           disabled={isAnimating}
//           className={`absolute right-4 top-[-30px] -translate-y-1/2 hover:scale-110 transition-transform ${
//             isAnimating ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           aria-label="Next testimonial"
//         >
//           <Image
//             src={rightArrowImage}
//             alt="Next"
//             width={40}
//             height={40}
//             priority
//           />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default RealStories;

'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const TestimonialSlider: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "WorkFotos has completely simplified how we organize and access our photo archives. The folder system is intuitive and sharing albums with clients is now effortless.",
      name: "Jessica M.",
      title: "Head of Talent Acquisition",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9dc7b96?w=60&h=60&fit=crop&crop=face&auto=format"
    },
    {
      id: 2,
      quote: "We need a reliable solution that WorkFotos provides. Our workflow is now more organized and efficient than ever before.",
      name: "Daniel K.",
      title: "Project Manager",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&auto=format"
    },
    {
      id: 3,
      quote: "The intuitive interface and powerful organization tools have transformed how we handle client photo deliveries. Absolutely game-changing!",
      name: "Sarah L.",
      title: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face&auto=format"
    },
    {
      id: 4,
      quote: "WorkFotos streamlined our entire photography workflow. Client satisfaction has increased dramatically since we started using it.",
      name: "Michael R.",
      title: "Photography Studio Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real <span className="text-blue-600">Stories</span> from the Field
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how real users streamline jobs, impress clients, and grow faster with WorkFotos.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[79%] top-[-30px] -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-[11%] top-[-30px] -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Cards Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-8">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mx-auto max-w-4xl relative">                   
                    {/* Quote Text */}
                    <div className="mb-8 pt-8">
                      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-blue-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;