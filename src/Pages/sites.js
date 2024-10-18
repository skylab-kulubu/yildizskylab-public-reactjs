import React from "react";
import SiteComponent from "../Components/siteComponent";
import sitesData from "../Data/sitesData";

const SitesPage = () => {
  return (
    <section className="w-screen lg:pt-36 bg-customDarkPurple " id="sites">
      {/* Header */}
      <div className="w-screen flex justify-center md:mt-10 mb-24 tracking-widest mt-12">
        <h2 className="text-customAccent text-3xl lg:text-5xl">SİTELER</h2>
      </div>

      {/* Sites Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-2 sm:gap-8 md:gap-12 lg:gap-32 2xl:max-w-[2000px] justify-self-center relative z-20">
        {sitesData.map((site, index) => (
          <SiteComponent key={index} site={site} />
        ))}
      </div>
    </section>
  );
};

export default SitesPage;
