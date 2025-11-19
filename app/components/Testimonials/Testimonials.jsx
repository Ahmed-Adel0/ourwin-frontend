import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import Link from "next/link";

const testimonialsData = [
  {
    title: "OUTWIN TURNED OUR BUSINESS AROUND!",
    text:
      "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    name: "Sarah Thompson",
    role: "CEO of BlueBloom",
    avatar: "/Clients/Asset 80.png",
  },
  {
    title: "OUTWIN TURNED OUR BUSINESS AROUND!",
    text:
      "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    name: "Wade Warren",
    role: "Art Director",
    avatar: "/Clients/Asset 81.png",
  },
  {
    title: "WORKING WITH OUTWIN WAS A PLEASURE.",
    text:
      "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    name: "Lisa Williams",
    role: "CEO of HealthTech",
    avatar: "/Clients/Asset 82.png",
  },
  {
    title: "OUTWIN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.",
    text:
      "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
    name: "Jennifer Lee",
    role: "COO of Foodie Haven",
    avatar: "/Clients/Asset 83.png",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-black py-20 px-4 md:px-6">
      <SectionWrapper id="testimonials-section">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-[#003349] to-[#006781] py-6 md:py-8 px-6 rounded-2xl text-white mb-10 md:mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">
            TESTIMONIALS
          </h2>
          <Link
            href="/testimonials-page"
            className="text-sm md:text-base lg:text-lg font-semibold flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <span>ALL TESTIMONIALS</span>
            <span className="text-lg">↗</span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#053447] rounded-2xl overflow-hidden flex flex-col shadow-xl shadow-black/40"
            >
              {/* Top text area */}
              <div className="px-6 pt-8 pb-10 text-white flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Bottom user row */}
              <div className="px-6 py-4 bg-black/40 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/30">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-300">{item.role}</p>
                  </div>
                </div>

                <button className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Testimonials;
