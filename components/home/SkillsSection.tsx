"use client";

import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiGraphql,
  SiPostgresql,
} from "react-icons/si";

import { FiSearch } from "react-icons/fi";

export default function SkillsSection() {
  const skills = [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: FaNodeJs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "SEO", icon: FiSearch },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
    { name: "GraphQL", icon: SiGraphql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Docker", icon: FaDocker },
  ];

  return (
    <section id="skills" className="bg-primary text-white md:py-12 py-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-accent text-sm mb-2">SKILLS</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-white/60 mt-4">
            Tools I use to build fast, scalable, SEO-ready products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-x-0 w-full max-w-[900px] mx-auto">
          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <div
                key={i}
                className="group mx-auto flex w-full max-w-[140px] flex-col items-center justify-center gap-3 bg-[#0b0f2a] border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_12px_24px_rgba(255,122,24,0.18)]"
              >
                {/* Icon Circle */}
                <div className="w-11 h-11 rounded-full border border-orange-500/30 flex items-center justify-center text-accent text-lg transition group-hover:scale-110 group-hover:border-orange-500">
                  <Icon />
                </div>

                {/* Name */}
                <p className="text-xs font-medium group-hover:text-accent transition">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
