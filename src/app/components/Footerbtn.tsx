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

const Footerbtn: React.FC<LinkProps> = ({ text, variant, href, target = '_self', rel }) => {
    const [isClicked, setIsClicked] = useState(false);
    
    const styles = {
        primary: {
            backgroundColor: '#1D4ED8',
            color: 'white',
            padding: '14px 20px',
            fontSize: '16px',
        },
        secondary: {
            backgroundColor: 'white',
            color: 'black',
            padding: '14px 20px',
            fontSize: '16px',
        },
    };

    const currentStyle = variant === "primary" ? styles.primary : styles.secondary;
    
    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <Link 
            href={href}
            target={target}
            rel={rel}
            onClick={handleClick}
            style={currentStyle}
            className={`
                inline-flex items-center gap-2.5 justify-center
                font-semibold rounded-r-full text-center
                hover:shadow-[0_2px_15px_rgba(0,0,0,0.2)]
                bg-primary text-white transition-all duration-300
                h-[48px] min-w-[110px]
                hover:[&>img]:rotate-45
            `}
        >
            {text}
            <Image 
                src={variant === "primary" ? linkWhite : linkBlack} 
                alt="arrow"
                width={20}
                height={20}
                className={`transition-transform duration-300 ease-in-out ${isClicked ? 'rotate-45' : ''}`}
            />
        </Link>
    )
}

export default Footerbtn;
