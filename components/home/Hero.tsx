"use client";

import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";


const whatsappLink = "https://wa.me/8801779024048";

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
  {
    name: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sajolibn@gmail.com&su=Hire%20You&body=Hello%20Shamim",
    icon: FaEnvelope,
  },
];

export default function Hero() {
  return (
    <section className="w-full overflow-x-clip bg-primary text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:py-16 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="mb-3 text-sm font-medium text-accent sm:text-base">
            Hello, I&apos;m
          </p>

          <h1 className="mb-5 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-6xl">
             Ahsan Sajol<br />
            <span className="text-accent">Software Engineer</span>
          </h1>
            <h2 className="mb-6 text-lg font-semibold sm:text-xl md:text-2xl">
              A Full Stack Developer
            </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm text-white/70 sm:text-base md:mx-0">
            I build modern, scalable web applications using MERN stack and
            Next.js.
          </p>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:justify-start">
            <Link
              href="#projects"
              className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-center font-medium shadow-lg transition hover:scale-105"
            >
              <span className="flex items-center gap-1">
              <FaEye />
 View Work <FaArrowDown size={10}/></span> 
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-center transition hover:bg-white/10"
            >
              <FaWhatsapp className="text-base text-accent" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {socialLinks.map(({ name, href, icon: Icon }) => {
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-accent/60 hover:text-white"
                >
                  <Icon className="text-accent" />
                  {/* <span>{name}</span> */}
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative order-first flex justify-center overflow-hidden md:order-none">
          <div className="relative aspect-square w-full max-w-[230px] sm:max-w-[360px] md:max-w-[430px]">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-500/20 via-orange-400/10 to-transparent sm:inset-6 md:inset-8" />
            <div className="absolute inset-0 rounded-full border border-orange-500/30" />
            <div className="absolute inset-4 rounded-full border border-orange-500/40 sm:inset-6 md:inset-8" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border-4 border-orange-400 bg-orange-500 shadow-xl sm:h-60 sm:w-60 md:h-72 md:w-72">
                <img
                  src="/images/ahsan-sajol.png"
                  alt="Portrait of Shamim Ahsan"
                  className="h-full w-full object-cover object-top sm:mr-6 md:mr-10"
                />
              </div>
            </div>

            <div className="absolute inset-0 animate-orbit animate-rotateCircle">
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <div className="rotate-[-360deg] rounded-2xl border border-white/20 bg-white/10 px-2.5 py-1.5 text-center backdrop-blur-md sm:px-4 sm:py-2">
                  <p className="text-sm font-bold text-orange-400 sm:text-base">
                    30+
                  </p>
                  <p className="text-[10px] sm:text-xs">Projects</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="rotate-[-360deg] rounded-2xl border border-white/20 bg-white/10 px-2.5 py-1.5 text-center backdrop-blur-md sm:px-4 sm:py-2">
                  <p className="text-sm font-bold text-orange-400 sm:text-base">
                    10+
                  </p>
                  <p className="text-[10px] sm:text-xs">Clients</p>
                </div>
              </div>

              <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 sm:-translate-x-3">
                <div className="rotate-[-360deg] rounded-2xl border border-white/20 bg-white/10 px-2.5 py-1.5 text-center backdrop-blur-md sm:px-4 sm:py-2">
                  <p className="text-sm font-bold text-orange-400 sm:text-base">
                    2+
                  </p>
                  <p className="text-[10px] sm:text-xs">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
