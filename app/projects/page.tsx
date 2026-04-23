import Link from "next/link";
import { projects } from "projects";

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
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f2a] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_18px_36px_rgba(255,122,24,0.22)]"
            >
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

                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm text-accent hover:underline"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
