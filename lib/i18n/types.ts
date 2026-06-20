import type { Project } from "@/data/projects";

export type Locale = "zh" | "en";

export interface NavItem {
  href: string;
  label: string;
}

export interface HighlightItem {
  label: string;
  value: string;
}

export interface SkillCategory {
  name: string;
  description?: string;
  skills: string[];
}

export interface ExperienceDomain {
  title: string;
  description: string;
  icon: string;
}

export interface LocaleMessages {
  meta: {
    title: string;
    description: string;
  };
  common: {
    skipLink: string;
    backToTop: string;
    viewRepo: string;
    readMore: string;
    featured: string;
    hot: string;
    visitGithub: string;
    viewCsdn: string;
    yearsExp: string;
    yearsExpShort: string;
    footerTech: string;
  };
  nav: NavItem[];
  navAria: {
    main: string;
    footer: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    role: string;
    viewResume: string;
    github: string;
  };
  about: {
    index: string;
    title: string;
    subtitle: string;
    headline: string;
    headlineHighlight: string;
    headlineEnd: string;
    location: string;
    summary: string[];
  };
  skills: {
    index: string;
    title: string;
    subtitle: string;
    featuredDesc: string;
    categories: SkillCategory[];
  };
  enterprise: {
    index: string;
    title: string;
    subtitle: string;
    projects: Project[];
  };
  github: {
    index: string;
    title: string;
    subtitle: string;
    projects: Project[];
  };
  blog: {
    index: string;
    title: string;
    subtitle: string;
  };
  experience: {
    index: string;
    title: string;
    subtitle: string;
    domains: ExperienceDomain[];
  };
  footer: {
    about: string;
    blog: string;
    csdn: string;
  };
  cookie: {
    title: string;
    description: string;
    accept: string;
    reject: string;
  };
  theme: {
    light: string;
    dark: string;
    auto: string;
    ariaLabel: string;
  };
  locale: {
    zh: string;
    en: string;
  };
  profile: {
    name: string;
    title: string;
    tagline: string;
    highlights: HighlightItem[];
  };
}
