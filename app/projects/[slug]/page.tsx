import Link from "next/link";
import { notFound } from "next/navigation";
import { FaEnvelope, FaExternalLinkAlt, FaWhatsapp } from "react-icons/fa";
import { projects } from "projects";

type ProjectDetailsProps = {
  params: {
    slug: string;
  };
};

const whatsappLink = "https://wa.me/8801779024048";
const emailLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=sajolibn@gmail.com&su=Project%20Inquiry&body=Hello%20Ahsan";

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-primary px-4 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl">
        <section className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            <p className="mb-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              {project.overview}
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                Duration: <strong className="text-white">{project.duration}</strong>
              </span>
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                Created: <strong className="text-white">{project.created}</strong>
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
              >
                Live Demo <FaExternalLinkAlt className="text-xs" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:bg-white/10"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href={emailLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:bg-white/10"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </div>

          <ProjectPreview image={project.detailsImage} title={project.title} />
        </section>

        <section className="grid gap-10 py-20 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Overview</h2>
            <p className="mb-8 max-w-2xl text-sm leading-7 text-white/75">
              {project.overview}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-orange-500/35 bg-orange-500/10 px-4 py-2 text-xs text-orange-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              What Was Built
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,122,24,0.35)] sm:p-7">
              <ul className="space-y-4 text-white/75">
                {project.builtWith.map((item) => (
                  <li key={item} className="flex gap-4 text-sm sm:text-base">
                    <span className="mt-1 text-xs text-accent">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
            Challenges &amp; Solutions
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <InfoPanel
              title="Challenges"
              tone="danger"
              items={project.challenges}
            />
            <InfoPanel
              title="Solutions"
              tone="accent"
              items={project.solutions}
            />
          </div>
        </section>

        <section className="pb-24">
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
            Results &amp; Impact
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.results.map((result, index) => (
              <div
                key={result}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-7"
              >
                <p className="mb-5 text-4xl font-bold text-accent">
                  {index + 1}
                </p>
                <p className="text-sm leading-7 text-white/70">{result}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl pb-10 text-center">
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            Want a project like this?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Let&apos;s discuss how we can bring your vision to life with
            cutting-edge technology and premium design.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={emailLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3 text-sm font-semibold text-white transition hover:scale-105"
            >
              Hire Me <span>-&gt;</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/70 px-7 py-3 text-sm font-semibold text-accent transition hover:bg-orange-500/10"
            >
              WhatsApp Me <FaWhatsapp />
            </a>
            <a
              href={emailLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/70 px-7 py-3 text-sm font-semibold text-accent transition hover:bg-orange-500/10"
            >
              Email Me <FaEnvelope />
            </a>
          </div>

          <div className="mt-10">
            <Link href="/projects" className="text-sm text-white/50 hover:text-accent">
              Back to all projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function ProjectPreview({ image, title }: { image: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl">
      <img
        src={image}
        alt={`${title} project preview`}
        className="h-full min-h-[260px] w-full object-cover sm:min-h-[330px]"
      />
    </div>
  );
}

function InfoPanel({
  title,
  tone,
  items,
}: {
  title: string;
  tone: "danger" | "accent";
  items: string[];
}) {
  const titleColor = tone === "danger" ? "text-red-300" : "text-accent";
  const borderColor =
    tone === "danger" ? "border-red-500/20" : "border-orange-500/25";

  return (
    <div className={`rounded-xl border ${borderColor} bg-[#171126] p-7`}>
      <h3 className={`mb-6 text-2xl font-bold ${titleColor}`}>{title}</h3>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item} className="flex gap-4 text-sm leading-6 text-white/75">
            <span className="mt-1 text-xs text-accent">&gt;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
