"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Features", href: "#" },
    { name: "Featured Projects", href: "#" },
    { name: "All Projects", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="w-full bg-primary border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center font-bold">
            AS
          </div>
          <span className="font-semibold text-lg text-white">ahsanSajol</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:mr-[] md:flex items-center gap-8">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="text-white hover:text-accent transition duration-300"
            >
              {item.name}
            </Link>
          ))}

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition"
          >
            <span className="flex items-center gap-1"><FaArrowDown />
 Resume</span> 
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className={`w-6 h-[2px] bg-white transition ${open && "rotate-45 translate-y-[6px]"}`} />
          <span className={`w-6 h-[2px] bg-white transition ${open && "opacity-0"}`} />
          <span className={`w-6 h-[2px] bg-white transition ${open && "-rotate-45 -translate-y-[6px]"}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-6 gap-4">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="text-white hover:text-accent transition py-2 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Resume */}
          <a
            href="/resume.pdf"
            download
            className="mt-3 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-full text-center shadow-lg"
          >
            ⬇ Resume
          </a>
        </div>
      </div>
    </nav>
  );
}