
import SectionWrapper from "../SectionWrapper";

const stats = [
  { label: "CLIENTS", value: "200+", color: "from-[#45B7BA] to-[#0B3B4E]" },
  { label: "PROJECTS", value: "280+", color: "from-[#0B3B4E] to-[#45B7BA]" },
  { label: "HAPPY CLIENTS", value: "100%", color: "from-[#45B7BA] to-[#0B3B4E]" },
  { label: "FOLLOWER", value: "420K", color: "from-[#0B3B4E] to-[#45B7BA]" },
  { label: "YEARS OF EXPERIENCE", value: "10+", color: "from-[#45B7BA] to-[#0B3B4E]" },
];

const Counters = () => {
  return (
    <SectionWrapper maxW="max-w-7xl" className="py-20 bg-black">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`
              bg-gradient-to-br ${stat.color} p-6 rounded-2xl text-center
              shadow-xl shadow-teal-900/50
              border-2 border-[#45B7BA]
              transition-all duration-300 hover:scale-[1.02]
            `}
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-white/80 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Counters;

