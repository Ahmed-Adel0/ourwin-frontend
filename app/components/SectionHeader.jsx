import React from "react";

const SectionHeader = ({ title, className = "", rightNode }) => {
  return (
    <div
      className={`bg-gradient-to-r from-[#003349] to-[#006781] py-6 md:py-8 px-6 rounded-2xl text-white mb-12 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex items-center justify-between ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
        {title}
      </h2>
      {rightNode && <div className="ml-4 flex-shrink-0">{rightNode}</div>}
    </div>
  );
};

export default SectionHeader;
