
import React from "react";

const TeamMembers = ({ count }) => {
  const members = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="flex items-center -space-x-2">
      {members.slice(0, 5).map((memberIndex) => (
        <div
          key={memberIndex}
          className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#0b253b] flex items-center justify-center text-xs font-bold text-white shadow-lg"
          style={{ zIndex: members.length - memberIndex }}
        >
          {memberIndex + 1}
        </div>
      ))}

      {count > 5 && (
        <div className="w-8 h-8 rounded-full bg-[#45B7BA] border-2 border-[#0b253b] flex items-center justify-center text-xs font-bold text-white shadow-lg">
          +{count - 5}
        </div>
      )}
    </div>
  );
};

export default TeamMembers;

