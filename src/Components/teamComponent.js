import React from "react";
import TeamsData from "../Data/teamsData";

const TeamComponent = ({
  teamSelect,
  teamIndex,
  setTeamIndex,
  setSelectedTeam,
  handleScroll,
}) => {
  return (
    <div className="flex flex-wrap justify-center items-center px-12 snap-x snap-mandatory">
      {TeamsData[teamSelect].map((team, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center space-y-4 min-w-[150px] snap-center"
        >
          <div
            onClick={(e) => {
              setTeamIndex(index);
              setSelectedTeam(team.name);
              handleScroll(e);
            }}
            className={`w-24 h-24 flex justify-center items-center ring-customAccent ${
              teamIndex === index ? "ring-8" : ""
            } p-2 cursor-pointer bg-customLightPink overflow-hidden rounded-[50%]`}
          >
            <img
              src={team.logo}
              width={75}
              height={75}
              className="object-cover rounded-full"
              alt="logo"
            />
          </div>
          <div className="text-customLightPink text-lg tracking-wide">
            {team.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamComponent;
