import SocialMediaCards from "./SocialMediaCards";
import FooterLinkColumns from "./FooterLinkColumns";
import NewsletterForm from "./NewsletterForm";
import CopyrightBar from "./CopyrightBar";

// الألوان المستخدمة:
// خلفية الصفحة الداكنة: أسود مطابق لباقي الأقسام
// البلوكات الداخلية: #185E73 / #006781

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-10 mt-10">
      {/* حاوية المحتوى الرئيسي */}
      <div className="container mx-auto px-4 max-w-7xl">
        {/* الصف العلوي: السوشيال ميديا + الروابط في بطاقة واحدة كبيرة على اليمين */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] gap-4 md:gap-5 mb-10">
          {/* العمود الأيسر: شبكة السوشيال ميديا (4 مربعات) */}
          <SocialMediaCards />

          {/* العمود الأيمن: بطاقة الروابط */}
          <div className="col-span-1 flex">
            <div className="w-full bg-[#185E73] rounded-2xl shadow-xl shadow-black/40 px-6 md:px-10 py-8 md:py-10">
              <FooterLinkColumns />
            </div>
          </div>
        </div>

        {/* الصف الأوسط: شريط الاشتراك بالقائمة البريدية */}
        <NewsletterForm />
      </div>

      {/* الشريط السفلي: حقوق النشر والروابط القانونية */}
      <CopyrightBar />
    </footer>
  );
};

export default Footer;
