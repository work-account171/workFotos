
import Image from "next/image"
import dashboard from "@/../public/how-it-works/work2.svg"
import PointService from "./pointsService"
import point1 from "@/../public/how-it-works/point-1.svg"
import point2 from "@/../public/how-it-works/point-2.svg"
import point3 from "@/../public/how-it-works/point-3.svg"
import point4 from "@/../public/how-it-works/point-4.svg"
import point5 from "@/../public/how-it-works/point-5.svg"
function Everything() {
    return (
        <>
            <div className=" py-11 md:py-16 lg:py-[100px] text-center bg-[url('/bg2.svg')]  bg-cover bg-center bg-no-repeat">
                <div className="w-[87%] max-w-[1240px] flex flex-col lg:gap-16 md:gap-12 gap-5  mx-auto">
                    <div className="flex flex-col mx-auto max-w-[854px] items-center md:gap-6 gap-4 text-white font-bold relative">
                        <p className=" w-fit lg:text-5xl md:text-4xl text-[28px]/8">
                            Everything You Need, One Place
                        </p>

                        <p className=" max-w-[656px] lg:text-xl md:text-lg text-[16px] text-center font-normal  ">
                            Manage your photos, documents, reports, and client-facing portfolio from
                            a single dashboard.
                        </p>
                    </div>
                    <Image src={dashboard} width={400} height={400} alt="dashboard image" className="w-full lg:h-[420px] md:h-[322px] h-[198px]"/>
                    <div className="points flex flex-wrap md:justify-center lg:gap-6 gap-4 items-center">
                        <PointService imgSrc={point1} text="Jobsite photo organization"/>
                        <PointService imgSrc={point2} text="Team & Task Tracking"/>
                        <PointService imgSrc={point3} text="Estimate & Invoice"/>
                        <PointService imgSrc={point4} text="Custom Branding"/>
                        <PointService imgSrc={point5} text="Portfolio & Share Links"/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Everything