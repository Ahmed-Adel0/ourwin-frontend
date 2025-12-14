import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * ServiceCardNew Component
 *
 * Redesigned service card matching the dark theme design.
 * Features: Icon, title, BOOK A CALL CTA, description, starting price.
 *
 * @param {Object} props
 * @param {Object} props.data - Service data object
 */
const ServiceCardNew = ({ data }) => {
  return (
    <div className="bg-[#0b253b] rounded-xl p-6 md:p-8 flex flex-col h-full border border-[#45B7BA]/20 hover:border-[#45B7BA] transition-all duration-300 shadow-2xl shadow-teal-900/50">
      {/* Header: Icon + Title + BOOK A CALL */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
            <Image
              src={data.icon}
              alt={data.title}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-wider truncate">
            {data.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-400 mb-6 flex-1 leading-relaxed">
        {data.description || (
          <>
            {data.details?.slice(0, 3).join(", ")}
            {data.details?.length > 3 && " and more..."}
          </>
        )}
      </p>
    </div>
  );
};

export default ServiceCardNew;
