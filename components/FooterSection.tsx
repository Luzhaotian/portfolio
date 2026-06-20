import { profile } from "@/data/profile";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-semibold gradient-text">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500">
            {profile.title} · {profile.yearsOfExperience} 年经验
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 transition-colors hover:text-sky-300"
          >
            GitHub
          </a>
          <a
            href="#about"
            className="text-sm text-slate-400 transition-colors hover:text-sky-300"
          >
            关于
          </a>
          <a
            href="#skills"
            className="text-sm text-slate-400 transition-colors hover:text-sky-300"
          >
            技能
          </a>
        </div>

        <p className="text-sm text-slate-600">
          © {year} {profile.name}. Built with Next.js & Three.js
        </p>
      </div>
    </footer>
  );
}
