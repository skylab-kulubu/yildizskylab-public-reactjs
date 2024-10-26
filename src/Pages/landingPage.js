import React from "react";
import LandingBackgroundImage from "../Assets/Images/landing-page.png";
import SkyLabLogo from "../Assets/Images/skylab-logo-pink.png";

const LandingPage = () => {
  return (
    <div className="h-screen snap-start pt-36 bg-cover bg-[0%] flex self-stretch justify-center items-center overflow-hidden relative">
      <img
        src={LandingBackgroundImage}
        className="absolute top-0 bottom-0 h-screen min-w-[1024px] w-full pointer-events-none"
        alt="landing"
      ></img>
      <div className="flex flex-row">
        <div className="flex flex-col text-center items-center justify-center mb-24 lg:-mb-28 space-y-5 w-[calc(100vw-5vw)]">
          <span className="text-[2.8rem] lg:text-[4rem] tracking-[0.2em] lg:tracking-wider -mr-3 leading-[3.4rem] lg:leading-none z-10 text-customLightPink">
            YILDIZ TEKNİK ÜNİVERSİTESİ
          </span>
          <span className="text-[4.4rem] lg:text-[9rem] leading-none tracking-[0.3em] z-10 -mr-6 text-center text-customDarkPurple">
            SKY LAB
          </span>
          <img
            src={SkyLabLogo}
            className="absolute h-20 z-10 flex md:hidden bottom-24"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
