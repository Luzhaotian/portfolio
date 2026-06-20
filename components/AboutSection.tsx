import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title gradient-text">关于我</h2>
        <p className="section-subtitle">专注前端工程化与业务落地的资深开发者</p>

        <div className="glass-card space-y-6 p-8 md:p-10">
          {profile.summary.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-slate-300 md:text-lg"
            >
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="text-sky-400">📍</span>
              {profile.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="text-sky-400">💼</span>
              {profile.yearsOfExperience} 年前端经验
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-sky-300 transition-colors hover:text-sky-200"
            >
              <span>🔗</span>
              github.com/Luzhaotian
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
