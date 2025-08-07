import Image from 'next/image';
import Button from './Button';

const Footer = () => {
  return (
  <footer className="relative bg-white pt-32">
       <div
      className="absolute -top-5 left-1/2 transform  -translate-x-1/2 w-[87%] px-[54px]  max-w-[1100px] border bg-center bg-fixed bg-no-repeat bg-[url('/footerBg.svg')]  rounded-2xl text-white  flex flex-col lg:flex-row items-start justify-between shadow-lg z-10"
    >
      {/* Left: Image */}
      <div className="text-center py-[48px] lg:text-left flex-1">
        <h2 className="md:text-[36px] text-md lg:text-4xl font-bold mb-3 leading-snug">
          Ready To Organize Your <br /> Photos In A Smarter Way?
        </h2>
        <p className="text-sm text-blue-100 mb-4">
          Start sorting and sharing with ease — all available in one place.
        </p>
          <Button text="Get Started Free" variant="secondary" href="/contact"  />

      </div>
        <div className="relative w-[35%] pt-6 h-auto ">
        <Image
          src="/Footer img.png" 
          alt="Organize"
          width={333}
          height={313}
          className="object-cover shadow-lg"
          priority
        />
      </div>
    </div>
      <div className="max-w-[1240px] mx-auto w-[87%] grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-t pt-24 mt-12">
        <div className="col-span-1">
          <Image src="/Black logo.png" alt="Logo" width={150} height={40} />
          <p className="text-black text-sm mt-4">
            WorkFotos helps visual pros and service teams document, organize, and share work effortlessly.
          </p>
          <div className="flex space-x-4 mt-4">
            <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
            <Image src="/icons/snapchat.svg" alt="Snapchat" width={20} height={20} />
            <Image src="/icons/x.svg" alt="Twitter/X" width={20} height={20} />
            <Image src="/icons/youtube.svg" alt="YouTube" width={20} height={20} />
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
            <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
          </div>
        </div>      
        <div>
          <h4 className="font-semibold mb-3 text-black">Resources</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>How It Works</li>
            <li>Our Story</li>
          </ul>
        </div>

    
        <div>
          <h4 className="font-semibold mb-3 text-black">Legal</h4>
          <ul className="text-sm text-black space-y-2">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

  
        <div>
          <h4 className="font-semibold mb-3 text-black">Stay in the loop</h4>
          <p className="text-sm text-black mb-3">Tips & updates , straight to your inbox.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="rounded-l-full px-4 py-2 border border-gray-300 text-sm w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-r-full text-sm hover:bg-blue-700 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      
      <div className="text-center text-xs text-black py-6 border-t">
        ©2025 WorkFotos | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
