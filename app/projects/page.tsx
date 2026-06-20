import Link from "next/link";
import { projects } from "../../projects";
import { FaGithub } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Ahsan Sajol",
  description: "Browse the complete portfolio of Ahsan Sajol, featuring web applications, SEO optimization, and e-commerce platforms.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-primary px-4 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm text-accent">PROJECTS</p>
          <h1 className="text-3xl font-bold md:text-5xl">
            All <span className="text-accent">Projects</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            A collection of selected development, SEO, and performance projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f2a] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_18px_36px_rgba(255,122,24,0.22)]"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`View details for ${project.title}`}
              />

              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="mb-2 font-semibold transition group-hover:text-accent">
                  {project.title}
                </h2>

                <p className="mb-4 text-sm text-white/60">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/10 px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full text-xs font-semibold text-white shadow-lg transition duration-300 group-hover:scale-105">
                    View Details
                    <span className="group-hover:translate-x-1 transition duration-300" aria-hidden="true">-&gt;</span>
                  </span>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-20 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition-all hover:border-orange-500/60 hover:bg-white/10 hover:text-white"
                      title="GitHub Repository"
                    >
                      <FaGithub size={12} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
