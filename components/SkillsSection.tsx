import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title gradient-text">技术栈</h2>
        <p className="section-subtitle">
          从 GitHub 开源项目与企业级平台中沉淀的全栈前端技能
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <article key={category.name} className="glass-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-200">
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
