"use client";

import ContentCard from "@/components/ContentCard";
import SectionHeader from "@/components/SectionHeader";
import { useI18n } from "@/components/I18nProvider";
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
  const { t } = useI18n();

  return (
    <section id={id} className="section-shell">
      <div className="section-inner">
        <SectionHeader index={sectionIndex} title={title} subtitle={subtitle} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ContentCard
              key={project.name}
              title={project.name}
              description={project.description}
              href={showLinks ? project.link : undefined}
              badge={project.highlight ? t.common.featured : undefined}
              highlight={project.highlight}
              linkLabel={
                showLinks && project.link ? `${t.common.viewRepo} →` : undefined
              }
              footer={
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-tag" translate="no">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="tech-tag text-faint">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
