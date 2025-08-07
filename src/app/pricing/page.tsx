import React from 'react'
import HeroPricing from '../components/pricing/HeroPricing'
import faqImgPri from "../../../public/Faqs Pricing.png"
import FaqsSectionpricing from '../components/pricing/FaqsSectionpricing'

const page = () => {
  return (
    <div>
    <HeroPricing/>
       <FaqsSectionpricing imgSrc={faqImgPri}/>
    </div>
  )
}

export default page