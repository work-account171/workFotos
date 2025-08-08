import Image from "next/image";
import Button from "./Button";
import Footerbtn from "./Footerbtn";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative bg-white pt-20 lg:mt-25 mt-85 md:mt-40 overflow-visible shadow-[0px_50px_50px_12px_#00000012]"
     
    >
      {/* CTA Section */}
      <div className="absolute lg:-top-45 -top-90 md:-top-50 left-1/2 transform -translate-x-1/2 w-[87%] px-[24px] sm:px-[54px] max-w-[1100px] border bg-center  lg:bg-fixed  bg-no-repeat bg-[url('/footerBg.png')] lg:rounde rounded-xl  text-white flex flex-col lg:flex-row md:flex-row md:justify-between items-start justify-between z-10 bg-cover ">
        {/* Left: Text */}
        <div className="text-center py-8 sm:py-[48px] lg:text-left flex-1">
          <h2 className="text-lg sm:text-xl md:text-[24px] lg:text-4xl font-bold mb-3 leading-snug">
            Ready To Organize Your <br /> Photos In A Smarter Way?
          </h2>
          <p className="text-sm text-blue-100 mb-4">
            Start sorting and sharing with ease — all available in one place.
          </p>
          <Button text="Get Started Free" variant="secondary" href="/contact" />
        </div>

        {/* Right: CTA Image (bigger on mobile) */}
        <div className="relative w-full sm:w-[90%] md:w-[53%] pt-6 h-auto flex justify-center sm:justify-end sm:object-contain">
          <Image
            src="/Footer img.png"
            alt="Organize"
            width={250}
            height={230}
            className="object-cover sm:w-[333px] sm:h-[313px] w-[280px] h-[260px] shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-[1240px] mx-auto w-[87%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 sm:gap-[100px] pb-10 border-t pt-24 lg:mt-12">
        {/* Column 1: Logo & Social */}
        <div>
          <Link href="/">
            <Image
              src="/Black logo.png"
              alt="Logo"
              width={150}
              height={40}
              className="cursor-pointer"
            />
          </Link>

          <p className="text-black text-sm mt-4">
            WorkFotos helps visual pros and service teams document, organize,
            and share work effortlessly.
          </p>
          <div className="flex space-x-2 lg:mt-4 lg:mb-6 mb-2 mt-4 md:mb-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/lucide_instagram.png"
                alt="Instagram"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/foundation_social-snapchat.png"
                alt="Snapchat"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/mingcute_social-x-line.png"
                alt="Twitter/X"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/simple-line-icons_social-youtube.png"
                alt="YouTube"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/typcn_social-linkedin.png"
                alt="LinkedIn"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/typcn_social-facebook.png"
                alt="Facebook"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Column 2: Resources & Legal */}
        {/* Column 2: Resources & Legal */}
        <div className="flex flex-row sm:flex-row gap-20 sm:gap-[71px]">
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3 text-black">Resources</h4>
            <ul className="text-sm text-black space-y-2">
              <li>
                <a
                  href="/features"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/our-story"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 text-black">Legal</h4>
            <ul className="text-sm text-black space-y-2">
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div className=" mt-0 sm:mt-0 md:mt-0">
          <h4 className="font-semibold mb-3 text-black">Stay in the loop</h4>
          <p className="text-sm text-black mb-3">
            Tips & updates, straight to your inbox.
          </p>
          <form className="flex items-center w-full max-w-[400px] h-[48px] rounded-full overflow-hidden border border-gray-300 bg-white">
            <input
              type="email"
              placeholder=""
              className="w-full h-full px-4 text-[16px] text-gray-800 focus:outline-none"
            />
            <Footerbtn text="Join" variant="primary" href="#" />
          </form>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-black py-[16px] border-t border-[#1D4ED81A]">
        ©2025 WorkFotos | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
