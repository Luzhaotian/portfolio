import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-16 pt-28">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/80"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p
            className="animate-fade-in mb-5 font-mono text-xs tracking-[0.25em] text-theme-light uppercase"
            translate="no"
          >
            Senior Frontend Engineer
          </p>

          <h1 className="animate-slide-up mb-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="theme-text">{profile.name}</span>
          </h1>

          <p className="animate-slide-up animate-delay-100 mb-3 text-xl font-medium text-slate-200 md:text-2xl">
            {profile.title}
          </p>

          <p className="animate-slide-up animate-delay-200 mb-8 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg text-pretty">
            {profile.tagline}
          </p>

          <div className="animate-slide-up animate-delay-300 flex flex-wrap gap-3">
            <a href="#about" className="btn-primary">
              查看履历
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub →
            </a>
          </div>
        </div>

        <div className="animate-slide-up animate-delay-400 grid grid-cols-2 gap-4">
          {profile.highlights.map((item) => (
            <article key={item.label} className="stat-card group">
              <div className="mb-3 inline-flex rounded-full bg-theme/15 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-theme-light uppercase">
                {item.label}
              </div>
              <p
                className="font-mono text-2xl font-bold tracking-tight text-slate-50 md:text-3xl"
                translate="no"
              >
                {item.value}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="h-5 w-5 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
