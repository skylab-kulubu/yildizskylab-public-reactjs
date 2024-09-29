import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import skylablogo from "../Assets/Images/skylab-logo-pink.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      className={`fixed flex flex-row justify-between items-center px-3 w-full h-[100px] top-0 left-0 z-50 transition-colors duration-150 text-xl tracking-[0.10em]" duration-300 ${  isScrolled ? "bg-customDarkPurple" : "bg-transparent "} hidden md:flex`}
    >
      <div className=" flex items-center flex-row space-x-2 lg:space-x-6 ml-10 cursor-pointer" onClick={scrollToTop}>
        <img alt="logo" src={skylablogo} className="w-9 h-9 lg:w-10 lg:h-10" />
        <div className="hidden lg:flex w-2 h-2 mb-[0.4rem] rounded-full bg-customLightPink"></div>
        <h1 className="font-bebasNeue text-3xl lg:text-5xl tracking-[0.3em] font-light text-customLightPink ">
          SKY LAB
        </h1>
      </div>

      <div className="hidden md:flex flex-row items-center gap-5 mr-10 p-2 text-shadow-md">
        <Link
          smooth={true}
          offset={50}
          duration={500}
          className="text-[#eadaff] hover:text-[#27a68e] tracking-[0.10em] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl"
          onClick={scrollToTop}
        >
          ANA SAYFA
        </Link>
        <Link
          to="description"
          smooth={true}
          offset={50}
          duration={500}
          className="text-[#eadaff] hover:text-[#27a68e] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl tracking-[0.10em]"
        >
          HAKKIMIZDA
        </Link>
        <Link
          to="teams"
          smooth={true}
          offset={50}
          duration={500}
          className="text-[#eadaff] hover:text-[#27a68e] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl tracking-[0.10em]"
        >
          EKİPLER
        </Link>
        <Link
          to="news"
          smooth={true}
          offset={50}
          duration={500}
          className="text-[#eadaff] hover:text-[#27a68e] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl tracking-[0.10em]"
        >
          HABERLER
        </Link>
        <Link
          to="sites"
          smooth={true}
          offset={50}
          duration={500}
          className="text-[#eadaff] hover:text-[#27a68e] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl tracking-[0.10em]"
        >
          SİTELER
        </Link>
        <Link
          to="board-members"
          smooth={true}
          offset={50}
          duration={500}
          className="text-[#eadaff] hover:text-[#27a68e] px-2 py-1 cursor-pointer transition-colors duration-150 text-xl tracking-[0.10em]"
        >
          YÖNETİM KURULU
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
