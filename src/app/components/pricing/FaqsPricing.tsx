import Faqs from "../Faqs"

function FaqsPricing() {
  return (
    <div className="flex flex-col lg:gap-6 md:gap-5 gap-4 gap w-full">
        <Faqs question="Whats the difference between monthly and yearly plans?" answer="Annual plans save you money 💰 and bill once a year. Monthly gives you flexibility with pay-as-you-go. On annual plans, you’re billed upfront based on your team size. Add users anytime (prorated), and remove users without losing their seat—you can reuse it later."/>
        <Faqs question="Will I lose my data if I cancel Pro?" answer="No. Your data is safe, but Pro features will be paused."/>
        <Faqs question="Can I collaborate with my team?" answer="Yes. Pro is built for teams with multi-user support."/>
        <Faqs question="Do I need a credit card to start?" answer="Only for starting a free trial of a Pro plan."/>

    </div>
  )
}

export default FaqsPricing