import React from 'react'
import ImageVideoCard from './ImageVideoCard'
import ImgVid1 from "@/../public/how-it-works/imgvid1.svg"
import ImgVid2 from "@/../public/how-it-works/imgvid2.svg"
import ImgVid3 from "@/../public/how-it-works/imgvid3.svg"
import ImgVid4 from "@/../public/how-it-works/imgvid4.svg"


function WorkSite() {
    return (
        <>
            <div className="py-16 md:w-[87%] w-[90%]  max-w-[1240px] md:py-[100px] m-auto lg:py-[150px] overflow-hidden">
                <div className="flex flex-col gap-9 md:gap-12 lg:gap-16 justify-center items-center">
                    <div className="inline-flex flex-col  items-center gap-5 relative text-4xl font-semibold font-inter text-center text-black">
                        <p className="relative w-fit lg:text-5xl md:text-4xl text-[28px]">
                            <span className="text-black">
                                Built for Every{" "}
                            </span>

                            <span className="text-blue-600 ">
                                Worksite
                            </span>

                            <span className="text-black ">
                                {" "}
                                Role{" "}
                            </span>
                        </p>

                        <p className="relative max-w-[618px] lg:text-xl md:text-lg text-[16px] font-normal  ">
                            From contractors to office staff WorkFotos helps everyone stay organized, informed, and on track.
                        </p>
                    </div>
                    <div className="flex md:justify-center justify-start items-center md:gap-6 scroll-n hide-scrollbar gap-4 overflow-x-scroll max-w-full">
                        <ImageVideoCard imageSrc={ImgVid1} btnText='Interior Designer' videoSrc='/how-it-works/vid1img.mp4'/>
                        <ImageVideoCard imageSrc={ImgVid2} btnText='General Contractors' videoSrc='/how-it-works/vid2img.mp4'/>
                        <ImageVideoCard imageSrc={ImgVid3} btnText='Real Estate Agency' videoSrc='/how-it-works/vid3img.mp4'/>
                        <ImageVideoCard imageSrc={ImgVid4} btnText='Tourism & Travel Agency' videoSrc='/how-it-works/vid4img.mp4'/>
                        
                    </div>


                </div>

            </div>

        </>
    )
}

export default WorkSite