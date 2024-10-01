import React from 'react';
import TeamsData from '../Data/teamsData';

const TeamComponent = ({
  teamSelect,
  teamIndex,
  setTeamIndex,
  setSelectedTeam,
  handleScroll
}) => {
  return (
    <div className='flex flex-row justify-center lg:justify-between items-center px-24 overflow-x-scroll snap-x snap-mandatory'>
      {TeamsData[teamSelect].map((team, index) => (
        <div
          key={index}
          className='flex flex-col justify-center lg:justify-between items-center space-y-10 min-w-full lg:min-w-[200px] snap-center'
        >
          <div
            onClick={e => {
              setTeamIndex(index);
              setSelectedTeam(team.name);
              handleScroll(e);
            }}
            className={`w-16 lg:min-w-[5.2rem] h-16 lg:min-h-[5.2rem] flex justify-center items-center ring-customAccent ${
              teamIndex === index ? 'ring-8' : ''
            } p-2 cursor-pointer bg-customLightPink overflow-hidden rounded-[50%]`}
          >
            <img
              onClick={() => ''}
              src={team.logo}
              width={75}
              height={75}
              className='object-cover rounded-full'
              alt='logo'
            />
          </div>
          <div className='text-customLightPink mr-10 h-0 text-xs lg:text-lg text-end w-0 -rotate-45 tracking-wide '>
            {team.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamComponent;