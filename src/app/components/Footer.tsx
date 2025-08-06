import Image from 'next/image';

const Footer = () => {
  return (
  <footer className="relative bg-white pt-32">
       <div
      className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1100px] bg-blue-700 bg-[url('/your-bg-image.jpg')] bg-cover bg-center rounded-2xl text-white p-10 flex flex-col lg:flex-row items-center justify-between shadow-xl z-10"
    >
      {/* Left: Image */}
      <div className="text-center lg:text-left flex-1">
        <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-snug">
          Ready To Organize Your <br /> Photos In A Smarter Way?
        </h2>
        <p className="text-sm text-blue-100 mb-4">
          Start sorting and sharing with ease — all available in one place.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition text-sm">
          Get Started Free
        </button>
      </div>
        <div className="relative w-50 h-50 lg:w-40 lg:h-40 mb-6 lg:mb-0 lg:mr-8 flex-shrink-0">
        <Image
          src="/Footer img.png" 
          alt="Organize"
          fill
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
