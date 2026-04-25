"use client";

import Link from "next/link";
import { projects } from "projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 bg-primary py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="mt-4 text-white/60">
            Showcasing my best work in development and SEO optimization
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,20,52,0.98),rgba(8,11,32,0.98))] shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-3 hover:border-orange-500/60 hover:shadow-[0_28px_70px_rgba(255,122,24,0.22)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,46,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_30%)] opacity-80" />
              <div className="project-card-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d22] via-[#090d22]/20 to-transparent" />
              </div>

              <div className="relative p-6">
                <div className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-orange-200">
                  Featured Case
                </div>

                <h3 className="mb-3 text-xl font-semibold transition duration-300 group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-white/65">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 transition duration-300 group-hover:border-orange-400/30 group-hover:bg-orange-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent transition duration-300 group-hover:translate-x-1"
                >
                  View Details
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 shadow-[0_16px_40px_rgba(255,122,24,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(255,122,24,0.3)]"
          >
            View All Projects -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
