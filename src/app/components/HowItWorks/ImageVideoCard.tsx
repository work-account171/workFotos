import Image, { StaticImageData } from "next/image"
import React from "react"
type ImageVideoProps = {
    imageSrc: StaticImageData,
    btnText: string,
    videoSrc:string

}
const ImageVideoCard: React.FC<ImageVideoProps> = ({ imageSrc, btnText,videoSrc }) => {
    return (
        <>
            <div className="rounded-2xl relative group lg:w-[292px] lg:h-[400px] w-[222px] h-[304px] shrink-0">
                <Image
                    src={imageSrc}
                    alt="services Images"
                    width={292}
                    height={400}
                    className="w-full h-full object-cover  rounded-2xl z-10 group-hover:hidden"
                />
                <video src={videoSrc} muted autoPlay loop className="w-full h-full object-cover hidden group-hover:block rounded-xl"/>
                <div className="bg-white rounded-full lg:py-3 md:py-2.5 md:px-3 px-3 py-2.5 lg:px-4 text-center font-bold text-black absolute bottom-14 md:bottom-16 self-center left-[50%] min-w-max translate-x-[-50%] w-fit group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <p className="lg:text-lg text-sm">{btnText}</p>
                </div>
            </div>


        </>
    )
}

export default ImageVideoCard