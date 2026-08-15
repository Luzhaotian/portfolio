import type { LocaleMessages } from "../types";

export const en: LocaleMessages = {
  meta: {
    title: "Luzhaotian | Senior Frontend Engineer",
    description:
      "Luzhaotian — Senior Frontend Engineer with 8 years of experience, specializing in React/Vue ecosystems, fintech, AI applications, and enterprise SaaS platforms.",
  },
  common: {
    skipLink: "Skip to main content",
    backToTop: "Back to top",
    viewRepo: "View repository",
    readMore: "Read more",
    featured: "Featured",
    hot: "Popular",
    visitGithub: "Visit GitHub",
    viewCsdn: "View CSDN profile",
    yearsExp: "years of frontend experience",
    yearsExpShort: "yrs exp",
    footerTech: "Next.js · UnoCSS",
  },
  nav: [
    { href: "#selected", label: "Selected" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#blog", label: "Notes" },
    { href: "#experience", label: "Fields" },
  ],
  navAria: {
    main: "Main navigation",
    footer: "Footer navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    role: "Senior Frontend Engineer",
    viewResume: "View Resume",
    github: "GitHub",
  },
  profile: {
    name: "Luzhaotian",
    title: "Senior Frontend Engineer",
    tagline:
      "Building high-performance, scalable frontend applications · Fintech · AI Apps · Enterprise SaaS",
    highlights: [
      { label: "Experience", value: "8 yrs" },
      { label: "Enterprise Projects", value: "20+" },
      { label: "GitHub Repos", value: "13" },
      { label: "Dual Stack", value: "Vue + React" },
    ],
  },
  about: {
    index: "01 — ABOUT",
    title: "About Me",
    subtitle: "Senior developer focused on frontend engineering and business delivery",
    headline: "Delivering",
    headlineHighlight: "scalable, maintainable",
    headlineEnd: "frontend systems with an engineering mindset",
    location: "China",
    summary: [
      "8 years of frontend development experience, focused on the React / Vue ecosystem and modern engineering practices. Skilled in complex B2B admin systems, data visualization, and AI application delivery.",
      "Led and contributed to frontend architecture and development for multiple large-scale enterprise core business platforms, spanning fintech, intelligent outbound calling, CRM, AI quality inspection, and short-form drama content platforms.",
      "Continuously exploring AI Agents, OpenAPI integration, and intelligent frontend toolchains. Maintains several open-source projects on GitHub, including an AI hiring assistant and frontend agent tools.",
    ],
  },
  skills: {
    index: "02 — SKILLS",
    title: "Tech Stack",
    subtitle:
      "Full-stack frontend capabilities honed through open source and enterprise platforms",
    featuredDesc:
      "Dual-stack expertise covering the core modern web application pipeline",
    categories: {
      coreFrameworks: {
        name: "Core Frameworks",
        skills: {
          vue23: "Vue 2/3",
          react1819: "React 18/19",
          nextjs: "Next.js",
          typescript: "TypeScript",
          pinia: "Pinia",
          vuex: "Vuex",
        },
      },
      uiLibraries: {
        name: "UI Libraries",
        skills: {
          antDesign: "Ant Design",
          elementPlus: "Element Plus",
          tailwindCss: "Tailwind CSS",
          antDesignMobile: "Ant Design Mobile",
        },
      },
      buildTools: {
        name: "Build Tools",
        skills: {
          vite: "Vite",
          webpack: "Webpack",
          rspack: "Rspack",
          rollup: "Rollup",
          babel: "Babel",
          eslint: "ESLint",
        },
      },
      dataVisualization: {
        name: "Data Visualization",
        skills: {
          echarts: "ECharts",
          threeJs: "Three.js",
          d3js: "D3.js",
          canvas: "Canvas",
          svg: "SVG",
        },
      },
      crossPlatform: {
        name: "Cross-platform & Extensions",
        skills: {
          wechatMiniProgram: "WeChat Mini Program",
          uniapp: "UniApp",
          chromeExtension: "Chrome Extension",
          mobileH5: "Mobile H5",
        },
      },
      aiAutomation: {
        name: "AI & Automation",
        skills: {
          aiAgent: "AI Agent",
          openapi: "OpenAPI",
          llmIntegration: "LLM Integration",
          agentOrchestration: "Agent Orchestration",
          promptEngineering: "Prompt Engineering",
        },
      },
      backendCollaboration: {
        name: "Backend Collaboration",
        skills: {
          restfulApi: "RESTful API",
          graphql: "GraphQL",
          nodejs: "Node.js",
          javaCollaboration: "Java Collaboration",
          microFrontends: "Micro-frontends",
        },
      },
      engineeringPractices: {
        name: "Engineering Practices",
        skills: {
          git: "Git",
          cicd: "CI/CD",
          monorepo: "Monorepo",
          performanceOptimization: "Performance Optimization",
          unitTesting: "Unit Testing",
          codeReview: "Code Review",
        },
      },
    },
  },
  enterprise: {
    index: "03 — ENTERPRISE",
    title: "Recent Enterprise Projects",
    subtitle:
      "Representative core business platforms and management systems from recent years",
    projects: {
      ceTelephone: {
        name: "ce-telephone SDK",
        description:
          "Call center softphone TypeScript SDK encapsulating WebSocket signaling, call state management, and event-driven APIs. Supports 3PCC call modes, built with Rollup and published as an npm package.",
      },
      enterpriseAiPlatform: {
        name: "Enterprise AI Application Platform",
        description:
          "Enterprise-grade AI platform integrating large language models with intelligent chat, workflow orchestration, and knowledge base management.",
      },
      consumerFinance: {
        name: "Consumer Finance Management System",
        description:
          "Core consumer finance business management system covering user management, order flow, and risk control review modules.",
      },
      fundManagement: {
        name: "Fund Management Platform",
        description:
          "Fund flow and accounting management platform with real-time data monitoring and multi-dimensional reporting.",
      },
      aiQualityInspection: {
        name: "AI Quality Inspection System",
        description:
          "AI-powered intelligent quality inspection platform that automates call and service quality checks to improve operational efficiency.",
      },
      intelligentOutbound: {
        name: "Intelligent Outbound Calling System",
        description:
          "Intelligent outbound calling and call center management platform supporting task scheduling, script configuration, and call data analytics.",
      },
      crm: {
        name: "CRM Customer Management",
        description:
          "Customer relationship management system supporting lead tracking, customer profiling, and sales performance monitoring.",
      },
      shortDrama: {
        name: "Short Drama Content Platform",
        description:
          "Short drama content management and operations backend supporting content publishing, data analytics, and user analysis.",
      },
      intlConsumerFinance: {
        name: "International Consumer Finance Platform",
        description:
          "International consumer finance platform with multi-language support and cross-border business management.",
      },
    },
  },
  github: {
    index: "04 — OPEN SOURCE",
    title: "Open Source Projects",
    subtitle: "Personal open-source projects and technical explorations on GitHub",
    projects: {
      hireHelper: {
        name: "hire-helper",
        description:
          "AI-powered hiring assistant for resume analysis and job matching.",
      },
      feAgent: {
        name: "fe-agent",
        description:
          "Frontend agent exploring AI-driven frontend development automation and workflows.",
      },
      agentHub: {
        name: "agent-hub",
        description:
          "Universal agent plugin system — an extensible framework for orchestrating agent capabilities.",
      },
      viteVueTemplate: {
        name: "vite-vue3-vueuse-tailwindcss",
        description:
          "Modern scaffold template with Vue 3, Vite, VueUse, and Tailwind CSS.",
      },
      elementFilePreview: {
        name: "element-file-preview",
        description:
          "Element UI-based file preview npm component supporting multiple file formats.",
      },
      reactAntdLog: {
        name: "react-antd-log",
        description:
          "React + Ant Design log management component with structured log display and filtering.",
      },
      cookiesCopy: {
        name: "CookiesCopy",
        description:
          "Chrome browser extension for easily copying and managing cookie information.",
      },
      caidianfangUniapp: {
        name: "caidianfang-uniapp",
        description:
          "WeChat mini program built with the UniApp cross-platform framework.",
      },
      workDiary: {
        name: "work-diary",
        description:
          "Work hours tracking mini program — a simple and efficient daily time tracker.",
      },
    },
  },
  blog: {
    index: "05 — BLOG",
    title: "Tech Blog",
    subtitle:
      "Most popular articles on CSDN — frontend engineering, AI toolchains, and lessons from the field",
  },
  experience: {
    index: "06 — DOMAINS",
    title: "Experience Domains",
    subtitle: "Business domains and technical practices honed over an 8-year career",
    domains: {
      fintech: {
        title: "Fintech",
        description:
          "Core business systems including consumer finance management, fund management platforms, and international lending platforms — covering credit, fund flow, and cross-border scenarios.",
      },
      aiMcp: {
        title: "AI Applications & MCP",
        description:
          "Delivered enterprise AI platforms, intelligent inspection systems, and frontend agents. Introduced AI Skills and MCP toolchains across development collaboration and outbound call script configuration, improving team efficiency and delivery quality by ~30%.",
      },
      enterpriseSaas: {
        title: "Enterprise SaaS",
        description:
          "B2B platforms including CRM, intelligent outbound calling, and short drama operations — serving internal operations and business teams.",
      },
      dataViz: {
        title: "Data Visualization",
        description:
          "Built real-time data dashboards, business reports, and monitoring panels with ECharts to support decision-making and operational analysis.",
      },
      mobileMiniPrograms: {
        title: "Mobile & Mini Programs",
        description:
          "WeChat mini programs, UniApp cross-platform apps, insurance H5 pages, and other mobile projects covering consumer-facing touchpoints.",
      },
      engineeringOss: {
        title: "Engineering & Open Source",
        description:
          "Vite / Webpack / Rspack build optimization, Chrome extensions, npm component libraries and SDK publishing — continuously delivering technical solutions.",
      },
    },
  },
  footer: {
    about: "About",
    blog: "Blog",
    csdn: "CSDN",
  },
  cookie: {
    title: "We Use Cookies",
    description:
      "To keep the site running, remember your theme preferences, and understand visit patterns, we use essential cookies and similar technologies. You can accept all or decline non-essential cookies — declining does not affect browsing.",
    accept: "Accept All",
    reject: "Reject All",
  },
  theme: {
    light: "Light",
    dark: "Dark",
    auto: "System",
    ariaLabel: "Theme mode",
  },
  locale: {
    zh: "中文",
    en: "English",
  },
};
