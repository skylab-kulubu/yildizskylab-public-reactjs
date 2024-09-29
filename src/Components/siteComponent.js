import React from "react";

const SiteComponent = ({ site }) => {
  return (
    <a
      href={site.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-[15px] w-80 max-w-xs bg-gradient-to-b from-[rgba(212,184,249,0.42)] to-[rgba(234,218,255,0.41)] p-5 text-center overflow-hidden transition-transform duration-150 ease-in-out hover:scale-105 justify-center items-center"
    >
      <img src={site.logo} alt={site.name} className="w-24 h-24 mb-4" />
      <p
        className="text-customLightPink text-[24px] font-semibold"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        {site.name}
      </p>
    </a>
  );
};

export default SiteComponent;
