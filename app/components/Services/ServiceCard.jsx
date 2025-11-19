
import React from "react";

const ServiceCard = ({ data }) => {
  return (
    <div
      className="bg-[#0b253b] p-6 rounded-xl shadow-2xl shadow-teal-900/50
                 border border-[#45B7BA]/20 transition-all duration-300
                 hover:scale-[1.03] hover:border-[#45B7BA] flex flex-col h-full"
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3 text-[#45B7BA]">{data.icon}</span>
        <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-normal">
          {data.title}
        </h3>
      </div>

      <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 flex-1">
        {data.details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#45B7BA] mr-2 mt-[2px]">✓</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      <p className="text-[#45B7BA] text-base md:text-lg font-extrabold pt-4 border-t border-white/10">
        STARTS FROM {data.price}
      </p>
    </div>
  );
};

export default ServiceCard;

