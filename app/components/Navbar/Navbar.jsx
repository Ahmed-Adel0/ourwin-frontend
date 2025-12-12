"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About us", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-8 left-0 right-0 flex justify-center z-50 px-4">
      <nav
        className="w-full max-w-full bg-gradient-to-r from-[#04364A] to-[#64CCC5] rounded-2xl px-6 py-3 flex justify-between items-center shadow-lg shadow-teal-900/50"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="Outwin home page">
          <Image
            src="/1.png"
            alt="Outwin Logo"
            width={140}
            height={50}
            className="cursor-pointer object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-2 items-center" role="menubar">
          {navItems.map((item) => (
            <li key={item.label} role="none">
              <Link
                href={item.href}
                className="block bg-[#052636] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#0d3547] transition-colors duration-300"
                role="menuitem"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <Link
            href="/contact"
            className="bg-[#00445C] text-white text-sm font-bold px-3 py-3 rounded-xl hover:bg-[#003349] transition-all shadow-md border border-white/10"
            role="menuitem"
            aria-label="Contact us"
          >
            Contact us
          </Link>
        </ul>

        {/* Hamburger Icon - Mobile Only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-20 left-4 right-4 bg-gradient-to-r from-[#04364A] to-[#64CCC5] rounded-2xl p-4 shadow-lg lg:hidden"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <ul className="flex flex-col gap-3" role="menubar">
            {navItems.map((item) => (
              <li key={item.label} role="none">
                <Link
                  href={item.href}
                  className="block bg-[#052636] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#0d3547] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <Link
              href="/contact"
              className="block bg-[#00445C] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#003349] transition-all shadow-md border border-white/10 text-center"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              aria-label="Contact us"
            >
              Contact us
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
