'use client'
import React, { useState } from 'react'
import SmarterCard from './SmarterCard'
import Card1 from "@/../public/how-it-works/card-1.svg"
import Card2 from "@/../public/how-it-works/card-2.svg"
import Card3 from "@/../public/how-it-works/card-3.svg"
function StartSmarter() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            imgSrc: Card1,
            title: "Set Up Your Project",
            desc: "Create a new project in seconds just give it a name and you’re ready to go.",
            videoSrc: "/how-it-works/video-1.mp4"

        },
        {
            imgSrc: Card2,
            title: "Organize Photos",
            desc: "Capture site photos, tag them with notes, dates, and locations all from your phone.",
            videoSrc: "/how-it-works/video-2.mp4"
        },
        {
            imgSrc: Card3,
            title: "Share Work Reports",
            desc: "Generate polished, ready-to-send reports for clients, managers, or your own.",
            videoSrc: "/how-it-works/video-3.mp4"
        }
    ]
    return (
        <>
            <div className="m-auto md:w-[87%] w-[90%] max-w-[1240px] lg:py-[150px] md:py-[100px] py-16 flex flex-col gap-[34px]">
                <div className="flex flex-col gap-12">
                    <div className="inline-flex flex-col  items-center gap-5 relative text-4xl font-semibold font-inter text-center text-black">
                        <p className="relative w-fit lg:text-5xl md:text-4xl text-[28px]">
                            <span className="text-black">
                                Start{" "}
                            </span>

                            <span className="text-blue-600 ">
                                Smarter,
                            </span>

                            <span className="text-black ">
                                {" "}
                                Not{" "}
                            </span>

                            <span className="text-blue-600 ">
                                Harder
                            </span>
                        </p>

                        <p className="relative max-w-[458px] lg:text-xl md:text-lg text-[16px] font-normal  ">
                            WorkFotos simplifies every step from the first photo to the final
                            invoice.
                        </p>
                    </div>
                    {/* <------------------------------------toggler-------------------------> */}
                    <div className="toggler hidden sm:flex  flex-col gap-[34px]">
                        <div className="flex justify-between gap-5 items-center max-w-[924px] lg:w-[87%] w-[100%] m-auto">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`cursor-pointer transition-all duration-200 ${activeIndex === index ? '' : 'opacity-80 hover:opacity-100'
                                        }`}
                                >
                                    <SmarterCard
                                        imgSrc={item.imgSrc}
                                        title={item.title}
                                        desc={item.desc}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="rounded-3xl border w-auto h-auto bg-white border-primary overflow-hidden">
                            {items.map((item, index) => (
                                <video
                                    key={index}
                                    src={item.videoSrc}
                                    width={800}
                                    autoPlay
                                    muted
                                    loop
                                    height={430}
                                    className={`w-full h-full rounded-3xl border-8 bg-white border-[#f6f6f6] ${activeIndex === index ? 'block' : 'hidden'}`}
                                />
                            ))}
                        </div>
                    </div>
                    {/* <--------------------------------------toggler only for mobile---------------------------------------> */}
                    <div className="toggler sm:hidden flex flex-col gap-[34px]">
                        <div className="flex flex-col justify-center items-center gap-5  max-w-[924px] lg:w-[87%] w-[100%] m-auto">
                            <SmarterCard imgSrc={Card1} title="Set Up Your Project" desc="Create a new project in seconds just give it a name and you’re ready to go." />
                            <video src="/how-it-works/video-1.mp4" muted autoPlay width={338} height={158} className='rounded-xl border border-primary' />

                            <SmarterCard imgSrc={Card2} title="Organize Photos" desc="Capture site photos, tag them with notes, dates, and locations all from your phone." />
                            <video src="/how-it-works/video-2.mp4" muted autoPlay width={338} height={158} className='rounded-xl border border-primary' />


                            <SmarterCard imgSrc={Card3} title="Share Work Reports" desc="Generate polished, ready-to-send reports for clients, managers, or your own ." />
                            <video src="/how-it-works/video-3.mp4" muted autoPlay width={338} height={158} className='rounded-xl border border-primary' />

                        </div>

                        <div className="rounded-3xl border bg-white border-primary overflow-hidden">
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default StartSmarter