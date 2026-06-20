import { experienceDomains } from "@/data/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title gradient-text">经验领域</h2>
        <p className="section-subtitle">8 年职业生涯中深耕的业务方向与技术实践</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experienceDomains.map((domain) => (
            <article
              key={domain.title}
              className="glass-card p-6 transition-all duration-300 hover:border-purple-400/20 hover:bg-white/[0.06]"
            >
              <div className="mb-4 text-3xl">{domain.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">
                {domain.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {domain.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
