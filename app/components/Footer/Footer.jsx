import SocialMediaCards from "./SocialMediaCards";
import FooterLinkColumns from "./FooterLinkColumns";
import LocationBox from "./LocationBox"; // استبدل NewsletterForm
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

        {/* الصف الأوسط: مكون الموقع بدلاً من الاشتراك */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* قسم الاتصال السريع */}
          <div className="bg-[#006781] rounded-2xl shadow-xl shadow-black/40 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-200">
                <span className="font-semibold">Email:</span> info@outwin.com
              </p>
              <p className="text-sm text-gray-200">
                <span className="font-semibold">Phone:</span> +20 100 123 4567
              </p>
              <p className="text-sm text-gray-200">
                Available: Sun - Thu, 9AM - 6PM
              </p>
            </div>
          </div>

          {/* قسم الموقع - نفس ارتفاع القسم الآخر */}
          <LocationBox />
        </div>
      </div>

      <CopyrightBar />
    </footer>
  );
};

export default Footer;
