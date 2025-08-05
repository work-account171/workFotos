'use client'
import React, { useState } from "react"
import Image from "next/image";
import Link from "next/link";
import linkWhite from "@/../public/linkWhite.svg"
import linkBlack from "@/../public/linkBlack.svg"

type LinkProps = {
    text: string;
    variant: 'primary' | 'secondary';
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    rel?: string;
}

const Button: React.FC<LinkProps> = ({ text, variant, href, target = '_self', rel }) => {
    const [isClicked, setIsClicked] = useState(false);
    
    const styles = {
        primary: {
            backgroundColor: '#1D4ED8',
            color: 'white'
        },
        secondary: {
            backgroundColor: 'white',
            color: 'black'
        },
    };
    
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    
    return (
        <Link 
            href={href}
            target={target}
            rel={rel}
            className="text-center justify-start sm:text-[16px] text-[14px]   font-semibold w-fit md:px-5 md:py-4 py-3 px-4   bg-blue-700 md:rounded-2xl sm:rounded-xl rounded-lg shadow-[0px_2px_15px_0px_rgba(0,0,0,0.20)] outline-2 outline-offset-[-2px] outline-blue-600 hover:[&>img]:rotate-45 inline-flex items-center gap-2.5" 
            style={variant === "primary" ? styles.primary : styles.secondary} 
            onClick={handleClick}
        >
            {text}
            {
                variant === "primary" ? (
                    <Image 
                        src={linkWhite} 
                        alt="white arrow" 
                        width={10} 
                        height={10} 
                        className={`w-5 h-5 ${isClicked ? 'rotate-45' : ''}`}
                    />
                ) : (
                    <Image 
                        src={linkBlack} 
                        alt="black arrow" 
                        width={10} 
                        height={10} 
                        className={`w-5 h-5 ${isClicked ? 'rotate-45' : ''}`}
                    />
                )
            }
        </Link>
    )
}

export default Button