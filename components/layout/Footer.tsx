"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/sajolibn2",
    icon: FaFacebookF,
  },
  {
    name: "GitHub",
    href: "https://github.com/sajolbd",
    icon: FaGithub,
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-white">
                AS
              </div>
              <span className="text-xl font-semibold">ahsanSajol</span>
            </div>

            <p className="max-w-sm text-sm leading-8 text-white/60">
              Full Stack Developer & SEO Expert specializing in
              performance-first web applications. I build scalable solutions
              with Next.js, TypeScript, and MongoDB, combining technical
              expertise with strategic SEO to deliver apps that rank and
              convert.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/8801779024048"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition hover:border-accent/60 hover:bg-white/10"
              >
                <MessageCircle size={16} className="text-green-400" />
                Let&apos;s Talk
              </a>

              <a
                href="mailto:sajolibn@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition hover:border-accent/60 hover:bg-white/10"
              >
                <Mail size={16} className="text-accent" />
                Email Me
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 transition hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold">Contact & Social</h3>

            <div className="space-y-4 text-white/60">
              <a
                href="tel:+8801779024048"
                className="block transition hover:text-accent"
              >
                +8801779024048
              </a>

              <a
                href="mailto:sajolibn@gmail.com"
                className="block transition hover:text-accent"
              >
                sajolibn@gmail.com
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-accent hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ahsan Sajol. All rights reserved.</p>

          <p>
            Built with <span className="text-accent">Next.js</span>,{" "}
            <span className="text-accent">TypeScript</span>,{" "}
            <span className="text-accent">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
