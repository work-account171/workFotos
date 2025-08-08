import Faqs from "../Faqs"

function FaqsContent() {
  return (
    <div className="flex flex-col lg:gap-6 md:gap-5 gap-4 gap w-full">
        <Faqs question="How is WorkFotos different from Google Drive or Dropbox?" answer="Yes, these bundles are well-suited for nonprofits and government organizations."/>
        <Faqs question="Can I share project photos with clients?" answer="Yes, each project can generate a unique shareable link for clients to view photos and updates securely."/>
        <Faqs question="Is WorkFotos mobile-friendly?" answer="Absolutely. Easily upload photos, manage tasks, and communicate with your team right from your phone."/>
        <Faqs question="Do I need technical skills to use WorkFotos?" answer="Not at all. The platform is designed to be simple, intuitive, and ready for use—no training required."/>

    </div>
  )
}

export default FaqsContent