export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
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
];
