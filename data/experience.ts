/**
 * 经验领域数据：只管理「结构」——领域 id、图标与展示顺序。
 *
 * 领域标题与描述的中英文文案不在这里，而在 lib/i18n/locales/ 中：
 *   - zh.ts / en.ts 的 experience.domains.<id> = { title, description }
 *   - 例：fintech → experience.domains.fintech
 *
 * 类型绑定：data 里每个 id 都必须在 zh / en 两份文案中存在，漏写会编译报错。
 *
 * ── 如何新增一个领域 ─────────────────────────────────────────────
 *   1. 在下方数组里加一条：{ id: "xxx", icon: "🎯" }
 *   2. 保存后 tsc 会报错，提示 zh.ts、en.ts 缺少 xxx 的文案
 *   3. 到 locales 补上 { title, description }，报错即消失
 * ── 如何调整展示 ─────────────────────────────────────────────────
 *   改数组顺序 = 调卡片顺序；删条目 = 下架；换 icon = 换卡片图标。
 */

export interface ExperienceDomain<Id extends string = string> {
  /** 唯一 id（驼峰命名），对应 i18n 文案 experience.domains 下的 key */
  id: Id;
  /** 卡片左侧的图标 emoji（语言无关，中英文共用） */
  icon: string;
}

/** 校验数组元素形状，同时保留 id 字面量类型（用于推导 id 联合类型，供文案查找表类型绑定） */
function defineDomains<const T extends readonly ExperienceDomain[]>(items: T): T {
  return items;
}

/** 经验领域（页面「经验领域」区块，渲染顺序 = 数组顺序） */
export const experienceDomains = defineDomains([
  { id: "fintech", icon: "💰" }, // 金融科技（Fintech）
  { id: "aiMcp", icon: "🤖" }, // AI 应用与 MCP（AI Applications & MCP）
  { id: "enterpriseSaas", icon: "🏢" }, // 企业 SaaS（Enterprise SaaS）
  { id: "dataViz", icon: "📊" }, // 数据可视化（Data Visualization）
  { id: "mobileMiniPrograms", icon: "📱" }, // 移动端 & 小程序（Mobile & Mini Programs）
  { id: "engineeringOss", icon: "⚙️" }, // 工程化 & 开源（Engineering & Open Source）
]);

/** 经验领域 id 联合类型（供 i18n 文案查找表 Record<ExperienceDomainId, ...> 绑定） */
export type ExperienceDomainId = (typeof experienceDomains)[number]["id"];
