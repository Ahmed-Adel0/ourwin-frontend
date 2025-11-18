import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-8 left-0 right-0 flex justify-center z-50 px-4">
      <nav className="w-full max-w-full bg-linear-to-r from-[#04364A] to-[#64CCC5] rounded-2xl px-6 py-3 flex justify-between items-center shadow-lg shadow-teal-900/50">
        <Link href="/">
          <Image
            src="/1.png"
            alt="Outwin Logo"
            width={140}
            height={50}
            className="cursor-pointer object-contain"
          />
        </Link>

        <ul className="hidden lg:flex gap-2 items-center">
          {[
            "HOME",
            "SERVICES",
            "PROJECTS",
            "ABOUT",
            "PORTFOLIO",
            "CLIENTS",
          ].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="block bg-[#052636] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#0d3547] transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}

          <Link
            href="/contact"
            className="bg-[#1C657E] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#247a96] transition-all shadow-md border border-white/10"
          >
            CONTACT US
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
