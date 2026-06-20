"use client";

import SectionHeader from "@/components/SectionHeader";
import { useI18n } from "@/components/I18nProvider";

export default function ExperienceSection() {
  const { t } = useI18n();

  return (
    <section id="experience" className="section-shell bg-surface/40">
      <div className="section-inner">
        <SectionHeader
          index={t.experience.index}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.experience.domains.map((domain, index) => (
            <article
              key={domain.title}
              className="glass-card-interactive relative overflow-hidden p-5 pl-6 sm:p-6 sm:pl-7"
            >
              <div
                className="absolute left-0 top-0 h-full w-1 bg-theme/70"
                aria-hidden="true"
              />
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {domain.icon}
                </span>
                <span className="font-mono text-xs text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-heading">
                {domain.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted text-pretty">
                {domain.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
