import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SectionWrapper from "../components/SectionWrapper";
import ContactForm from "../components/Contact/ContactForm";

const stats = [
  { label: "CLIENTS", value: "200+" },
  { label: "PROJECTS", value: "280+" },
  { label: "HAPPY CLIENTS", value: "100%" },
  { label: "FOLLOWER", value: "420K" },
];

const emailContacts = [
  {
    label: "General Inquiries",
    email: "info@outwin.com",
  },
  {
    label: "Business Collaborations",
    email: "partnerships@outwin.com",
  },
  {
    label: "Job Opportunities",
    email: "careers@outwin.com",
  },
];

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-44 text-white">
      <Navbar />

      <section className="w-full pb-16 md:pb-20 lg:pb-24">
        <SectionWrapper>
          {/* Top Row: Hero + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Left: Get in touch block */}
            <div className="bg-[#032131] rounded-3xl border border-[#45B7BA]/30 shadow-[0_26px_80px_rgba(0,0,0,0.85)] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 sm:mb-5">
                  GET IN TOUCH
                  <br />
                  WITH US TODAY!
                </h1>
                <p className="text-sm sm:text-base text-gray-200 max-w-2xl">
                  At Outwin, we value your inquiries, feedback, and
                  collaborations. Whether you are interested in our digital
                  services, have questions about our projects, or want to
                  explore potential partnerships, we encourage you to reach out
                  to our dedicated team.
                </p>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="bg-gradient-to-br from-[#004861] via-[#007a8b] to-[#4fd1c5] rounded-3xl p-5 sm:p-6 md:p-7 shadow-[0_26px_80px_rgba(0,0,0,0.9)] grid grid-cols-2 gap-4 sm:gap-5 content-center">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-black/20 rounded-2xl border border-white/15 px-4 py-3 sm:px-5 sm:py-4 flex flex-col justify-center"
                >
                  <p className="text-[10px] sm:text-xs tracking-[0.25em] text-white/80 uppercase mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Contact info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] gap-6 md:gap-8">
            {/* Left: Contact channels */}
            <div className="bg-[#032131] rounded-3xl border border-[#45B7BA]/30 shadow-[0_24px_70px_rgba(0,0,0,0.85)] p-6 sm:p-7 md:p-8 flex flex-col gap-6">
              {/* Tabs */}
              <div className="inline-flex rounded-full bg-black/30 border border-black/60 p-1 text-xs sm:text-sm">
                <button className="px-3 sm:px-4 py-1 rounded-full text-gray-300">
                  PHONE NUMBER
                </button>
                <button className="px-3 sm:px-4 py-1 rounded-full bg-[#45B7BA] text-black font-semibold">
                  EMAILS
                </button>
                <button className="px-3 sm:px-4 py-1 rounded-full text-gray-300">
                  OFFICE LOCATIONS
                </button>
              </div>

              <div className="space-y-4">
                {emailContacts.map((item) => (
                  <div key={item.email} className="space-y-1">
                    <p className="text-xs sm:text-sm text-gray-300">
                      {item.label}
                    </p>
                    <div className="flex items-center bg-black rounded-full border border-[#1f2a30] overflow-hidden">
                      <div className="flex-1 px-4 py-2 sm:py-2.5 text-xs sm:text-sm tracking-[0.18em] uppercase text-white">
                        {item.email}
                      </div>
                      <div className="w-10 sm:w-11 h-10 sm:h-11 flex items-center justify-center bg-[#45B7BA] text-black text-sm">
                        ↗
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-[#032131] rounded-3xl border border-[#45B7BA]/30 shadow-[0_24px_70px_rgba(0,0,0,0.85)] p-6 sm:p-7 md:p-8">
              <ContactForm />
            </div>
          </div>
        </SectionWrapper>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
