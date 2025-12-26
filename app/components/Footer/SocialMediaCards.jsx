"use client";

import Link from "next/link";

// SVG Icons Components
const InstagramIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const BehanceIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.84 10.18v1.3h2.56c.96 0 1.44-.39 1.44-1.16 0-.83-.53-1.14-1.48-1.14H8.84zm0 4.33v1.46h2.78c1.1 0 1.66-.42 1.66-1.3 0-.9-.6-1.16-1.7-1.16H8.84z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.4 9.22h4.13v1.1H16.4v3.73c0 .3.04.55.1.73.14.4.5.62 1.08.62.43 0 .78-.1 1.05-.3v1.23c-.36.17-.82.26-1.39.26-1.28 0-2.18-.62-2.58-1.73-.12-.35-.18-.78-.18-1.29v-4.23h-1.97v-1.1h1.97V8.26h2.31v2.96z" />
    <path d="M13.29 8.85c1.62 0 2.7.68 3.1 2.05.1.35.15.73.15 1.15 0 .4-.04.77-.13 1.1-.28 1.12-1.1 1.77-2.48 1.77-1.66 0-2.83-1.14-2.83-3.01 0-1.86 1.18-3.06 3.19-3.06zm.03 1.3c-1.07 0-1.71.73-1.71 1.87 0 1.12.62 1.83 1.7 1.83 1.03 0 1.65-.71 1.65-1.85 0-1.16-.64-1.85-1.64-1.85z" />
  </svg>
);

const socialMedia = [
  {
    platform: "INSTAGRAM",
    icon: InstagramIcon,
    url: "https://www.instagram.com/outwinagency/",
    description: "Visual highlights, campaigns, and creative work.",
    bg: "#185E73",
  },
  {
    platform: "LINKEDIN",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/company/outwinagency/",
    description: "Company updates, insights, and professional news.",
    bg: "#185E73",
  },
  {
    platform: "FACEBOOK",
    icon: FacebookIcon,
    url: "https://www.facebook.com/outwinagency/",
    description: "Short-form creative content and digital trends.",
    bg: "#185E73",
  },
  {
    platform: "BEHANCE",
    icon: BehanceIcon,
    url: "https://www.behance.net/outwinagency",
    description: "Selected projects and detailed case studies.",
    bg: "#185E73",
  },
];

const SocialMediaCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-1 items-stretch">
      {socialMedia.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <Link
            href={item.url}
            key={index}
            target="_blank"
            className="h-full min-h-[140px] p-4 rounded-xl shadow-lg border border-white/5 transition-all duration-300 hover:scale-[1.03] hover:border-[#45B7BA] flex flex-col justify-between"
            style={{ backgroundColor: item.bg }}
          >
            <div className="shrink-0 mb-3">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div className="grow flex flex-col justify-end">
              <h3 className="text-lg font-bold mb-2 leading-tight text-white">
                {item.platform}
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed">
                {item.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMediaCards;
