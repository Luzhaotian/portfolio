import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <SectionHeader
          index="01 — ABOUT"
          title="关于我"
          subtitle="专注前端工程化与业务落地的资深开发者"
        />

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1.2fr]">
          <aside className="glass-card p-5 sm:p-8 md:p-10">
            <p className="mb-5 text-xl font-semibold leading-snug text-slate-100 text-balance sm:mb-6 sm:text-2xl">
              用工程化思维交付
              <span className="theme-text">可扩展、可维护</span>
              的前端系统
            </p>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <span className="text-theme" aria-hidden="true">
                  ◎
                </span>
                {profile.location}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-theme" aria-hidden="true">
                  ◎
                </span>
                {profile.yearsOfExperience} 年前端开发经验
              </li>
              <li className="flex items-center gap-3">
                <span className="text-theme" aria-hidden="true">
                  ◎
                </span>
                <span translate="no">Luzhaotian</span>
              </li>
            </ul>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-8 w-full sm:w-auto"
            >
              访问 GitHub
            </a>
          </aside>

          <div className="glass-card space-y-5 p-5 sm:space-y-6 sm:p-8 md:p-10">
            {profile.summary.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-slate-300 md:text-lg text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
