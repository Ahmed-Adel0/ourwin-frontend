"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Menu */}
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
            className="bg-[#1C657E] text-white text-sm font-bold px-3 py-3 rounded-xl hover:bg-[#247a96] transition-all shadow-md border border-white/10"
          >
            CONTACT US
          </Link>
        </ul>

        {/* Hamburger Icon - Mobile Only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-linear-to-r from-[#04364A] to-[#64CCC5] rounded-2xl p-4 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-3">
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
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <Link
              href="/contact"
              className="block bg-[#1C657E] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#247a96] transition-all shadow-md border border-white/10 text-center"
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
