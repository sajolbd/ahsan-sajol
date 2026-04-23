"use client";

import Link from "next/link";
import { projects } from "projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-primary text-white py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-white/60 mt-4">
            Showcasing my best work in development and SEO optimization
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group bg-[#0b0f2a] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_20px_40px_rgba(255,122,24,0.25)]"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold mb-2 group-hover:text-accent transition">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-accent text-sm hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full inline-block"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
