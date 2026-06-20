import { defineConfig, presetWind3 } from "unocss";

export default defineConfig({
  content: {
    filesystem: [
      "app/**/*.{html,js,ts,jsx,tsx}",
      "components/**/*.{html,js,ts,jsx,tsx}",
    ],
  },
  presets: [presetWind3()],
  theme: {
    colors: {
      background: "#050508",
      surface: "#0c0c14",
      theme: {
        DEFAULT: "#14b8a6",
        light: "#5eead4",
      },
    },
    fontFamily: {
      sans: "var(--font-geist-sans), system-ui, sans-serif",
      mono: "var(--font-geist-mono), monospace",
    },
  },
  shortcuts: {
    "glass-card": "rounded-2xl border border-white/8 bg-white/3 backdrop-blur-md",
    "glass-card-interactive":
      "glass-card transition-[border-color,background-color,transform] duration-300 hover:border-theme/25 hover:bg-white/6 hover:-translate-y-0.5",
    "theme-text": "text-theme",
    "section-shell": "relative px-6 py-20 md:py-28",
    "section-inner": "mx-auto max-w-6xl",
    "section-title":
      "text-3xl font-bold tracking-tight text-slate-50 md:text-4xl lg:text-[2.75rem] lg:leading-tight",
    "section-subtitle": "text-base leading-relaxed text-slate-400 md:text-lg",
    "tech-tag":
      "rounded-md border border-white/10 bg-white/4 px-2.5 py-1 text-xs text-slate-300 transition-[border-color,color] duration-200 hover:border-theme/35 hover:text-theme-light",
    "focus-ring":
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "btn-primary":
      "inline-flex items-center justify-center rounded-full bg-theme px-7 py-3 text-sm font-semibold text-white transition-[opacity,transform] duration-200 hover:opacity-90 hover:scale-[1.02] focus-ring",
    "btn-ghost":
      "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/3 px-7 py-3 text-sm font-semibold text-slate-200 transition-[border-color,color,background-color] duration-200 hover:border-theme/40 hover:bg-white/6 hover:text-theme-light focus-ring",
    "stat-card":
      "glass-card relative overflow-hidden p-5 md:p-6 before:content-empty before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-theme/40",
    "skip-link":
      "fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-theme px-4 py-2 text-sm font-medium text-white opacity-0 transition-transform focus-visible:translate-y-0 focus-visible:opacity-100 focus-ring",
    "bg-grid-pattern":
      "bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]",
    "bg-grid": "bg-[length:48px_48px]",
  },
  rules: [
    ["animate-fade-in", { animation: "fadeIn 0.7s ease-out forwards" }],
    ["animate-slide-up", { animation: "slideUp 0.7s ease-out forwards" }],
    ["animate-delay-100", { "animation-delay": "100ms" }],
    ["animate-delay-200", { "animation-delay": "200ms" }],
    ["animate-delay-300", { "animation-delay": "300ms" }],
    ["animate-delay-400", { "animation-delay": "400ms" }],
    ["text-balance", { "text-wrap": "balance" }],
    ["text-pretty", { "text-wrap": "pretty" }],
  ],
  preflights: [
    {
      getCSS: () => `
        :root {
          --theme: #14b8a6;
          --theme-muted: rgba(20, 184, 166, 0.15);
        }
        html {
          color-scheme: dark;
          scroll-behavior: smooth;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        body {
          background-color: transparent;
          color: #e2e8f0;
          overflow-x: hidden;
        }
        ::selection {
          background-color: rgba(20, 184, 166, 0.35);
          color: #fff;
        }
        [id] {
          scroll-margin-top: 5.5rem;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `,
    },
  ],
});
