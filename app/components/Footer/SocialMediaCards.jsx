import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTiktok, FaBehance } from "react-icons/fa";

const socialMedia = [
  {
    platform: "INSTAGRAM",
    icon: FaInstagram,
    url: "#",
    description:
      "Share visually appealing snippets of our latest web projects.",
    bg: "#185E73",
  },
  {
    platform: "LINKEDIN",
    icon: FaLinkedin,
    url: "#",
    description: "Connect with us on LinkedIn.",
    bg: "#185E73",
  },
  {
    platform: "TIKTOK",
    icon: FaTiktok,
    url: "#",
    description: "Connect with us on TikTok.",
    bg: "#185E73",
  },
  {
    platform: "BEHANCE",
    icon: FaBehance,
    url: "#",
    description: "Create detailed presentations for our projects.",
    bg: "#185E73",
  },
];

const SocialMediaCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-1 items-stretch">
      {socialMedia.map((item, index) => (
        <Link
          href={item.url}
          key={index}
          target="_blank"
          className="h-full min-h-[140px] p-4 rounded-xl shadow-lg border border-white/5 transition-all duration-300 hover:scale-[1.03] hover:border-[#45B7BA] flex flex-col justify-between"
          style={{ backgroundColor: item.bg }}
        >
          <div className="shrink-0 mb-3">
            <item.icon className="w-6 h-6" />
          </div>
          <div className="grow flex flex-col justify-end">
            <h3 className="text-lg font-bold mb-2 leading-tight">
              {item.platform}
            </h3>
            <p className="text-xs text-gray-200 leading-relaxed">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaCards;
