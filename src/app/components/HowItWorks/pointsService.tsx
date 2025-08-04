import React from 'react'
import Image,{StaticImageData} from 'next/image'
type PointProps={
    imgSrc:StaticImageData,
    text:string
}
const  PointService:React.FC<PointProps>=({imgSrc,text})=> {
  return (
    <>
    <div className="flex justify-center items-center bg-[rgba(255, 255, 255, 0.2)] rounded-xl lg:py-4 lg:px-4 md:px-[9px] md:py-2.5 py-[9px] px-6 lg:gap-3 gap-1.5">
      <Image src={imgSrc} width={44} height={44} alt="point symbol" />
      <p className="lg:text-2xl text-sm font-medium text-white">{text}</p>
    </div>
    
    
    </>
  )
}

export default PointService