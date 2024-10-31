import React from "react";
import SiteComponent from "../Components/siteComponent";
import sitesData from "../Data/sitesData";

const SitesPage = () => {
  return (
    <section
      className="flex flex-col gap-20 items-center justify-center w-screen scroll-mt-40 bg-customDarkPurple "
      id="sites"
    >
      {/* Header */}
      <div className="w-screen flex justify-center tracking-widest">
        <h2 className="text-customAccent text-3xl lg:text-5xl">SİTELER</h2>
      </div>

      {/* Sites Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-10 sm:gap-8 md:gap-12 lg:gap-20 2xl:max-w-[1800px] justify-self-center relative z-20">
        {sitesData.map((site, index) => (
          <SiteComponent key={index} site={site} />
        ))}
      </div>
    </section>
  );
};

export default SitesPage;
