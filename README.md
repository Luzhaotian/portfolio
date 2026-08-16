# 卢照天 · 个人作品集

卢照天（Luzhaotian）的个人作品集网站 — 基于 **Next.js 15** 的单页应用，展示 8 年前端经验、技术栈、精选企业项目、开源作品与技术博客。

当前版本：**v1.0.0**（视觉大改前基线已打 tag；其后为「静奢工作室」方向的整站改版）。

本地预览：[http://localhost:3000](http://localhost:3000)（需先执行 `npm run dev`）

**在线地址：** [https://luzhaotian.github.io/portfolio/](https://luzhaotian.github.io/portfolio/)

## 功能特性

- **静奢工作室**气质：大留白、衬线标题、氧化铜金强调色；无玻璃拟态堆叠、无 Vanta 全屏背景
- 响应式单页：Hero → 精选 → 关于 → 作品索引 → 技能 → 博客 → 经验领域
- **中英文切换**：导航栏语言切换（中文 / English），偏好持久化到 `localStorage`
- 主题切换：白天 / 夜晚 / 自动（跟随系统），偏好持久化到 `localStorage`
- 移动端适配：UnoCSS 媒体查询 + `useViewport`；窄屏降级 Canvas 特效
- Canvas 材质感记忆点：
  - Hero **ParticleObject**（`brand-particles.svg` 粒子造型，桌面端）
  - 全页 **GlyphRain** 字符雨氛围（桌面端）
  - 精选项目 **FlameWrap** hover 材质（桌面端）
  - **PointerAura** 跟随光晕
- CSDN 博客展示：抓取点赞最多的文章（`npm run fetch:blogs`）；GitHub Actions 每日自动更新
- 回到顶部、Cookie 提示、SEO（Metadata / OpenGraph / 跳过导航）
- 内容数据化：`data/` 管结构，`lib/i18n/locales/` 管文案，类型系统保证 id 与双语一一对应

## 页面结构

| 导航标签 | 区块           | 锚点           | 说明                                           |
| -------- | -------------- | -------------- | ---------------------------------------------- |
| —        | Hero           | `#top`         | 姓名、主张、CTA；桌面端 ParticleObject 粒子背景 |
| 精选     | 近期企业项目   | `#selected`    | `highlight` 企业项目全宽章节（FlameWrap）      |
| 关于     | 关于我         | `#about`       | 个人简介与 GitHub 入口                         |
| 作品     | 作品索引       | `#work`        | 企业 + 开源项目列表行（非卡片网格）            |
| 技能     | 技术栈         | `#skills`      | 按分类展示技能                                 |
| 博客     | 技术博客       | `#blog`        | CSDN 点赞最多的文章                            |
| 领域     | 经验领域       | `#experience`  | 业务与技术方向（含 AI 应用与 MCP）             |

## 技术栈

| 类别   | 技术                                                         |
| ------ | ------------------------------------------------------------ |
| 框架   | Next.js 15（App Router）+ React 19                           |
| 语言   | TypeScript 5                                                 |
| 样式   | UnoCSS 66 + `@unocss/preset-wind3` + PostCSS                 |
| 国际化 | 自研 i18n（`lib/i18n` + `I18nProvider`）                     |
| Canvas | WebGL 组件（`components/canvasui/*`，Three.js 辅助部分效果） |
| 字体   | Geist Sans / Mono + Fraunces + Noto Serif SC（`next/font`）  |
| 规范   | ESLint、Prettier、Husky、lint-staged、Commitlint             |

## 环境要求

- Node.js 20+（与 CI 保持一致）
- npm 9+

## 本地开发

```bash
npm install
npm run dev
```

若遇到 `.next` 缓存异常，使用 `npm run dev:clean` 清理后启动。

## 常用命令

| 命令                   | 说明                                   |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | 启动开发服务器                         |
| `npm run dev:clean`    | 清理 `.next` 缓存后启动开发服务器      |
| `npm run build`        | 生产构建                               |
| `npm run preview`      | 模拟 GitHub Pages 构建并本地预览静态站 |
| `npm start`            | 启动 Next.js 生产服务器（非静态导出）  |
| `npm run fetch:blogs`  | 从 CSDN 抓取点赞最多的博客并更新数据   |
| `npm run lint`         | ESLint 检查                            |
| `npm run lint:fix`     | ESLint 自动修复                        |
| `npm run format`       | Prettier 格式化                        |
| `npm run format:check` | Prettier 格式检查                      |
| `npm run clean`        | 删除 `.next` 构建缓存                  |

## 项目结构

```
app/
  layout.tsx              # 根布局、SEO metadata、主题 / 语言防闪烁
  page.tsx                # 首页（组合各区块 + 氛围层）
  globals.css             # UnoCSS 注入入口（@unocss all）
components/
  I18nProvider.tsx        # 国际化 Context
  LocaleToggle.tsx        # 语言切换
  ThemeProvider.tsx       # 主题状态（白天 / 夜晚 / 自动）
  ThemeToggle.tsx         # 主题切换
  ViewportSync.tsx        # 视口状态同步到 <html data-viewport>
  PointerAura.tsx         # 指针跟随光晕
  PageDroplets.tsx        # 全页 GlyphRain 包装
  NavBar.tsx              # 导航（滚动高亮 + 语言 / 主题）
  HeroSection.tsx         # 首屏 + ParticleObject
  SelectedProjects.tsx    # 精选企业项目章节
  AboutSection.tsx        # 关于
  WorkIndex.tsx           # 作品索引列表
  SkillsSection.tsx       # 技能
  BlogSection.tsx         # CSDN 博客
  ExperienceSection.tsx   # 经验领域
  SectionHeader.tsx       # 区块标题
  FooterSection.tsx       # 页脚
  BackToTop.tsx / CookieConsent.tsx / SkipLink.tsx
  canvasui/               # Canvas UI 效果（ParticleObject、GlyphRain、FlameWrap 等）
data/
  profile.ts / projects.ts / skills.ts / experience.ts / blogs.ts
lib/
  i18n/                   # locale 常量、类型、zh / en 文案
  site.ts                 # GitHub Pages basePath（含客户端 NEXT_PUBLIC_BASE_PATH）
  theme.ts / breakpoints.ts / format.ts / hooks/useViewport.ts
public/
  favicon.svg
  brand-particles.svg     # Hero ParticleObject 源图
docs/design/              # 设计方案文档
scripts/
  fetch-csdn-blogs.mjs
uno.config.ts             # 双主题变量、shortcuts、preflights
next.config.ts            # 静态导出；注入 NEXT_PUBLIC_BASE_PATH
.github/workflows/
  deploy.yml              # GitHub Pages CI 部署
  update-blogs.yml        # 每日定时抓取博客
.husky/
```

## 自定义内容

### 内容与文案的分工（key 引用模型）

- `data/`：管理**结构数据**——条目 id、技术标签、链接、图标与展示顺序，不含任何中英文文案
- `lib/i18n/locales/`：中英文**文案**，按 `data/` 中的 id 组织成查找表

调整展示内容（增删条目、改技术标签、改链接、调顺序）只改 `data/`；修改文字只改 locales。

### 类型绑定（防漏写）

`data/` 中的每个 id 都由 TypeScript 与 zh / en 两份文案**硬性绑定**：在 `data/` 加条目后，漏写任一语言文案会在 `tsc` / 构建时报错。

### 数据文件（data/）

| 文件            | 说明                                                                                 |
| --------------- | ------------------------------------------------------------------------------------ |
| `profile.ts`    | 语言无关的个人配置：GitHub 链接、工作年限（姓名、简介等文案在 locales）              |
| `projects.ts`   | 企业项目 `enterpriseProjects` 与开源项目 `githubProjects`（id / tech / 链接 / 精选） |
| `skills.ts`     | 技能分类 `skillCategories`                                                           |
| `experience.ts` | 经验领域 `experienceDomains`                                                         |
| `blogs.ts`      | CSDN 博客列表（本地 `npm run fetch:blogs`，或 CI 每日自动更新）                      |

企业项目描述建议使用通用业务名称，避免在公开站点展示敏感公司或产品名称。

精选区块只渲染 `highlight: true` 的企业项目；其余企业与开源项目出现在 `#work` 索引中。

### 文案文件（lib/i18n/locales/）

| 文件    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| `zh.ts` | 中文文案（默认语言）                                         |
| `en.ts` | 英文文案，结构与 `zh.ts` 一致                                |
| `types.ts` | `LocaleMessages`；内容查找表类型与 data id 绑定（缺 key 报错） |

语言偏好存储键：`portfolio-locale`（值为 `zh` / `en`）。

## 样式体系（UnoCSS）

### 架构

```
layout.tsx
  ├── 内联 themeInitScript     # 防主题闪烁
  ├── 内联 localeInitScript    # 防语言 / lang 闪烁
  ├── @unocss/reset/tailwind.css
  └── globals.css (@unocss all)

postcss.config.cjs → postcss-unocss.cjs → uno.config.ts
```

### 三层样式

| 层级       | 位置             | 用途                                            |
| ---------- | ---------------- | ----------------------------------------------- |
| 原子类     | 组件 `className` | Wind 兼容工具类 + 语义化类（`text-heading` 等） |
| shortcuts  | `uno.config.ts`  | 复用组合类                                      |
| preflights | `uno.config.ts`  | 双主题 CSS 变量、全局基础样式、动画 keyframes   |

### 主要 shortcuts

| 类名                              | 用途                         |
| --------------------------------- | ---------------------------- |
| `text-heading` / `text-body`      | 标题 / 正文色                |
| `text-muted` / `text-faint`       | 次要 / 辅助文字色            |
| `border-divider`                  | 分隔线 / 边框色              |
| `section-shell` / `section-inner` | 区块外层 / 内容容器          |
| `section-shell-mute`              | 交替浅底章节                 |
| `section-title` / `section-subtitle` / `section-eyebrow` | 区块标题体系 |
| `tech-tag` / `tech-chip`          | 技术标签                     |
| `text-link` / `text-link-muted`   | 文字链 CTA（非 pill 按钮）   |
| `index-row`                       | 作品索引行                   |
| `nav-link`                        | 导航链接                     |
| `hero-glow` / `hero-mesh` / `page-noise` | Hero / 页面氛围层     |
| `pointer-aura*`                    | 指针光晕层                   |
| `focus-ring` / `skip-link`        | 焦点环 / 跳过导航            |

新增组件级样式时，优先在 `uno.config.ts` 的 `shortcuts` / `rules` 中扩展。

### 双主题

通过 `<html data-theme="light|dark">` 切换；偏好键：`portfolio-theme`（`light` / `dark` / `auto`）。

Cookie 同意：`portfolio-cookie-consent`（`accepted` / `rejected`）。

强调色为**氧化铜金**（非 Teal）：

| 变量（节选）         | 白天      | 夜晚      |
| -------------------- | --------- | --------- |
| `--color-background` | `#eef1f5` | `#0e0f12` |
| `--color-surface`    | `#e4e9f0` | `#16181d` |
| `--theme-accent`     | `#8f7355` | `#a68968` |

修改主题色时同步 `uno.config.ts` 的 preflights，以及 Hero / GlyphRain 等组件内的硬编码配色。

## 视觉与 Canvas

| 层              | 组件              | 说明                                                         |
| --------------- | ----------------- | ------------------------------------------------------------ |
| Hero 粒子造型   | `ParticleObject`  | 读取 `public/brand-particles.svg`；桌面端启用，移动端关闭    |
| 全页字符雨      | `GlyphRain`       | `PageDroplets` 包装；桌面端启用                              |
| 精选 hover      | `FlameWrap`       | 精选项目章节桌面端材质                                       |
| 指针光晕        | `PointerAura`     | 跟随光标；粗指针 / 减少动效时关闭                            |
| 纸感噪点        | `page-noise`      | 固定全屏极淡颗粒                                             |

- **无障碍**：`prefers-reduced-motion` 时关闭 Canvas 与光晕动效
- GitHub Pages 下静态资源路径依赖 `basePath`：构建时由 `next.config.ts` 注入 `NEXT_PUBLIC_BASE_PATH`（客户端可用），避免 `/brand-particles.svg` 404

仓库内仍保留未接入首页的 `VantaBackground*` 与部分 `canvasui` 实验组件，可按需复用，**当前线上页未使用 Vanta**。

## 交互组件

### 语言切换（`LocaleToggle`）

- 写入 `localStorage`（`portfolio-locale`），并更新 `<html lang>` 与页面标题
- `layout.tsx` 内联 `localeInitScript` 防止首屏语言闪烁

### 回到顶部（`BackToTop`）

- 滚动超过阈值后显示；「减少动效」时改为瞬间跳转

### Cookie 提示（`CookieConsent`）

- 「全部接受 / 全部拒绝」等权重；调试可执行 `localStorage.removeItem('portfolio-cookie-consent')`

## 代码规范与 Git 校验

集成 **Prettier**、**ESLint**、**Husky**、**lint-staged**、**Commitlint**。

| 钩子         | 行为                                            |
| ------------ | ----------------------------------------------- |
| `pre-commit` | 对暂存文件运行 ESLint + Prettier（lint-staged） |
| `commit-msg` | Commitlint 校验提交信息格式（中文 subject）     |

提交格式：`type: 中文说明`（Conventional Commits 前缀 + 中文描述）

```bash
git commit -m "feat: 搭建 Next.js 个人作品集"
git commit -m "fix: 修复 GitHub Pages 下粒子 SVG 路径"
git commit -m "docs: 更新 README"
```

## 构建与部署

### 本地生产预览

```bash
npm run build && npm start   # 标准 Next.js
npm run preview              # GitHub Pages 静态站预览（推荐）
```

### GitHub Pages（已配置 CI）

推送到 `main` 后由 `.github/workflows/deploy.yml` 自动构建部署。CI 会尝试 `fetch:blogs`（失败不阻断）。

定时工作流 `.github/workflows/update-blogs.yml`：每天 UTC 02:00（北京时间 10:00）抓取 CSDN；有变更则推送并触发 Pages 部署。

**首次启用：** Settings → Pages → Source 选 **GitHub Actions**，再推送或手动运行 Deploy 工作流。

```bash
GITHUB_PAGES=true npm run build
# 静态产物在 out/；basePath 为 /portfolio
```

### 其他平台

也可部署到 Vercel 等平台（无需 `GITHUB_PAGES`，支持完整 Next.js 运行时）。

## 相关链接

- 在线站点：[https://luzhaotian.github.io/portfolio/](https://luzhaotian.github.io/portfolio/)
- 仓库：[https://github.com/Luzhaotian/portfolio](https://github.com/Luzhaotian/portfolio)
- 发布 tag：[`v1.0.0`](https://github.com/Luzhaotian/portfolio/releases/tag/v1.0.0)
- CSDN 博客：[https://blog.csdn.net/paopao_pop](https://blog.csdn.net/paopao_pop)
- 设计文档：`docs/design/`
- UnoCSS：[https://unocss.dev](https://unocss.dev)
- Next.js：[https://nextjs.org](https://nextjs.org)

## License

见 [LICENSE](./LICENSE) 文件。
