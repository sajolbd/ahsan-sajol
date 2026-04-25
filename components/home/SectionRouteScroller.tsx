"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const sectionRouteMap: Record<string, string> = {
  "/features": "features",
  "/featured-projects": "projects",
  "/skills": "skills",
  "/contact": "contact",
};

export default function SectionRouteScroller() {
  const pathname = usePathname();

  useEffect(() => {
    const sectionId = sectionRouteMap[pathname];
    if (!sectionId) {
      return;
    }

    let attempts = 0;
    const maxAttempts = 30;

    const scrollWhenReady = () => {
      attempts += 1;

      const section = document.getElementById(sectionId);
      if (section) {
        const navOffset = 96;
        const top =
          section.getBoundingClientRect().top + window.scrollY - navOffset;

        window.scrollTo({ top, behavior: "smooth" });
        return;
      }

      if (attempts < maxAttempts) {
        window.setTimeout(scrollWhenReady, 120);
      }
    };

    const timer = window.setTimeout(scrollWhenReady, 80);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
