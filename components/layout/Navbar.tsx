"use client";

import { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowDown } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const sectionRouteMap: Record<string, string> = {
    "/features": "features",
    "/featured-projects": "projects",
    "/skills": "skills",
    "/contact": "contact",
  };

  const menuItems = [
    { name: "Features", href: "/features", sectionId: "features" },
    {
      name: "Featured Projects",
      href: "/featured-projects",
      sectionId: "projects",
    },
    { name: "All Projects", href: "/projects" },
    { name: "Skills", href: "/skills", sectionId: "skills" },
    { name: "Contact", href: "/contact", sectionId: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return false;
    }

    const navOffset = 96;
    const top =
      section.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({ top, behavior: "smooth" });
    return true;
  };

  useEffect(() => {
    const pathSectionId = sectionRouteMap[pathname];

    if (pathname === "/projects") {
      setActiveItem("All Projects");
      return;
    }

    const matchedRouteItem = menuItems.find(
      (item) => item.sectionId && pathSectionId === item.sectionId,
    );
    if (matchedRouteItem) {
      setActiveItem(matchedRouteItem.name);
      return;
    }

    if (pathname !== "/") {
      setActiveItem("");
      return;
    }

    const sectionItems = menuItems.filter((item) => item.sectionId);

    const updateActiveSection = () => {
      const viewportCenter = window.scrollY + window.innerHeight * 0.35;
      let currentItem = "";

      for (const item of sectionItems) {
        const section = document.getElementById(item.sectionId!);
        if (!section) {
          continue;
        }

        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
          currentItem = item.name;
          break;
        }
      }

      setActiveItem(currentItem);
    };
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [pathname]);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    item: (typeof menuItems)[number],
  ) => {
    setOpen(false);
    setActiveItem(item.name);

    if (!item.sectionId) {
      return;
    }

    event.preventDefault();

    if (pathname === "/") {
      window.history.replaceState(null, "", item.href);
      scrollToSection(item.sectionId);
      return;
    }

    router.push(item.href, { scroll: false });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white">
            AS
          </div>
          <span className="font-semibold text-lg text-white">ahsanSajol</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`group relative pb-2 text-sm font-medium transition duration-300 ${
                activeItem === item.name ? "text-accent" : "text-white"
              } hover:text-accent`}
              onClick={(event) => handleNavClick(event, item)}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 ${
                  activeItem === item.name
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                } group-hover:w-full group-hover:opacity-100`}
              />
            </Link>
          ))}

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition"
          >
            <span className="flex items-center gap-1">
              <FaArrowDown />
              Resume
            </span>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`w-6 h-[2px] bg-white transition ${open && "rotate-45 translate-y-[6px]"}`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition ${open && "opacity-0"}`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition ${open && "-rotate-45 -translate-y-[6px]"}`}
          />
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
              className={`border-b border-white/10 py-2 transition ${
                activeItem === item.name ? "text-accent" : "text-white"
              } hover:text-accent`}
              onClick={(event) => handleNavClick(event, item)}
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
