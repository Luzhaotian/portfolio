"use client";

import SectionHeader from "@/components/SectionHeader";
import { useI18n } from "@/components/I18nProvider";

export default function SkillsSection() {
  const { t } = useI18n();
  const [featured, ...rest] = t.skills.categories;

  return (
    <section id="skills" className="section-shell relative bg-surface/40">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20"
        aria-hidden="true"
      />
      <div className="section-inner relative">
        <SectionHeader
          index={t.skills.index}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <article className="glass-card-interactive lg:col-span-2 lg:row-span-2 p-6 md:p-8">
            <h3 className="mb-2 text-xl font-semibold text-heading">{featured.name}</h3>
            <p className="mb-6 text-sm text-muted">{t.skills.featuredDesc}</p>
            <div className="flex flex-wrap gap-2">
              {featured.skills.map((skill) => (
                <span key={skill} className="tech-tag text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </article>

          {rest.map((category) => (
            <article key={category.name} className="glass-card-interactive p-5 md:p-6">
              <h3 className="mb-4 text-base font-semibold text-body">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
