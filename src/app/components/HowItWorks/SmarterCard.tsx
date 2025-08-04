import Image, { StaticImageData } from "next/image"

type CardProps = {
    title: string,
    desc: string,
    imgSrc: StaticImageData

}

const SmarterCard: React.FC<CardProps> = ({ title, desc, imgSrc }) => {
    return (
        <>
            <div className="sm:rounded-3xl rounded-xl lg:py-11 py-4 px-3 lg:px-7 md:py-[17px] md:px-[22px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.04)] sm:w-full w-[60%]  font-inter border border-white hover:border-primary hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]  flex flex-col justify-center items-start lg:gap-5 md:gap-3.5 gap-3 " >
                <div className="flex sm:gap-2.5 gap-1.5 justify-center items-center">
                    <Image src={imgSrc} alt="crad1 img" className="lg:w-[28px] lg:h-[28px] md:w-[22px] md:h-[22px] w-[20px] h-[20px]" width={28} height={28} />
                    <h2 className="text-[#1e3a8a] lg:text-xl md:text-[16px] text-sm  font-bold ">{title}</h2>
                </div>
                <p className="lg:text-[16px] md:text-sm text-xs text-black ">{desc}</p>

            </div>


        </>
    )
}

export default SmarterCard