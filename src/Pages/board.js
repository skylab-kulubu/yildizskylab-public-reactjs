import React from "react";
import { boardMembers } from "../Data/boardData";
import BoardMember from "../Components/boardMember";

const BoardPage = () => {
  return (
    <section
      className="w-screen scroll-mt-32 lg:pt-36 bg-customDarkPurple"
      id="board-members"
    >
      <div className="w-screen flex justify-center md:mt-10 mb-24 tracking-widest mt-12">
        <h2 className="text-customAccent text-3xl lg:text-5xl">
          YÖNETİM KURULUMUZ
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mx-10  gap-6 sm:gap-8 md:gap-12 lg:gap-32">
        {boardMembers.map((member, index) => (
          <BoardMember key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default BoardPage;
