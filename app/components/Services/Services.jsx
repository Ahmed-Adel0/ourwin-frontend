
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    title: "DIGITAL MARKETING",
    price: "$1,500",
    icon: "/Services/DIGITAL MARKETING.svg",
    details: [
      "SEO & Marketing",
      "Social Media Management",
      "Content Creation & Design",
      "Media Buying & Strategy",
      "Email Marketing & Automation",
    ],
  },
  {
    title: "BRANDING & IDENTITY",
    price: "$2,500",
    icon: "/Services/BRANDING & IDENTITY.svg",
    details: [
      "Brand Strategy & Positioning",
      "Brand Messaging & Tone of Voice",
      "Logo & Visual Identity Design",
      "Brand Guidelines & Systems",
    ],
  },
  {
    title: "MEDIA PRODUCTION",
    price: "$2,500",
    icon: "/Services/MEDIA PRODUCTION.svg",
    details: [
      "Video Editing & Post-Production",
      "Live Video Production",
      "2D & 3D Animation",
      "Motion Graphics",
    ],
  },
  {
    title: "PRINTING & COLLATERAL",
    price: "$1,500",
    icon: "/Services/PRINTING & COLLATERAL.svg",
    details: [
      "Concept Development & Creative Direction",
      "Business Cards, Letterheads, & Stationary",
      "Flyers, Brochures, & Annual Reports",
      "Posters, Banners, & Marketing Materials",
    ],
  },
  {
    title: "WEBSITE DEVELOPMENT",
    price: "$2,500",
    icon: "/Services/WEBSITE DEVELOPMENT.svg",
    details: [
      "Corporate & Business Websites",
      "E-commerce Solutions",
      "Business Management Systems",
      "Interactive & Dynamic Web Experiences",
      "Prototyping & Functional Design",
      "UX/UI Design",
    ],
  },
  {
    title: "EVENTS & EXHIBITIONS",
    price: "$2,500",
    icon: "/Services/EVENTS & EXHIBITIONS.svg",
    details: ["Brand Activations", "Exhibitions", "Roadshows"],
  },
];

const Services = () => {
  return (
    <section className="w-full bg-black py-20 px-4 md:px-6">
      <SectionWrapper id="services-section">
        <SectionHeader title="OUR SERVICES" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} data={service} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Services;

