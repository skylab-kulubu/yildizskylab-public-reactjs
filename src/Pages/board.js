import React from "react";
import { boardMembers } from "../Data/boardData";
import BoardMember from "../Components/boardMember";

const BoardPage = () => {
  return (
    <section
      className="flex flex-col gap-20 items-center justify-center w-screen scroll-mt-28 bg-customDarkPurple"
      id="board-members"
    >
      <div className="w-screen flex justify-center tracking-widest">
        <h2 className="text-customAccent text-3xl lg:text-5xl">
          YÖNETİM KURULUMUZ
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-10 sm:gap-8 md:gap-12 lg:gap-20 2xl:max-w-[1800px] justify-self-center">
        {boardMembers.map((member, index) => (
          <BoardMember key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default BoardPage;
