
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ data }) => {
  return (
    <div
      className="bg-[#0b253b] p-6 rounded-xl shadow-2xl shadow-teal-900/50
                 border border-[#45B7BA]/20 transition-all duration-300
                 hover:scale-[1.03] hover:border-[#45B7BA] flex flex-col h-full"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 mr-3 relative flex-shrink-0">
          <Image
            src={data.icon}
            alt={data.title}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider">
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

      <div className="text-center">
                <Link 
                  href={`/services/${data.id}`}
                  className="inline-flex items-center text-[#45B7BA] font-medium group"
                >
                  READ MORE
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
              </div>
    </div>
  );
};

export default ServiceCard;

