export interface Project {
  name: string;
  description: string;
  tech: string[];
  category: "enterprise" | "github";
  link?: string;
  highlight?: boolean;
}

export const enterpriseProjects: Project[] = [
  {
    name: "ce-telephone SDK",
    description:
      "呼叫中心软电话 TypeScript SDK，封装 WebSocket 信令、通话状态管理与事件驱动 API，支持 3PCC 呼叫模式，以 Rollup 构建并发布 npm 包。",
    tech: ["TypeScript", "Rollup", "WebSocket", "SDK"],
    category: "enterprise",
    highlight: true,
  },
  {
    name: "企业 AI 应用平台",
    description:
      "企业级 AI 应用平台，集成大模型能力，支持智能对话、工作流编排与知识库管理。",
    tech: ["React", "Next.js", "Rspack", "Ant Design", "ECharts"],
    category: "enterprise",
    highlight: true,
  },
  {
    name: "消费金融管理系统",
    description: "消费金融核心业务管理系统，涵盖用户管理、订单流转、风控审核等模块。",
    tech: ["React", "Ant Design", "TypeScript"],
    category: "enterprise",
    highlight: true,
  },
  {
    name: "资金管理平台",
    description: "资金流转与账务管理平台，实时数据监控与多维度报表分析。",
    tech: ["React", "Ant Design", "ECharts"],
    category: "enterprise",
  },
  {
    name: "AI 智检系统",
    description: "基于 AI 的智能质检平台，自动化检测通话与服务质量，提升运营效率。",
    tech: ["React", "Ant Design", "AI"],
    category: "enterprise",
    highlight: true,
  },
  {
    name: "智能外呼系统",
    description: "智能外呼与呼叫中心管理平台，支持任务调度、话术配置与通话数据分析。",
    tech: ["Vue", "React", "ECharts"],
    category: "enterprise",
  },
  {
    name: "CRM 客户管理",
    description: "客户关系管理系统，支持线索跟进、客户画像与销售业绩追踪。",
    tech: ["Vue 3", "Vite", "Pinia", "ECharts"],
    category: "enterprise",
  },
  {
    name: "OMS 订单管理",
    description: "订单管理系统，覆盖订单全生命周期与库存联动。",
    tech: ["Vue 3", "Vite", "Pinia"],
    category: "enterprise",
  },
  {
    name: "短剧内容平台",
    description: "短剧内容管理与运营后台，支持内容上架、数据统计与用户分析。",
    tech: ["React", "Ant Design"],
    category: "enterprise",
  },
  {
    name: "投顾管理系统",
    description: "投资顾问业务管理平台，数据可视化与业绩分析。",
    tech: ["React", "Ant Design", "ECharts"],
    category: "enterprise",
  },
  {
    name: "国际化消费金融平台",
    description: "国际化消费金融平台，多语言支持与跨境业务管理。",
    tech: ["React", "Next.js", "Ant Design"],
    category: "enterprise",
  },
  {
    name: "保险 H5",
    description: "移动端保险产品展示与投保流程，优化 C 端用户体验。",
    tech: ["Vue", "TypeScript"],
    category: "enterprise",
  },
  {
    name: "广告管理平台",
    description: "广告投放与素材管理系统，支持多渠道投放策略配置。",
    tech: ["React", "Ant Design"],
    category: "enterprise",
  },
];

export const githubProjects: Project[] = [
  {
    name: "hire-helper",
    description: "智能招聘助手，基于 AI 的简历分析与岗位匹配工具。",
    tech: ["JavaScript", "AI Agent"],
    category: "github",
    link: "https://github.com/Luzhaotian/hire-helper",
    highlight: true,
  },
  {
    name: "fe-agent",
    description: "前端智能体，探索 AI 驱动的前端开发自动化与工作流。",
    tech: ["TypeScript", "AI Agent"],
    category: "github",
    link: "https://github.com/Luzhaotian/fe-agent",
    highlight: true,
  },
  {
    name: "agent-hub",
    description: "通用代理插件系统，可扩展的 Agent 能力编排框架。",
    tech: ["JavaScript", "Plugin System"],
    category: "github",
    link: "https://github.com/Luzhaotian/agent-hub",
  },
  {
    name: "vite-vue3-vueuse-tailwindcss",
    description: "Vue 3 + Vite + VueUse + Tailwind CSS 现代化脚手架模板。",
    tech: ["Vue 3", "Vite", "Tailwind CSS"],
    category: "github",
    link: "https://github.com/Luzhaotian/vite-vue3-vueuse-tailwindcss",
  },
  {
    name: "element-file-preview",
    description: "基于 Element UI 的文件预览 npm 组件包，支持多种文件格式。",
    tech: ["Vue 2", "npm"],
    category: "github",
    link: "https://github.com/Luzhaotian/element-file-preview",
  },
  {
    name: "react-antd-log",
    description: "React + Ant Design 日志管理组件，结构化日志展示与筛选。",
    tech: ["React", "Ant Design", "TypeScript"],
    category: "github",
    link: "https://github.com/Luzhaotian/react-antd-log",
  },
  {
    name: "CookiesCopy",
    description: "Chrome 浏览器扩展，便捷复制与管理 Cookie 信息。",
    tech: ["JavaScript", "Chrome Extension"],
    category: "github",
    link: "https://github.com/Luzhaotian/CookiesCopy",
  },
  {
    name: "caidianfang-uniapp",
    description: "微信小程序，基于 UniApp 跨端开发框架。",
    tech: ["UniApp", "Vue", "微信小程序"],
    category: "github",
    link: "https://github.com/Luzhaotian/caidianfang-uniapp",
  },
  {
    name: "work-diary",
    description: "工时记录小程序，简洁高效的日常工时追踪工具。",
    tech: ["Vue", "微信小程序"],
    category: "github",
    link: "https://github.com/Luzhaotian/work-diary",
  },
];
