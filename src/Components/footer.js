import React from "react";
import { FaDiscord, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import skylablogo from "../Assets/Images/skylab-logo-lg-c.png";
import ytülogo from "../Assets/Images/yildiz-logo-lg.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 sm:py-20 gap-6 w-full px-6 sm:px-20 bg-customDarkPurple">
      {/* Footer Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 md:gap-0">
        <img alt="ytu-logo" src={ytülogo} className="h-12 w-auto mb-4 sm:mb-0 hidden lg:flex" />
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/ytuskylab">
            <FaInstagram className="text-white text-[24px] sm:text-[30px]" />
          </a>
          <a href="https://www.youtube.com/channel/UCF_qBKpUnM3X_C3L-gLEO4A">
            <FaYoutube className="text-white text-[24px] sm:text-[30px]" />
          </a>
          <a href="https://www.linkedin.com/company/ytuskylab/">
            <FaLinkedin className="text-white text-[24px] sm:text-[30px]" />
          </a>
          <a href="https://discord.com/invite/6jFBjH8y63">
            <FaDiscord className="text-white text-[24px] sm:text-[30px]" />
          </a>
          <a href="https://x.com/skylabkulubu">
            <FaXTwitter className="text-white text-[24px] sm:text-[30px]" />
          </a>
        </div>
        <img alt="sky-lab-logo" src={skylablogo} className="h-12 w-auto mt-4 sm:mt-0 " />
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col justify-center items-center text-white text-[12px] sm:text-[13px]">
        <p className="mt-1">2025</p>
      </div>
    </div>
  );
};

export default Footer;
