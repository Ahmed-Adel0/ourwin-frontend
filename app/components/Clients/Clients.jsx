"use client";

import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import Link from "next/link";

// توليد كل شعارات العملاء برقم الأصول من public/Clients
const clientLogoNumbers = [
  // Assets 4 - 27
  ...Array.from({ length: 24 }, (_, i) => 4 + i),
  // Assets 60 - 93
  ...Array.from({ length: 34 }, (_, i) => 60 + i),
];

const clientLogos = clientLogoNumbers.map((assetNumber, index) => ({
  name: `Client ${index + 1}`,
  src: `/Clients/Asset ${assetNumber}.png`,
}));

const Clients = () => {
  return (
    // نجعل القسم بنفس خلفية وحواف الأقسام الأخرى
    <SectionWrapper id="clients-section" className="bg-black py-15">
      {/* Header unified with other sections */}
      <SectionHeader
        title="CLIENTS"
        rightNode={
          <Link
            href="/clients-page"
            className="text-base md:text-lg text-white font-semibold flex items-center hover:text-white/80 transition-colors"
          >
            ALL CLIENTS <span className="ml-2">↗</span>
          </Link>
        }
      />
      {/* أشرطة شعارات متحركة في 4 صفوف */}
      <div className="mt-12 space-y-6">
        {Array.from({ length: 4 }, (_, rowIndex) => {
          const logosPerRow = Math.floor(clientLogos.length / 4);
          const start = rowIndex * logosPerRow;
          const end = rowIndex === 3 ? clientLogos.length : start + logosPerRow; // الصف الأخير يأخذ الباقي
          const rowLogos = clientLogos.slice(start, end);
          const isReverse = rowIndex >= 2; // الصفوف 3 و 4 عكس الاتجاه (لابتوب / ديسكتوب)

          // نكرر الشعار مرتين فقط لمسار مستمر
          const trackLogos = [...rowLogos, ...rowLogos];

          return (
            <div
              key={rowIndex}
              className={`clients-row overflow-hidden ${
                isReverse ? "clients-row--reverse" : ""
              } ${rowIndex % 2 === 1 ? "clients-row--mobile-alt" : ""}`}
            >
              <div className="clients-track flex items-center">
                {trackLogos.map((client, idx) => (
                  <div
                    key={`${client.name}-${idx}`}
                    className="clients-logo relative w-40 aspect-[4/2] p-2 mr-10 opacity-75 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                  >
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      className="object-contain grayscale contrast-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* أنيميشن الشريط المتحرك مع إيقاف عند الـ hover */}
      <style jsx>{`
        .clients-track {
          /* سرعة موحدة لكل المقاسات تقريبًا */
          animation: clients-marquee 20s linear infinite alternate;
          will-change: transform;
        }

        .clients-row--reverse .clients-track {
          animation-direction: alternate-reverse;
        }

        .clients-row:hover .clients-track {
          animation-play-state: paused;
        }

        /* موبايل: نفس السرعة لكن مع عكس الاتجاه بين الصفوف */
        @media (max-width: 767px) {
          .clients-track {
            animation-duration: 20s;
          }

          /* إعادة ضبط الاتجاه الافتراضي لكل الصفوف على الموبايل */
          .clients-row .clients-track {
            animation-direction: alternate;
          }

          /* الصفوف ذات الكلاس الخاص تتحرك في الاتجاه المعاكس */
          .clients-row--mobile-alt .clients-track {
            animation-direction: alternate-reverse;
          }
        }

        /* لابتوب / شاشات كبيرة: نفس السرعة الموحدة */
        @media (min-width: 1024px) {
          .clients-track {
            animation-duration: 20s;
          }
        }

        @keyframes clients-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Clients;
