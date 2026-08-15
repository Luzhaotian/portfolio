/**
 * 技能数据：只管理「结构」——分类 id、每个分类下的技能 id 与展示顺序。
 *
 * 分类名与技能标签的中英文文案不在这里，而在 lib/i18n/locales/ 中：
 *   - 分类名 → zh.ts / en.ts 的 skills.categories.<分类id>.name
 *   - 技能标签 → skills.categories.<分类id>.skills.<技能id>
 *   - 例：vue23 → skills.categories.coreFrameworks.skills.vue23 = "Vue 2/3"
 *
 * 类型绑定：data 里每个 id 都必须在 zh / en 两份文案中存在，漏写会编译报错。
 *
 * ── 如何新增一个技能 ─────────────────────────────────────────────
 *   1. 在对应分类的 skillIds 里加一个 id（如 "vitePlugin"）
 *   2. 保存后 tsc 会报错，提示 zh.ts、en.ts 缺该 id 的标签
 *   3. 到 locales 该分类的 skills 下补上标签文案，报错即消失
 * ── 展示规则 ─────────────────────────────────────────────────────
 *   第一个分类（coreFrameworks）在页面上渲染为大卡片（Bento 主格），
 *   其余分类为小卡片；分类与技能的展示顺序 = 数组顺序。
 */

export interface SkillCategory<
  Id extends string = string,
  SkillId extends string = string,
> {
  /** 唯一 id（驼峰命名），对应 i18n 文案 skills.categories 下的 key */
  id: Id;
  /** 该分类下的技能 id 列表（决定展示顺序），对应 skills.categories.<id>.skills 下的 key */
  skillIds: SkillId[];
}

/** 校验数组元素形状，同时保留 id 字面量类型（用于推导 id 联合类型，供文案查找表类型绑定） */
function defineCategories<const T extends readonly SkillCategory[]>(items: T): T {
  return items;
}

/** 技能分类（页面「技术栈」Bento 区块；第一项渲染为大卡片，其余为小卡片） */
export const skillCategories = defineCategories([
  {
    // 核心框架（Core Frameworks）—— 大卡片
    id: "coreFrameworks",
    skillIds: ["vue23", "react1819", "nextjs", "typescript", "pinia", "vuex"],
  },
  {
    // UI 组件库（UI Libraries）
    id: "uiLibraries",
    skillIds: ["antDesign", "elementPlus", "tailwindCss", "antDesignMobile"],
  },
  {
    // 构建工具（Build Tools）
    id: "buildTools",
    skillIds: ["vite", "webpack", "rspack", "rollup", "babel", "eslint"],
  },
  {
    // 数据可视化（Data Visualization）
    id: "dataVisualization",
    skillIds: ["echarts", "threeJs", "d3js", "canvas", "svg"],
  },
  {
    // 跨端 & 扩展（Cross-platform & Extensions）
    id: "crossPlatform",
    skillIds: ["wechatMiniProgram", "uniapp", "chromeExtension", "mobileH5"],
  },
  {
    // AI & 智能化（AI & Automation）
    id: "aiAutomation",
    skillIds: [
      "aiAgent",
      "openapi",
      "llmIntegration",
      "agentOrchestration",
      "promptEngineering",
    ],
  },
  {
    // 后端协作（Backend Collaboration）
    id: "backendCollaboration",
    skillIds: [
      "restfulApi",
      "graphql",
      "nodejs",
      "javaCollaboration",
      "microFrontends",
    ],
  },
  {
    // 工程实践（Engineering Practices）
    id: "engineeringPractices",
    skillIds: [
      "git",
      "cicd",
      "monorepo",
      "performanceOptimization",
      "unitTesting",
      "codeReview",
    ],
  },
]);

/** 技能分类 id 联合类型（供 i18n 文案查找表类型绑定） */
export type SkillCategoryId = (typeof skillCategories)[number]["id"];
/** 全部技能 id 联合类型 */
export type SkillId = (typeof skillCategories)[number]["skillIds"][number];

/** 某个分类下的技能 id 联合类型（用于收紧该分类的文案查找表类型） */
export type CategorySkillIds<C extends SkillCategoryId> = Extract<
  (typeof skillCategories)[number],
  { id: C }
>["skillIds"][number];
