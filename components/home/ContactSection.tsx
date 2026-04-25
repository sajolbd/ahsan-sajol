"use client";

import { Mail, MessageCircle, MapPin } from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "sajolibn@gmail.com",
    href: "mailto:sajolibn@gmail.com",
    icon: Mail,
  },
  {
    title: "WhatsApp",
    value: "+8801779024048",
    href: "https://wa.me/8801779024048",
    icon: MessageCircle,
  },
  {
    title: "Location",
    value: "Remote / Bangladesh",
    href: "#",
    icon: MapPin,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-primary py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-accent text-sm mb-2 font-medium">CONTACT</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s collaborate and bring your ideas
            to life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_20px_40px_rgba(255,122,24,0.18)]"
              >
                {/* Icon */}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-orange-500/40 text-accent transition group-hover:scale-110 group-hover:border-orange-500">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <p className="text-white/60 text-sm mb-2">{item.title}</p>

                {/* Value */}
                <h3 className="text-lg font-semibold group-hover:text-accent transition">
                  {item.value}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
