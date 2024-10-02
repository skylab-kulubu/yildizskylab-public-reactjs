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
      className="h-screen snap-start relative pt-24 lg:pt-36 bg-customDarkPurple white"
      id="teams"
    >
      <div className="text-customLightPink text-xl tracking-wide lg:text-2xl my-10 lg:my-16 flex justify-center">
        <div className="flex ml-3 lg:ml-0 justify-between w-auto items-center">
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

      <div className="w-screen text-sm lg:text-md flex mt-10 lg:mt-20 justify-center">
        <div className="font-inter w-11/12 lg:w-1/2 text-center text-customLightPink tracking-widest text-lg hidden md:block">
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
