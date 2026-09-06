/**
 * 项目数据：只管理「结构」——id、技术标签、链接、精选标记与展示顺序。
 *
 * 项目的名称与描述（中英文）不在这里，而在 lib/i18n/locales/ 中：
 *   - 企业项目 → zh.ts / en.ts 的 enterprise.projects.<id>
 *   - 开源项目 → zh.ts / en.ts 的 github.projects.<id>
 *   - id 一一对应，例如 ceTelephone → enterprise.projects.ceTelephone
 *
 * 类型绑定：data 里每个 id 都必须在 zh / en 两份文案中存在，
 * 漏写任何一处的文案都会编译报错（这就是防中英文漂移的机制）。
 *
 * ── 如何新增一个项目 ─────────────────────────────────────────────
 *   1. 在下方对应数组里加一条：{ id: "xxx", tech: [...] }
 *   2. 保存后运行 tsc / build，会报错提示 zh.ts、en.ts 缺少 xxx 的文案
 *   3. 到 locales 两个文件里补上 { name, description }，报错即消失
 * ── 如何调整展示 ─────────────────────────────────────────────────
 *   改数组里条目的顺序 = 调卡片顺序；删掉条目 = 下架；改 tech = 换技术标签。
 */

export interface Project<Id extends string = string> {
  /** 唯一 id（驼峰命名），对应 i18n 文案 enterprise.projects / github.projects 下的 key */
  id: Id;
  /** 卡片底部的技术标签，最多展示 5 个，超出显示 +N（语言无关，中英文共用） */
  tech: string[];
  /** 项目链接：仅「开源项目」区块会渲染成外链卡片；企业项目区块不渲染链接 */
  link?: string;
  /** 是否「精选」：卡片显示精选角标，常用于重点项目 */
  highlight?: boolean;
}

/** 校验数组元素形状，同时保留每个元素的 id 字面量类型（用于推导 id 联合类型，供文案查找表类型绑定） */
function defineProjects<const T extends readonly Project[]>(items: T): T {
  return items;
}

/** 企业精选项目（页面「近期企业项目」区块，渲染顺序 = 数组顺序） */
export const enterpriseProjects = defineProjects([
  {
    // ce-telephone SDK（呼叫中心软电话 SDK）
    id: "ceTelephone",
    tech: ["TypeScript", "Rollup", "WebSocket", "SDK"],
    highlight: true,
  },
  {
    // 企业 AI 应用平台（Enterprise AI Application Platform）
    id: "enterpriseAiPlatform",
    tech: ["React", "Next.js", "Rspack", "Ant Design", "ECharts"],
    highlight: true,
  },
  {
    // 消费金融管理系统（Consumer Finance Management System）
    id: "consumerFinance",
    tech: ["React", "Ant Design", "TypeScript"],
    highlight: true,
  },
  {
    // 资金管理平台（Fund Management Platform）
    id: "fundManagement",
    tech: ["React", "Ant Design", "ECharts"],
  },
  {
    // AI 智检系统（AI Quality Inspection System）
    id: "aiQualityInspection",
    tech: ["React", "Ant Design", "AI"],
    highlight: true,
  },
  {
    // 智能外呼系统（Intelligent Outbound Calling System）
    id: "intelligentOutbound",
    tech: ["Vue", "React", "ECharts"],
  },
  {
    // CRM 客户管理（CRM Customer Management）
    id: "crm",
    tech: ["Vue 3", "Vite", "Pinia", "ECharts"],
  },
  {
    // 短剧内容平台（Short Drama Content Platform）
    id: "shortDrama",
    tech: ["React", "Ant Design"],
  },
  {
    // 国际化消费金融平台（International Consumer Finance Platform）
    id: "intlConsumerFinance",
    tech: ["React", "Next.js", "Ant Design"],
  },
]);

/** 开源项目（页面「开源项目」区块，渲染顺序 = 数组顺序；link 会渲染为外链卡片） */
export const githubProjects = defineProjects([
  {
    // 路径约束 3D 卡片轨道轮播（React / Vue npm 包）
    id: "cardOrbit",
    tech: ["React", "Vue", "TypeScript", "npm"],
    link: "https://github.com/Luzhaotian/fxshelf/tree/main/packages/card-orbit",
    highlight: true,
  },
  {
    // 智能招聘助手（AI 简历分析与岗位匹配）
    id: "hireHelper",
    tech: ["JavaScript", "AI Agent"],
    link: "https://github.com/Luzhaotian/hire-helper",
    highlight: true,
  },
  {
    // 前端智能体（AI 驱动的前端开发自动化）
    id: "feAgent",
    tech: ["TypeScript", "AI Agent"],
    link: "https://github.com/Luzhaotian/fe-agent",
    highlight: true,
  },
  {
    // 通用代理插件系统
    id: "agentHub",
    tech: ["JavaScript", "Plugin System"],
    link: "https://github.com/Luzhaotian/agent-hub",
  },
  {
    // Vue 3 + Vite + VueUse + Tailwind 脚手架模板
    id: "viteVueTemplate",
    tech: ["Vue 3", "Vite", "Tailwind CSS"],
    link: "https://github.com/Luzhaotian/vite-vue3-vueuse-tailwindcss",
  },
  {
    // Element UI 文件预览组件包
    id: "elementFilePreview",
    tech: ["Vue 2", "npm"],
    link: "https://github.com/Luzhaotian/element-file-preview",
  },
  {
    // React + Ant Design 日志管理组件
    id: "reactAntdLog",
    tech: ["React", "Ant Design", "TypeScript"],
    link: "https://github.com/Luzhaotian/react-antd-log",
  },
  {
    // Chrome 扩展：复制与管理 Cookie
    id: "cookiesCopy",
    tech: ["JavaScript", "Chrome Extension"],
    link: "https://github.com/Luzhaotian/CookiesCopy",
  },
  {
    // 微信小程序（UniApp 跨端）
    id: "caidianfangUniapp",
    tech: ["UniApp", "Vue", "WeChat Mini Program"],
    link: "https://github.com/Luzhaotian/caidianfang-uniapp",
  },
  {
    // 工时记录小程序
    id: "workDiary",
    tech: ["Vue", "WeChat Mini Program"],
    link: "https://github.com/Luzhaotian/work-diary",
  },
]);

/** 企业项目 id 联合类型（供 i18n 文案查找表 Record<EnterpriseProjectId, ...> 绑定） */
export type EnterpriseProjectId = (typeof enterpriseProjects)[number]["id"];
/** 开源项目 id 联合类型（同上） */
export type GithubProjectId = (typeof githubProjects)[number]["id"];
