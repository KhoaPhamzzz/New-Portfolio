import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  // Apply animated border only to the selected button
  const buttonStyles = isSelected
    ? "text-white border-color-transition"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
