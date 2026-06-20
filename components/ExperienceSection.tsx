import SectionHeader from "@/components/SectionHeader";
import { experienceDomains } from "@/data/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell bg-surface/40">
      <div className="section-inner">
        <SectionHeader
          index="06 — DOMAINS"
          title="经验领域"
          subtitle="8 年职业生涯中深耕的业务方向与技术实践"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {experienceDomains.map((domain, index) => (
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
                <span className="font-mono text-xs text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">
                {domain.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 text-pretty">
                {domain.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
