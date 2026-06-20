import type { LocaleMessages } from "../types";

export const zh: LocaleMessages = {
  meta: {
    title: "卢照天 | 高级前端工程师",
    description:
      "卢照天（Luzhaotian）— 8 年经验的高级前端工程师，专注 React/Vue 生态、金融科技、AI 应用与企业 SaaS 平台开发。",
  },
  common: {
    skipLink: "跳到主要内容",
    backToTop: "回到顶部",
    viewRepo: "查看仓库",
    readMore: "阅读全文",
    featured: "精选",
    hot: "热门",
    visitGithub: "访问 GitHub",
    viewCsdn: "查看 CSDN 主页",
    yearsExp: "年前端开发经验",
    yearsExpShort: "年经验",
    footerTech: "Next.js · UnoCSS · Vanta.js",
  },
  nav: [
    { href: "#about", label: "关于" },
    { href: "#skills", label: "技能" },
    { href: "#enterprise", label: "企业精选" },
    { href: "#github", label: "开源项目" },
    { href: "#blog", label: "博客" },
    { href: "#experience", label: "经验领域" },
  ],
  navAria: {
    main: "主导航",
    footer: "页脚导航",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
  },
  hero: {
    role: "Senior Frontend Engineer",
    viewResume: "查看履历",
    github: "GitHub",
  },
  profile: {
    name: "卢照天",
    title: "高级前端工程师",
    tagline: "构建高性能、可扩展的前端应用 · 金融科技 · AI 应用 · 企业 SaaS",
    highlights: [
      { label: "前端经验", value: "8 年" },
      { label: "企业级项目", value: "20+" },
      { label: "GitHub 仓库", value: "13" },
      { label: "双栈主力", value: "Vue + React" },
    ],
  },
  about: {
    index: "01 — ABOUT",
    title: "关于我",
    subtitle: "专注前端工程化与业务落地的资深开发者",
    headline: "用工程化思维交付",
    headlineHighlight: "可扩展、可维护",
    headlineEnd: "的前端系统",
    location: "中国",
    summary: [
      "拥有 8 年前端开发经验，专注于 React / Vue 生态与现代工程化体系，擅长复杂 B 端管理系统、数据可视化与 AI 应用落地。",
      "主导并参与多个大型企业核心业务平台的前端架构与开发，涵盖金融科技、智能外呼、CRM、AI 质检、短剧内容平台等领域。",
      "持续探索 AI Agent、OpenAPI 集成与前端智能化工具链，GitHub 上维护多个开源项目，包括智能招聘助手、前端智能体等。",
    ],
  },
  skills: {
    index: "02 — SKILLS",
    title: "技术栈",
    subtitle: "从 GitHub 开源与企业级平台中沉淀的全栈前端能力",
    featuredDesc: "双栈深耕，覆盖现代 Web 应用核心链路",
    categories: [
      {
        name: "核心框架",
        skills: ["Vue 2/3", "React 18/19", "Next.js", "TypeScript", "Pinia", "Vuex"],
      },
      {
        name: "UI 组件库",
        skills: ["Ant Design", "Element Plus", "Tailwind CSS", "Ant Design Mobile"],
      },
      {
        name: "构建工具",
        skills: ["Vite", "Webpack", "Rspack", "Rollup", "Babel", "ESLint"],
      },
      {
        name: "数据可视化",
        skills: ["ECharts", "Three.js", "D3.js", "Canvas", "SVG"],
      },
      {
        name: "跨端 & 扩展",
        skills: ["微信小程序", "UniApp", "Chrome Extension", "H5 移动端"],
      },
      {
        name: "AI & 智能化",
        skills: ["AI Agent", "OpenAPI", "LLM 集成", "智能体编排", "Prompt Engineering"],
      },
      {
        name: "后端协作",
        skills: ["RESTful API", "GraphQL", "Node.js", "Java 协作", "微前端"],
      },
      {
        name: "工程实践",
        skills: ["Git", "CI/CD", "Monorepo", "性能优化", "单元测试", "Code Review"],
      },
    ],
  },
  enterprise: {
    index: "03 — ENTERPRISE",
    title: "近期企业项目",
    subtitle: "近年参与的代表性核心业务平台与管理系统",
    projects: [
      {
        name: "ce-telephone SDK",
        description:
          "呼叫中心软电话 TypeScript SDK，封装 WebSocket 信令、通话状态管理与事件驱动 API，支持 3PCC 呼叫模式，以 Rollup 构建并发布 npm 包。",
        tech: ["TypeScript", "Rollup", "WebSocket", "SDK"],
        highlight: true,
      },
      {
        name: "企业 AI 应用平台",
        description:
          "企业级 AI 应用平台，集成大模型能力，支持智能对话、工作流编排与知识库管理。",
        tech: ["React", "Next.js", "Rspack", "Ant Design", "ECharts"],
        highlight: true,
      },
      {
        name: "消费金融管理系统",
        description:
          "消费金融核心业务管理系统，涵盖用户管理、订单流转、风控审核等模块。",
        tech: ["React", "Ant Design", "TypeScript"],
        highlight: true,
      },
      {
        name: "资金管理平台",
        description: "资金流转与账务管理平台，实时数据监控与多维度报表分析。",
        tech: ["React", "Ant Design", "ECharts"],
      },
      {
        name: "AI 智检系统",
        description: "基于 AI 的智能质检平台，自动化检测通话与服务质量，提升运营效率。",
        tech: ["React", "Ant Design", "AI"],
        highlight: true,
      },
      {
        name: "智能外呼系统",
        description:
          "智能外呼与呼叫中心管理平台，支持任务调度、话术配置与通话数据分析。",
        tech: ["Vue", "React", "ECharts"],
      },
      {
        name: "CRM 客户管理",
        description: "客户关系管理系统，支持线索跟进、客户画像与销售业绩追踪。",
        tech: ["Vue 3", "Vite", "Pinia", "ECharts"],
      },
      {
        name: "短剧内容平台",
        description: "短剧内容管理与运营后台，支持内容上架、数据统计与用户分析。",
        tech: ["React", "Ant Design"],
      },
      {
        name: "国际化消费金融平台",
        description: "国际化消费金融平台，多语言支持与跨境业务管理。",
        tech: ["React", "Next.js", "Ant Design"],
      },
    ],
  },
  github: {
    index: "04 — OPEN SOURCE",
    title: "开源项目",
    subtitle: "GitHub 上的个人开源项目与技术探索",
    projects: [
      {
        name: "hire-helper",
        description: "智能招聘助手，基于 AI 的简历分析与岗位匹配工具。",
        tech: ["JavaScript", "AI Agent"],
        link: "https://github.com/Luzhaotian/hire-helper",
        highlight: true,
      },
      {
        name: "fe-agent",
        description: "前端智能体，探索 AI 驱动的前端开发自动化与工作流。",
        tech: ["TypeScript", "AI Agent"],
        link: "https://github.com/Luzhaotian/fe-agent",
        highlight: true,
      },
      {
        name: "agent-hub",
        description: "通用代理插件系统，可扩展的 Agent 能力编排框架。",
        tech: ["JavaScript", "Plugin System"],
        link: "https://github.com/Luzhaotian/agent-hub",
      },
      {
        name: "vite-vue3-vueuse-tailwindcss",
        description: "Vue 3 + Vite + VueUse + Tailwind CSS 现代化脚手架模板。",
        tech: ["Vue 3", "Vite", "Tailwind CSS"],
        link: "https://github.com/Luzhaotian/vite-vue3-vueuse-tailwindcss",
      },
      {
        name: "element-file-preview",
        description: "基于 Element UI 的文件预览 npm 组件包，支持多种文件格式。",
        tech: ["Vue 2", "npm"],
        link: "https://github.com/Luzhaotian/element-file-preview",
      },
      {
        name: "react-antd-log",
        description: "React + Ant Design 日志管理组件，结构化日志展示与筛选。",
        tech: ["React", "Ant Design", "TypeScript"],
        link: "https://github.com/Luzhaotian/react-antd-log",
      },
      {
        name: "CookiesCopy",
        description: "Chrome 浏览器扩展，便捷复制与管理 Cookie 信息。",
        tech: ["JavaScript", "Chrome Extension"],
        link: "https://github.com/Luzhaotian/CookiesCopy",
      },
      {
        name: "caidianfang-uniapp",
        description: "微信小程序，基于 UniApp 跨端开发框架。",
        tech: ["UniApp", "Vue", "微信小程序"],
        link: "https://github.com/Luzhaotian/caidianfang-uniapp",
      },
      {
        name: "work-diary",
        description: "工时记录小程序，简洁高效的日常工时追踪工具。",
        tech: ["Vue", "微信小程序"],
        link: "https://github.com/Luzhaotian/work-diary",
      },
    ],
  },
  blog: {
    index: "05 — BLOG",
    title: "技术博客",
    subtitle: "CSDN 上点赞最多的文章，分享前端工程化、AI 工具链与实战踩坑",
  },
  experience: {
    index: "06 — DOMAINS",
    title: "经验领域",
    subtitle: "8 年职业生涯中深耕的业务方向与技术实践",
    domains: [
      {
        title: "金融科技",
        description:
          "消费金融管理系统、资金管理平台、国际化信贷平台等核心业务系统，涵盖信贷、资金流转与跨境场景。",
        icon: "💰",
      },
      {
        title: "AI 应用与 MCP",
        description:
          "落地企业 AI 平台、智检系统与前端智能体，引入 AI Skills 与 MCP 工具链贯穿研发协作与外呼话术配置等环节，团队效率与交付质量整体提升约 30%。",
        icon: "🤖",
      },
      {
        title: "企业 SaaS",
        description: "CRM、智能外呼、短剧运营等 B 端平台，服务内部运营与业务团队。",
        icon: "🏢",
      },
      {
        title: "数据可视化",
        description:
          "基于 ECharts 构建实时数据大屏、业务报表与监控面板，支撑决策与运营分析。",
        icon: "📊",
      },
      {
        title: "移动端 & 小程序",
        description:
          "微信小程序、UniApp 跨端应用、保险 H5 等移动端项目，覆盖 C 端用户触达场景。",
        icon: "📱",
      },
      {
        title: "工程化 & 开源",
        description:
          "Vite / Webpack / Rspack 构建优化，Chrome 扩展、npm 组件库与 SDK 发布，持续输出技术方案。",
        icon: "⚙️",
      },
    ],
  },
  footer: {
    about: "关于",
    blog: "博客",
    csdn: "CSDN",
  },
  cookie: {
    title: "我们使用 Cookie",
    description:
      "为保障网站正常运行、记住您的主题偏好并了解访问情况，我们会使用必要 Cookie 及类似技术。您可以选择全部接受，或拒绝非必要 Cookie；拒绝后不影响浏览本站内容。",
    accept: "全部接受",
    reject: "全部拒绝",
  },
  theme: {
    light: "浅色",
    dark: "深色",
    auto: "跟随系统",
    ariaLabel: "主题模式",
  },
  locale: {
    zh: "中文",
    en: "English",
  },
};
