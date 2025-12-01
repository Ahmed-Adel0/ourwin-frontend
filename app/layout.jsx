import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // أوزان الخط المختلفة
});

export const metadata = {
  title: "Outwin - Digital Solutions",
  description: "Digital solutions that drive success",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
