import Link from "next/link";

// الألوان المستخدمة:
// لون خلفية مربعات السوشيال ميديا: #185E73 (لون أزرق داكن)

const socialMedia = [
  {
    platform: "INSTAGRAM",
    icon: "📷",
    url: "#",
    description: "Share visually appealing snippets of our latest web projects.",
    bg: "#185E73",
  },
  {
    platform: "TWITTER",
    icon: "🐦",
    url: "#",
    description: "Tweet about interesting coding challenges you’ve overcome.",
    bg: "#185E73",
  },
  {
    platform: "DRIBBBLE",
    icon: "⚪",
    url: "#",
    description: "Showcase design elements of our web projects.",
    bg: "#185E73",
  },
  {
    platform: "BEHANCE",
    icon: "🖹",
    url: "#",
    description: "Create detailed presentations for our projects.",
    bg: "#185E73",
  },
];

const SocialMediaCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-1">
      {socialMedia.map((item, index) => (
        <Link
          href={item.url}
          key={index}
          target="_blank"
          className="p-4 rounded-xl shadow-lg border border-white/5 transition-all duration-300 hover:scale-[1.03] hover:border-[#45B7BA] flex flex-col justify-between"
          style={{ backgroundColor: item.bg }}
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl">{item.icon}</span>
            <span className="text-xl">↗</span>
          </div>
          <h3 className="text-lg font-bold mb-1">{item.platform}</h3>
          <p className="text-xs text-gray-200">{item.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaCards;
