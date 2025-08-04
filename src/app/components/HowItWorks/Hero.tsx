import React from 'react'
import Button from '../Button'

function Hero() {
    return (
        <>
            <div className="h-screen flex justify-start items-center bg-[url('/hero2-bg.svg')] bg-cover bg-center bg-no-repeat">
                <div className='md:w-[87%] w-[90%] m-auto max-w-[1240px]'>
                    <div className="flex flex-col lg:w-1/2 sm:w-4/5 w-full md:gap-14 sm:gap-10 gap-7">
                    <div className="flex flex-col items-start md:gap-6 gap-4 relative">
                        <p className=" self-stretch mt-[-1.00px]  font-bold text-transparent md:text-5xl sm:text-4xl text-[28px] tracking-[0] leading-[normal]">
                            <span className="text-white font-desktop-heading-h1 [font-style:var(--desktop-heading-h1-font-style)] font-[number:var(--desktop-heading-h1-font-weight)] tracking-[var(--desktop-heading-h1-letter-spacing)] leading-[var(--desktop-heading-h1-line-height)] text-[length:var(--desktop-heading-h1-font-size)]">
                                How WorkFotos{" "}
                            </span>

                            <span className="text-blue-600">Powers Your Projects</span>
                        </p>

                        <p className="relative max-w-[608px] text-white md:text-xl sm:text-[16px] text-[14px] ">
                            From jobsite to showcase see how everything connects to save you time,
                            impress clients, and grow your business.
                        </p>
                    </div>
                    <Button text="Start free trial" variant='primary'  href="/contact" target="_blank" />
                </div>
                </div>             
            </div>
        </>
    )
}

export default Hero