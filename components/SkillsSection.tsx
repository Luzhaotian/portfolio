import SectionHeader from "@/components/SectionHeader";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  const [featured, ...rest] = skillCategories;

  return (
    <section id="skills" className="section-shell relative bg-surface/40">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20"
        aria-hidden="true"
      />
      <div className="section-inner relative">
        <SectionHeader
          index="02 — SKILLS"
          title="技术栈"
          subtitle="从 GitHub 开源与企业级平台中沉淀的全栈前端能力"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <article className="glass-card-interactive lg:col-span-2 lg:row-span-2 p-6 md:p-8">
            <h3 className="mb-2 text-xl font-semibold text-heading">{featured.name}</h3>
            <p className="mb-6 text-sm text-muted">
              双栈深耕，覆盖现代 Web 应用核心链路
            </p>
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
