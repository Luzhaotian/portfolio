import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden px-4 pb-12 pt-24 sm:min-h-[88vh] sm:px-6 sm:pb-16 sm:pt-28 md:min-h-[92vh]">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/80"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
        <div>
          <p
            className="animate-fade-in mb-5 font-mono text-xs tracking-[0.25em] text-theme-light uppercase"
            translate="no"
          >
            Senior Frontend Engineer
          </p>

          <h1 className="animate-slide-up mb-4 text-3xl font-bold tracking-tight text-balance sm:mb-5 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="theme-text">{profile.name}</span>
          </h1>

          <p className="animate-slide-up animate-delay-100 mb-2 text-lg font-medium text-slate-200 sm:mb-3 sm:text-xl md:text-2xl">
            {profile.title}
          </p>

          <p className="animate-slide-up animate-delay-200 mb-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:mb-8 sm:text-base md:text-lg text-pretty">
            {profile.tagline}
          </p>

          <div className="animate-slide-up animate-delay-300 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

        <div className="animate-slide-up animate-delay-400 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {profile.highlights.map((item) => (
            <article key={item.label} className="stat-card group">
              <div className="mb-3 inline-flex rounded-full bg-theme/15 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-theme-light uppercase">
                {item.label}
              </div>
              <p
                className="font-mono text-xl font-bold tracking-tight text-slate-50 sm:text-2xl md:text-3xl"
                translate="no"
              >
                {item.value}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 motion-safe:animate-bounce md:block"
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
