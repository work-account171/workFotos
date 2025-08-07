import React from 'react'
import Hero from '../components/HowItWorks/Hero'
import StartSmarter from '../components/HowItWorks/StartSmarter'
import Everything from '../components/HowItWorks/Everything'
import WorkSite from '../components/HowItWorks/WorkSite'
import FaqsSection from '../components/FaqsSection'
import faqImg from "@/../public/how-it-works/faq_img.svg"

function page() {
  return (
    <>
    <Hero/>
    <StartSmarter/>
    <Everything/>
    <WorkSite/>
    <FaqsSection imgSrc={faqImg}/>
    </>
  )
}

export default page