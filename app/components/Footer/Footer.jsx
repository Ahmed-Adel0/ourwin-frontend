import SocialMediaCards from "./SocialMediaCards";
import FooterLinkColumns from "./FooterLinkColumns";
import CopyrightBar from "./CopyrightBar";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-10 mt-10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* الصف العلوي */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] gap-4 md:gap-5 mb-8">
          <SocialMediaCards />

          <div className="col-span-1 flex">
            <div className="w-full bg-[#185E73] rounded-2xl shadow-xl shadow-black/40 px-6 md:px-10 py-8 md:py-10">
              <FooterLinkColumns />
            </div>
          </div>
        </div>
      </div>

      <CopyrightBar />
    </footer>
  );
};

export default Footer;
