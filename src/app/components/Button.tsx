import React from "react"
import Image from "next/image";
import linkWhite from "@/../public/linkWhite.svg"
type ButtonProps={
    text:string;
    variant:'primary'|'secondary';
}

const Button:React.FC<ButtonProps>=({text,variant})=>{
    const styles={
        primary:{
            backgroundColor:'#1D4ED8',
            color:'white'
        },
        secondary:{
            backgroundColor:'white',
            color:'black'
        },
       
    };
    return(
        <button className=" text-center justify-start font-semibold px-5 py-4 bg-blue-700 rounded-2xl shadow-[0px_2px_15px_0px_rgba(0,0,0,0.20)] outline-2 outline-offset-[-2px] outline-blue-600 inline-flex  items-center gap-2.5" style={variant=="primary"?styles.primary:styles.secondary}>
            {text}
            <Image src={linkWhite} alt="white arrow" width={10} height={10} className="w-5 h-5 hover:rotate-45"/>
            </button>
    )


}


export default Button