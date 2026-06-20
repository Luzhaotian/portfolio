import SectionHeader from "@/components/SectionHeader";
import type { Project } from "@/data/projects";

interface ProjectsSectionProps {
  id: string;
  sectionIndex: string;
  title: string;
  subtitle: string;
  projects: Project[];
  showLinks?: boolean;
}

export default function ProjectsSection({
  id,
  sectionIndex,
  title,
  subtitle,
  projects,
  showLinks = false,
}: ProjectsSectionProps) {
  return (
    <section id={id} className="section-shell">
      <div className="section-inner">
        <SectionHeader index={sectionIndex} title={title} subtitle={subtitle} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className={`glass-card-interactive group flex flex-col p-5 sm:p-6 ${
                project.highlight ? "ring-1 ring-theme/20" : ""
              }`}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-theme-light">
                  {showLinks && project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded-sm hover:underline"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                {project.highlight && (
                  <span className="shrink-0 rounded-md bg-theme/10 px-2 py-0.5 text-[11px] font-medium text-theme-light">
                    精选
                  </span>
                )}
              </div>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400 text-pretty">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((tech) => (
                  <span key={tech} className="tech-tag" translate="no">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="tech-tag text-slate-500">
                    +{project.tech.length - 5}
                  </span>
                )}
              </div>

              {showLinks && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-5 inline-flex items-center gap-1 text-sm text-theme transition-colors hover:text-theme-light"
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
