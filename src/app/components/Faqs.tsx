'use client'
import Image from "next/image"
import plus from "@/../public/plus.svg"
import minus from "@/../public/minus.svg"
import { useState } from "react"

type FaqsProps = {
    question: string;
    answer: string;
};

const Faqs: React.FC<FaqsProps> = ({ question, answer }) => {
    const [openFaq, setOpenFaq] = useState(false);

    const FaqHandler = () => {
        setOpenFaq((prev) => !prev);
    };

    return (
        <div
            onClick={FaqHandler}
            className={`lg:py-6 lg:px-5 px-4 py-3.5 flex flex-col gap-4 max-w-[480px] transition-all duration-300 cursor-pointer 
            ${openFaq
                ? "border-t-4 border-t-primary rounded-tr-sm rounded-tl-sm"
                : "border border-y-[rgba(30,58,138,0.2)]"} 
            shadow-[0_1_12px_rgba(85,142,212,0.05)]`}
        >
            <div className="flex justify-between relative items-center">
                <p className="text-xl text-black">{question}</p>
                <Image
                    src={plus}
                    alt="plus icon"
                    width={21}
                    height={21}
                    className={`transition-all absolute right-0 top-1 duration-300 ${openFaq ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
                />
                <Image
                    src={minus}
                    alt="minus icon"
                    width={21}
                    height={21}
                    className={`transition-all duration-300 ${openFaq ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                />
            </div>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out 
                ${openFaq ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
                <p className="text-lg text-left text-black">{answer}</p>
            </div>
        </div>
    );
};

export default Faqs;
