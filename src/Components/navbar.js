import React, { useState, useEffect } from "react";
import skylablogo from "../Assets/Images/skylab-logo-pink.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Sets scroll state for style purposes in navbar to prevent transparent navbar background when scrolled. Sets it to the background colour when scrolled.
    const handleScroll = () => {
      if (window.scrollY > 750) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToElement = (element) => {
    // This code scrolls to desired element using "ID", More Info : https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    const scrollingElement = document.getElementById(`${element}`);
    if (scrollingElement) {
      scrollingElement.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      return;
    }
  };

  return (
    <div
      className={`fixed flex flex-row justify-between items-center px-3 w-full h-[100px] top-0 left-0 z-50 transition-colors duration-150 text-xl tracking-[0.10em]" ${
        isScrolled ? " bg-customDarkPurple" : "bg-transparent  "
      } hidden md:flex`}
    >
      <div
        className=" flex items-center flex-row space-x-2 lg:space-x-6 ml-10 cursor-pointer"
        onClick={() => scrollToElement("App")}
      >
        <img alt="logo" src={skylablogo} className="w-9 h-9 lg:w-10 lg:h-10" />
        <div className="hidden lg:flex w-2 h-2 mb-[0.4rem] rounded-full bg-customLightPink"></div>
        <h1 className="font-bebasNeue text-3xl lg:text-5xl tracking-[0.3em] font-light text-customLightPink ">
          SKY LAB
        </h1>
      </div>

      <div className="hidden md:flex flex-row items-center gap-5 mr-10 p-2 text-shadow-md">
        <button
          onClick={() => scrollToElement("App")}
          className="text-[#eadaff] hover:text-[#27a68e] tracking-[0.10em] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl"
        >
          ANA SAYFA
        </button>
        <button
          onClick={() => scrollToElement("description")}
          className="text-[#eadaff] hover:text-[#27a68e] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl tracking-[0.10em]"
        >
          HAKKIMIZDA
        </button>
        <button
          onClick={() => scrollToElement("teams")}
          className="text-[#eadaff] hover:text-[#27a68e] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl tracking-[0.10em]"
        >
          EKİPLER
        </button>
        {/* 
        <button
          onClick={() => scrollToElement("news")}
          className="text-[#eadaff] hover:text-[#27a68e] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl tracking-[0.10em]"
        >
          HABERLER
        </button>
        */}

        <button
          onClick={() => scrollToElement("sites")}
          className="text-[#eadaff] hover:text-[#27a68e] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl tracking-[0.10em]"
        >
          SİTELER
        </button>
        <button
          onClick={() => scrollToElement("board-members")}
          className="text-[#eadaff] hover:text-[#27a68e] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl tracking-[0.10em]"
        >
          YÖNETİM KURULU
        </button>
      </div>
    </div>
  );
};

export default Navbar;
