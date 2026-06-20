# 卢照天 · 个人作品集

卢照天（Luzhaotian）的个人作品集网站 — 基于 **Next.js 15** 的单页应用，展示 8 年前端经验、技术栈、企业项目、开源作品与技术博客。

本地预览：[http://localhost:3000](http://localhost:3000)（需先执行 `npm run dev`）

## 功能特性

- 响应式单页布局：深色主题、玻璃拟态卡片、Editorial 区块编排
- 移动端适配：UnoCSS 媒体查询 + `useViewport` 视口 Hook，窄屏自动切换布局
- 主题切换：白天 / 夜晚 / 自动（跟随系统），偏好持久化到 localStorage
- 单色 Teal 主题（`#14b8a6`），无渐变强调
- [UnoCSS](https://unocss.dev/) 原子化样式 + `shortcuts` 组件级快捷类
- [Vanta.js](https://github.com/tengbao/vanta) 3D 背景（桌面 BIRDS / 移动 NET，动态加载）
- CSDN 博客展示：自动抓取点赞最多的文章（`npm run fetch:blogs`）
- SEO：Next.js Metadata、OpenGraph、语义化 HTML、跳过导航链接
- 内容数据化：`data/` 目录维护简介、技能、项目、博客与经验领域

## 页面结构

| 区块         | 锚点          | 说明                                        |
| ------------ | ------------- | ------------------------------------------- |
| Hero         | —             | 姓名、职位、关键数据卡片                    |
| 关于         | `#about`      | 个人简介与 GitHub 入口                      |
| 技能         | `#skills`     | Bento 布局技术栈分类                        |
| 近期企业项目 | `#enterprise` | 9 项代表性企业级项目（含 ce-telephone SDK） |
| 开源项目     | `#github`     | GitHub 个人仓库与外链                       |
| 技术博客     | `#blog`       | CSDN 点赞最多的文章                         |
| 经验领域     | `#experience` | 6 个业务与技术方向（含 AI 应用与 MCP）      |

## 技术栈

| 类别    | 技术                                             |
| ------- | ------------------------------------------------ |
| 框架    | Next.js 15（App Router）+ React 19               |
| 语言    | TypeScript 5                                     |
| 样式    | UnoCSS 66 + `@unocss/preset-wind3` + PostCSS     |
| 3D 背景 | Three.js 0.134 + Vanta.js BIRDS                  |
| 字体    | Geist Sans / Geist Mono（`next/font`）           |
| 规范    | ESLint、Prettier、Husky、lint-staged、Commitlint |

## 环境要求

- Node.js 18+（推荐 20+）
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
  layout.tsx          # 根布局、SEO metadata、字体与全局样式入口
  page.tsx            # 首页（组合各区块）
  globals.css         # UnoCSS 注入入口（@unocss all）
components/
  VantaBackground.tsx         # Vanta 背景（动态加载，移动端 NET / 桌面 BIRDS）
  VantaBackgroundClient.tsx   # dynamic import，禁用 SSR
  ViewportSync.tsx            # 视口状态同步到 <html data-viewport>
  ContentCard.tsx             # 通用内容卡片（项目 / 博客复用）
  NavBar.tsx                  # 导航栏（滚动高亮当前区块）
  HeroSection.tsx             # 首屏
  AboutSection.tsx            # 关于
  SkillsSection.tsx           # 技能
  ProjectsSection.tsx         # 项目列表
  BlogSection.tsx             # CSDN 博客
  ExperienceSection.tsx       # 经验领域
  SectionHeader.tsx           # 区块标题
  FooterSection.tsx           # 页脚
data/
  profile.ts          # 个人信息、导航、经验领域
  skills.ts           # 技能分类
  projects.ts         # 企业项目与开源项目
  blogs.ts            # CSDN 博客（由 fetch:blogs 生成）
lib/
  breakpoints.ts      # 断点常量与 MEDIA_QUERIES
  format.ts           # 数字格式化工具
  hooks/useViewport.ts # 视口 Hook
  vantaThree.ts       # Three.js 兼容层（适配 Vanta.js）
scripts/
  fetch-csdn-blogs.mjs # CSDN 博客抓取脚本
types/
  vanta.d.ts          # Vanta 类型声明
public/
  favicon.svg
uno.config.ts         # UnoCSS 主题、shortcuts、rules、preflights
postcss.config.cjs    # PostCSS 配置
postcss-unocss.cjs    # UnoCSS PostCSS 桥接（兼容 Next.js require）
next.config.ts        # Next.js 配置
.husky/               # Git 钩子（pre-commit / commit-msg）
```

## 自定义内容

编辑 `data/` 即可更新站点内容，无需改动组件逻辑：

| 文件          | 说明                                                    |
| ------------- | ------------------------------------------------------- |
| `profile.ts`  | 姓名、职位、简介、GitHub、导航、经验领域（建议 ≤ 6 项） |
| `skills.ts`   | 技能分类与标签                                          |
| `projects.ts` | 企业项目（当前 9 项）与开源项目列表                     |
| `blogs.ts`    | CSDN 博客列表（运行 `npm run fetch:blogs` 自动更新）    |

企业项目描述建议使用通用业务名称，避免在公开站点展示敏感公司或产品名称。

## 样式体系（UnoCSS）

### 架构

```
layout.tsx
  ├── @unocss/reset/tailwind.css   # 基础 reset
  └── globals.css (@unocss all)    # PostCSS 生成最终 CSS

postcss.config.cjs → postcss-unocss.cjs → uno.config.ts
```

`postcss-unocss.cjs` 用于解决 Next.js 通过 `require()` 加载 `@unocss/postcss` 时的 ESM/CJS 兼容问题。

### 三层样式

| 层级       | 位置             | 用途                                                           |
| ---------- | ---------------- | -------------------------------------------------------------- |
| 原子类     | 组件 `className` | Wind 兼容工具类，如 `text-slate-400`、`hover:text-theme-light` |
| shortcuts  | `uno.config.ts`  | 复用组合类，见下表                                             |
| preflights | `uno.config.ts`  | 全局基础样式：`html`、`body`、`::selection`、动画 keyframes 等 |

### 常用 shortcuts

| 类名                                 | 用途                     |
| ------------------------------------ | ------------------------ |
| `glass-card`                         | 玻璃拟态卡片             |
| `glass-card-interactive`             | 可交互卡片（hover 动效） |
| `btn-primary` / `btn-ghost`          | 主按钮 / 幽灵按钮        |
| `section-shell` / `section-inner`    | 区块外层 / 内容容器      |
| `section-title` / `section-subtitle` | 区块标题 / 副标题        |
| `tech-tag`                           | 技术标签                 |
| `stat-card`                          | Hero 数据卡片            |
| `theme-text`                         | 主题色文字               |
| `focus-ring`                         | 焦点环样式               |
| `skip-link`                          | 跳过导航链接             |
| `bg-grid-pattern` / `bg-grid`        | 网格背景                 |

新增组件级样式时，优先在 `uno.config.ts` 的 `shortcuts` 中扩展，避免在 `globals.css` 写 `@apply`。

### 主题色

当前为 Teal 单色体系：

| 用途               | 色值      |
| ------------------ | --------- |
| 主色 `theme`       | `#14b8a6` |
| 浅色 `theme-light` | `#5eead4` |
| 背景 `background`  | `#050508` |
| 表面 `surface`     | `#0c0c14` |

修改主题时需同步以下文件：

| 文件                             | 修改项                                            |
| -------------------------------- | ------------------------------------------------- |
| `uno.config.ts`                  | `theme.colors.theme`、`preflights` 中的 `--theme` |
| `components/VantaBackground.tsx` | `color` / `color1` / `color2`（如 `0x14b8a6`）    |
| `public/favicon.svg`             | 图标填充色                                        |

## 背景特效

- **桌面端**：BIRDS（飞鸟），GPGPU 失败时自动回退 NET（粒子网格）
- **移动端**：直接使用 NET，减少性能开销
- **无障碍**：`prefers-reduced-motion` 时禁用 3D 背景
- Vanta 与 NET 均通过 `dynamic import` 按需加载

更换效果：编辑 `components/VantaBackground.tsx`，可选效果见 [vantajs.com](https://www.vantajs.com/)。

> Vanta.js 与新版 Three.js 存在兼容问题，项目锁定 `three@0.134.0`。升级前请先验证背景效果。

## 代码规范与 Git 校验

集成 **Prettier**、**ESLint**、**Husky**、**lint-staged**、**Commitlint**。

### 格式化

```bash
npm run format        # 格式化全部文件
npm run format:check  # 仅检查
npm run lint:fix      # ESLint 自动修复
```

推荐安装 `.vscode/extensions.json` 中的扩展（ESLint、Prettier 等）。

### Git 钩子

| 钩子         | 行为                                            |
| ------------ | ----------------------------------------------- |
| `pre-commit` | 对暂存文件运行 ESLint + Prettier（lint-staged） |
| `commit-msg` | Commitlint 校验提交信息格式                     |

提交格式建议：`type: 说明`（Conventional Commits 前缀）

| 前缀       | 用途               |
| ---------- | ------------------ |
| `feat`     | 新功能             |
| `fix`      | 修复               |
| `docs`     | 文档               |
| `style`    | 格式（不影响逻辑） |
| `refactor` | 重构               |
| `perf`     | 性能               |
| `test`     | 测试               |
| `build`    | 构建 / 依赖        |
| `ci`       | CI                 |
| `chore`    | 杂项               |
| `revert`   | 回滚               |

```bash
git commit -m "feat: 搭建 Next.js 个人作品集"
git commit -m "fix: 修复 Vanta 背景层级"
git commit -m "docs: 更新 README"
```

## 构建与部署

### 本地生产预览

```bash
# 标准 Next.js 构建
npm run build && npm start

# GitHub Pages 静态站预览（推荐）
npm run preview
```

### GitHub Pages（已配置 CI）

仓库已配置 GitHub Actions 工作流（`.github/workflows/deploy.yml`），推送到 `main` 分支后自动构建并部署。CI 会尝试运行 `fetch:blogs` 更新博客数据（失败不阻断构建）。

**在线地址：** [https://luzhaotian.github.io/portfolio/](https://luzhaotian.github.io/portfolio/)

**首次启用步骤：**

1. 打开仓库 [Settings → Pages](https://github.com/Luzhaotian/portfolio/settings/pages)
2. **Build and deployment → Source** 选择 **GitHub Actions**
3. 推送代码到 `main`，或在 Actions 页手动运行 **Deploy to GitHub Pages** 工作流
4. 等待工作流完成，Pages 地址即可访问

**本地模拟 GitHub Pages 构建：**

```bash
GITHUB_PAGES=true npm run build
# 静态产物在 out/ 目录
```

> GitHub Pages 使用静态导出（`output: 'export'`）并设置 `basePath: /portfolio`。本地 `npm run dev` 不受影响。

### 其他平台

也可部署到 Vercel 等平台（无需 `GITHUB_PAGES` 环境变量，支持完整 Next.js 运行时）。

## 相关链接

- 在线站点：[https://luzhaotian.github.io/portfolio/](https://luzhaotian.github.io/portfolio/)
- 仓库：[https://github.com/Luzhaotian/portfolio](https://github.com/Luzhaotian/portfolio)
- CSDN 博客：[https://blog.csdn.net/paopao_pop](https://blog.csdn.net/paopao_pop)
- UnoCSS：[https://unocss.dev](https://unocss.dev)
- Vanta.js：[https://github.com/tengbao/vanta](https://github.com/tengbao/vanta)
- Next.js：[https://nextjs.org](https://nextjs.org)

## License

见 [LICENSE](./LICENSE) 文件。
