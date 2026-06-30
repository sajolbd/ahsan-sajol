"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "../../projects";
import { FaGithub } from "react-icons/fa";

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
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.slug}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,20,52,0.98),rgba(8,11,32,0.98))] shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-3 hover:border-orange-500/60 hover:shadow-[0_28px_70px_rgba(255,122,24,0.22)]"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`View details for ${project.title}`}
              />

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,46,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_30%)] opacity-80" />
              <div className="project-card-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={208}
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

                <div className="flex items-center justify-between">
                  <span className="btn-slide-hover inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 rounded-full text-xs font-semibold text-white shadow-lg transition duration-300 group-hover:scale-105">
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span>View Details</span>
                      <span className="slide-arrow inline-block" aria-hidden="true">-&gt;</span>
                    </span>
                  </span>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-20 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 transition-all hover:border-orange-500/60 hover:bg-white/10 hover:text-white"
                      title="GitHub Repository"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="btn-slide-hover inline-block rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 shadow-[0_16px_40px_rgba(255,122,24,0.22)] transition duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-1.5">
              <span>View All Projects</span>
              <span className="slide-arrow inline-block" aria-hidden="true">-&gt;</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
