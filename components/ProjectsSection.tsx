import type { Project } from "@/data/projects";

interface ProjectsSectionProps {
  id: string;
  title: string;
  subtitle: string;
  projects: Project[];
  showLinks?: boolean;
}

export default function ProjectsSection({
  id,
  title,
  subtitle,
  projects,
  showLinks = false,
}: ProjectsSectionProps) {
  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title gradient-text">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className={`glass-card group p-6 transition-all duration-300 hover:border-sky-400/20 hover:bg-white/[0.06] ${
                project.highlight ? "ring-1 ring-sky-400/20" : ""
              }`}
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {showLinks && project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                {project.highlight && (
                  <span className="shrink-0 rounded-full bg-sky-400/10 px-2 py-0.5 text-xs text-sky-300">
                    精选
                  </span>
                )}
              </div>

              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {showLinks && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-sky-400 transition-colors hover:text-sky-300"
                >
                  查看仓库 →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
