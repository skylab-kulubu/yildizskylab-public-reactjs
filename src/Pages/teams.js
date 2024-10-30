import React, { useState } from "react";
import TeamComponent from "../Components/teamComponent";
import TeamsData from "../Data/teamsData";
import MobileTeamComponent from "../Components/mobileTeamComponent";

const TeamsPage = () => {
  const [teamSelect, setTeamSelect] = useState("arge");
  const [teamIndex, setTeamIndex] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState("algolab");

  const handleScroll = () => {
    // Scroll handling logic here
  };

  return (
    <section
      className=" flex flex-col scroll-mt-60 justify-center items-center box-border gap-4 relative white"
      id="teams"
    >
      <div className="w-screen flex justify-center tracking-widest ">
        <h2 className="text-customAccent text-3xl lg:text-5xl">EKİPLERİMİZ</h2>
      </div>
      <div className="text-customLightPink text-xl tracking-wide lg:text-2xl my-10 flex justify-center">
        <div className="flex justify-between w-auto items-center">
          <div
            onClick={() => {
              setTeamSelect("arge");
              setTeamIndex(0);
              setSelectedTeam("algolab");
              handleScroll();
            }}
            className={`px-3 pt-[0.2rem] pb-[0.1rem] cursor-pointer leading-tight ${
              teamSelect === "arge" ? "bg-customAccent" : "bg-customDarkPurple"
            } `}
          >
            ARGE EKİPLERİ
          </div>
          <div
            onClick={() => {
              setTeamSelect("social");
              setTeamIndex(0);
              setSelectedTeam("organizasyon");
              handleScroll();
            }}
            className={`px-3 pt-[0.2rem] py-[0.1rem] cursor-pointer ${
              teamSelect === "social"
                ? "bg-customAccent"
                : "bg-customDarkPurple"
            } `}
          >
            SOSYAL EKİPLER
          </div>
        </div>
      </div>

      {/* Desktop and larger screens */}
      <div className="hidden lg:block">
        <TeamComponent
          teamSelect={teamSelect}
          teamIndex={teamIndex}
          setTeamIndex={setTeamIndex}
          setSelectedTeam={setSelectedTeam}
          handleScroll={handleScroll}
        />
      </div>

      {/* Mobile screens */}
      <div className="block lg:hidden">
        <MobileTeamComponent teamSelect={teamSelect} />
      </div>

      <div className="w-screen text-sm lg:text-md flex justify-center max-[1024px]:hidden">
        <div className="px-20 font-inter tracking-widest text-base lg:text-xl lg:w-5/6 text-center text-customLightPink md:block">
          {
            TeamsData[teamSelect].find((team) => team.name === selectedTeam)
              .details
          }
        </div>
      </div>
    </section>
  );
};

export default TeamsPage;
