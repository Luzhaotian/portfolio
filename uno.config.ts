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
      background: "var(--color-background)",
      surface: "var(--color-surface)",
      theme: {
        DEFAULT: "var(--theme-accent)",
        light: "var(--theme-accent-light)",
      },
    },
    fontFamily: {
      sans: "var(--font-geist-sans), system-ui, sans-serif",
      mono: "var(--font-geist-mono), monospace",
    },
  },
  shortcuts: {
    "text-heading": "text-[var(--text-heading)]",
    "text-body": "text-[var(--text-body)]",
    "text-muted": "text-[var(--text-muted)]",
    "text-faint": "text-[var(--text-faint)]",
    "border-divider": "border-[var(--border-subtle)]",
    "bg-active": "bg-[var(--nav-active)]",
    "bg-hover": "bg-[var(--nav-hover)]",
    "glass-card":
      "rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md",
    "glass-card-interactive":
      "glass-card transition-[border-color,background-color,transform] duration-300 hover:border-theme/25 hover:bg-[var(--glass-bg-hover)] hover:-translate-y-0.5",
    "theme-text": "text-theme",
    "section-shell": "relative px-4 py-16 sm:px-6 sm:py-20 md:py-28",
    "section-inner": "mx-auto max-w-6xl",
    "section-title":
      "text-2xl font-bold tracking-tight text-heading sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight",
    "section-subtitle": "text-sm leading-relaxed text-muted sm:text-base md:text-lg",
    "tech-tag":
      "rounded-md border border-[var(--glass-border)] bg-[var(--tag-bg)] px-2.5 py-1 text-xs text-muted transition-[border-color,color] duration-200 hover:border-theme/35 hover:text-theme-light",
    "focus-ring":
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]",
    "btn-primary":
      "inline-flex w-full items-center justify-center rounded-full bg-theme px-6 py-3 text-sm font-semibold text-white transition-[opacity,transform] duration-200 hover:opacity-90 hover:scale-[1.02] focus-ring sm:w-auto sm:px-7",
    "btn-ghost":
      "inline-flex w-full items-center justify-center rounded-full border border-[var(--border-medium)] bg-[var(--glass-bg)] px-6 py-3 text-sm font-semibold text-body transition-[border-color,color,background-color] duration-200 hover:border-theme/40 hover:bg-[var(--glass-bg-hover)] hover:text-theme-light focus-ring sm:w-auto sm:px-7",
    "stat-card":
      "glass-card relative overflow-hidden p-4 sm:p-5 md:p-6 before:content-empty before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-theme/40",
    "skip-link":
      "fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-theme px-4 py-2 text-sm font-medium text-white opacity-0 transition-transform focus-visible:translate-y-0 focus-visible:opacity-100 focus-ring",
    "bg-grid-pattern": "bg-grid-lines",
    "bg-grid": "bg-[length:48px_48px]",
    "hero-overlay": "hero-gradient-overlay",
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
    [
      "line-clamp-3",
      {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": "3",
        "-webkit-box-orient": "vertical",
      },
    ],
    [
      "bg-grid-lines",
      {
        "background-image":
          "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
      },
    ],
    [
      "hero-gradient-overlay",
      {
        background:
          "linear-gradient(to bottom, transparent, var(--hero-overlay-mid), var(--hero-overlay-end))",
      },
    ],
  ],
  preflights: [
    {
      getCSS: () => `
        html[data-theme="dark"],
        html:not([data-theme]) {
          color-scheme: dark;
          --color-background: #050508;
          --color-surface: #0c0c14;
          --text-heading: #f8fafc;
          --text-body: #e2e8f0;
          --text-muted: #94a3b8;
          --text-faint: #64748b;
          --border-subtle: rgba(255, 255, 255, 0.08);
          --border-medium: rgba(255, 255, 255, 0.15);
          --glass-bg: rgba(255, 255, 255, 0.03);
          --glass-bg-hover: rgba(255, 255, 255, 0.06);
          --glass-border: rgba(255, 255, 255, 0.08);
          --tag-bg: rgba(255, 255, 255, 0.04);
          --nav-bg: rgba(5, 5, 8, 0.75);
          --nav-bg-solid: rgba(5, 5, 8, 0.95);
          --nav-active: rgba(255, 255, 255, 0.1);
          --nav-hover: rgba(255, 255, 255, 0.05);
          --grid-color: rgba(255, 255, 255, 0.03);
          --hero-overlay-mid: rgba(5, 5, 8, 0.1);
          --hero-overlay-end: rgba(5, 5, 8, 0.8);
          --vanta-bg: #050508;
          --theme-accent: #14b8a6;
          --theme-accent-light: #5eead4;
          --theme-muted: rgba(20, 184, 166, 0.15);
          --selection-bg: rgba(20, 184, 166, 0.35);
        }
        html[data-theme="light"] {
          color-scheme: light;
          --color-background: #f8fafc;
          --color-surface: #f1f5f9;
          --text-heading: #0f172a;
          --text-body: #334155;
          --text-muted: #64748b;
          --text-faint: #94a3b8;
          --border-subtle: rgba(15, 23, 42, 0.08);
          --border-medium: rgba(15, 23, 42, 0.14);
          --glass-bg: rgba(255, 255, 255, 0.78);
          --glass-bg-hover: rgba(255, 255, 255, 0.92);
          --glass-border: rgba(15, 23, 42, 0.08);
          --tag-bg: rgba(255, 255, 255, 0.9);
          --nav-bg: rgba(248, 250, 252, 0.85);
          --nav-bg-solid: rgba(248, 250, 252, 0.96);
          --nav-active: rgba(20, 184, 166, 0.12);
          --nav-hover: rgba(15, 23, 42, 0.04);
          --grid-color: rgba(15, 23, 42, 0.06);
          --hero-overlay-mid: rgba(248, 250, 252, 0.2);
          --hero-overlay-end: rgba(248, 250, 252, 0.88);
          --vanta-bg: #e2e8f0;
          --theme-accent: #0d9488;
          --theme-accent-light: #14b8a6;
          --theme-muted: rgba(13, 148, 136, 0.12);
          --selection-bg: rgba(13, 148, 136, 0.22);
        }
        html {
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
          color: var(--text-body);
          overflow-x: hidden;
        }
        ::selection {
          background-color: var(--selection-bg);
          color: var(--text-heading);
        }
        [id] {
          scroll-margin-top: 5.5rem;
        }
        @media (max-width: 767px) {
          [id] {
            scroll-margin-top: 4.25rem;
          }
        }
        html[data-viewport="mobile"] body {
          -webkit-tap-highlight-color: transparent;
        }
        html[data-viewport="mobile"] .glass-card-interactive:hover {
          transform: none;
        }
        html[data-theme="light"] .glass-card-interactive:hover {
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
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
