import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="animate-fade-in mb-4 text-sm font-medium tracking-widest text-sky-400 uppercase">
          Portfolio
        </p>

        <h1 className="animate-slide-up mb-4 text-5xl font-bold tracking-tight md:text-7xl">
          <span className="gradient-text">{profile.name}</span>
        </h1>

        <p className="animate-slide-up animate-delay-100 mb-2 text-xl text-slate-300 md:text-2xl">
          {profile.title}
        </p>

        <p className="animate-slide-up animate-delay-200 mb-6 text-base text-slate-400">
          <span className="font-semibold text-sky-300">
            {profile.yearsOfExperience} 年
          </span>{" "}
          前端开发经验 · {profile.nameEn}
        </p>

        <p className="animate-slide-up animate-delay-300 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
          {profile.tagline}
        </p>

        <div className="animate-slide-up animate-delay-400 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="pointer-events-auto rounded-full bg-gradient-to-r from-sky-400 to-purple-400 px-8 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            了解更多
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-sky-400/50 hover:text-sky-300"
          >
            GitHub →
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
