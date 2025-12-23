//
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * ServiceCardNew Component
 *
 * Redesigned service card matching the dark theme design.
 * Features: Icon, title, description, Learn More button.
 *
 * @param {Object} props
 * @param {Object} props.data - Service data object
 */
const ServiceCardNew = ({ data }) => {
  const router = useRouter();

  // تحويل عنوان الخدمة إلى slug
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s*&\s*/g, "-and-")
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");
  };

  const serviceSlug = generateSlug(data.title);

  return (
    <div className="bg-[#0b253b] rounded-xl p-6 md:p-8 flex flex-col h-full border border-[#45B7BA]/20 hover:border-[#45B7BA] transition-all duration-300 shadow-2xl shadow-teal-900/50">
      {/* Header: Icon + Title */}
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
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-wider">
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

      {/* تصميم بديل للزر */}
      <div className="mt-auto">
        <div className="relative">
          <button
            onClick={() => router.push(`/services/${serviceSlug}`)}
            className="w-full hover:cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-[#45B7BA]/10 to-[#45B7BA]/5 hover:from-[#45B7BA]/20 hover:to-[#45B7BA]/15 text-[#45B7BA] hover:text-white py-3 px-4 rounded-lg border border-[#45B7BA]/30 hover:border-[#45B7BA] transition-all duration-300 group"
          >
            <span className="font-semibold text-sm">Learn More</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardNew;
