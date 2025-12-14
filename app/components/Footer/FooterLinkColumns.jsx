import Link from "next/link";

// بيانات الروابط والقوائم
const footerLinks = {
  Home: [
    "Why Us",
    { name: "About Us", url: "/about" },
    "Testimonials",
    "FAQ's",
  ],
  Services: [
    "Digital Marketing",
    "Branding & Identity",
    "Media Production",
    "Printing & Collateral",
    "Website Development",
    "Events & Exhibitions",
  ],
  Company: [{ name: "Careers", url: "/career" }],
  blogs: [{ name: "Blogs", url: "/blogs" }],
};

const FooterLinkColumns = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-between">
      {Object.entries(footerLinks).map(([title, links]) => (
        <div key={title}>
          <h3 className="text-base md:text-lg font-bold mb-4 text-[#45B7BA] uppercase tracking-wide">
            {title}
          </h3>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={typeof link === "string" ? "#" : link.url || "#"}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {typeof link === "string" ? link : link.name}
                  {typeof link !== "string" && link.status && (
                    <span className="ml-2 bg-red-600 text-xs px-2 py-0.5 rounded-full">
                      {link.status}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinkColumns;
