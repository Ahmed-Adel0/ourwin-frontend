import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // أوزان الخط المختلفة
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://outwin.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Outwin - Digital Solutions",
    template: "%s | Outwin",
  },
  description:
    "Digital solutions that drive success. We offer web development, mobile apps, branding, and digital marketing services.",
  keywords: [
    "digital solutions",
    "web development",
    "mobile app development",
    "branding",
    "digital marketing",
    "UI/UX design",
    "e-commerce",
  ],
  authors: [{ name: "Outwin Team" }],
  creator: "Outwin",
  publisher: "Outwin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Outwin",
    title: "Outwin - Digital Solutions",
    description:
      "Digital solutions that drive success. We offer web development, mobile apps, branding, and digital marketing services.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Outwin Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outwin - Digital Solutions",
    description:
      "Digital solutions that drive success. We offer web development, mobile apps, branding, and digital marketing services.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@outwin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${robotoFlex.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
