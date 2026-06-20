# 卢照天 · 个人作品集

卢照天（Luzhaotian）的个人作品集网站 — 基于 **Next.js 15** 的单页应用，展示 8 年前端经验、技术栈、近期企业项目、开源作品与技术博客。

本地预览：[http://localhost:3000](http://localhost:3000)（需先执行 `npm run dev`）

**在线地址：** [https://luzhaotian.github.io/portfolio/](https://luzhaotian.github.io/portfolio/)

## 功能特性

- 响应式单页布局：玻璃拟态卡片、Editorial 区块编排
- 主题切换：白天 / 夜晚 / 自动（跟随系统），偏好持久化到 `localStorage`
- 移动端适配：UnoCSS 媒体查询 + `useViewport` 视口 Hook，窄屏自动切换布局
- 单色 Teal 强调色（`#14b8a6`），白天 / 夜晚双主题 CSS 变量
- [UnoCSS](https://unocss.dev/) 原子化样式 + 语义化 `shortcuts`
- [Vanta.js](https://github.com/tengbao/vanta) 3D 背景（夜晚飞鸟 / 白天网格，动态加载）
- CSDN 博客展示：抓取点赞最多的文章（`npm run fetch:blogs`）
- 回到顶部：滚动超过阈值后显示浮动按钮
- Cookie 提示：底部横幅，支持「全部接受 / 全部拒绝」，选择后持久化
- SEO：Next.js Metadata、OpenGraph、语义化 HTML、跳过导航链接
- 内容数据化：`data/` 目录维护简介、技能、项目、博客与经验领域

## 页面结构

| 导航标签 | 区块标题     | 锚点          | 说明                                        |
| -------- | ------------ | ------------- | ------------------------------------------- |
| —        | Hero         | —             | 姓名、职位、关键数据卡片                    |
| 关于     | 关于我       | `#about`      | 个人简介与 GitHub 入口                      |
| 技能     | 技术栈       | `#skills`     | Bento 布局技术栈分类                        |
| 企业精选 | 近期企业项目 | `#enterprise` | 9 项代表性企业级项目（含 ce-telephone SDK） |
| 开源项目 | 开源项目     | `#github`     | GitHub 个人仓库与外链                       |
| 博客     | 技术博客     | `#blog`       | CSDN 点赞最多的文章                         |
| 经验领域 | 经验领域     | `#experience` | 6 个业务与技术方向（含 AI 应用与 MCP）      |

## 技术栈

| 类别    | 技术                                             |
| ------- | ------------------------------------------------ |
| 框架    | Next.js 15（App Router）+ React 19               |
| 语言    | TypeScript 5                                     |
| 样式    | UnoCSS 66 + `@unocss/preset-wind3` + PostCSS     |
| 3D 背景 | Three.js 0.134 + Vanta.js（BIRDS / NET）         |
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
  layout.tsx            # 根布局、SEO metadata、主题防闪烁脚本
  page.tsx              # 首页（组合各区块）
  globals.css           # UnoCSS 注入入口（@unocss all）
components/
  ThemeProvider.tsx     # 主题状态（白天 / 夜晚 / 自动）
  ThemeToggle.tsx       # 主题切换按钮
  ViewportSync.tsx      # 视口状态同步到 <html data-viewport>
  VantaBackground.tsx   # Vanta 背景（动态加载，随主题配色）
  VantaBackgroundClient.tsx
  ContentCard.tsx       # 通用内容卡片（项目 / 博客复用）
  NavBar.tsx            # 导航栏（滚动高亮 + 主题切换）
  HeroSection.tsx       # 首屏
  AboutSection.tsx      # 关于
  SkillsSection.tsx     # 技能
  ProjectsSection.tsx   # 项目列表
  BlogSection.tsx       # CSDN 博客
  ExperienceSection.tsx # 经验领域
  SectionHeader.tsx     # 区块标题
  FooterSection.tsx     # 页脚
  BackToTop.tsx         # 回到顶部按钮
  CookieConsent.tsx     # Cookie 同意横幅
data/
  profile.ts            # 个人信息、导航、经验领域
  skills.ts             # 技能分类
  projects.ts           # 近期企业项目与开源项目
  blogs.ts              # CSDN 博客（由 fetch:blogs 生成）
lib/
  theme.ts              # 主题模式常量与工具函数
  breakpoints.ts        # 断点常量与 MEDIA_QUERIES
  format.ts             # 数字格式化工具
  hooks/useViewport.ts  # 视口 Hook
  vantaThree.ts         # Three.js 兼容层（适配 Vanta.js）
scripts/
  fetch-csdn-blogs.mjs  # CSDN 博客抓取脚本
types/
  vanta.d.ts            # Vanta 类型声明
public/
  favicon.svg
uno.config.ts           # UnoCSS 双主题变量、shortcuts、preflights
postcss.config.cjs
postcss-unocss.cjs
next.config.ts          # Next.js 配置（GitHub Pages 静态导出）
.github/workflows/
  deploy.yml            # GitHub Pages CI 部署
.husky/                 # Git 钩子（pre-commit / commit-msg）
```

## 自定义内容

编辑 `data/` 即可更新站点内容，无需改动组件逻辑：

| 文件          | 说明                                                    |
| ------------- | ------------------------------------------------------- |
| `profile.ts`  | 姓名、职位、简介、GitHub、导航、经验领域（建议 ≤ 6 项） |
| `skills.ts`   | 技能分类与标签                                          |
| `projects.ts` | 近期企业项目（当前 9 项）与开源项目列表                 |
| `blogs.ts`    | CSDN 博客列表（运行 `npm run fetch:blogs` 自动更新）    |

导航标签在 `profile.ts` 的 `navLinks` 中配置；区块标题在 `app/page.tsx` 各 Section 的 `title` prop 中配置（例如导航「企业精选」对应区块标题「近期企业项目」）。

企业项目描述建议使用通用业务名称，避免在公开站点展示敏感公司或产品名称。

## 样式体系（UnoCSS）

### 架构

```
layout.tsx
  ├── 内联 themeInitScript     # 防主题闪烁
  ├── @unocss/reset/tailwind.css
  └── globals.css (@unocss all)

postcss.config.cjs → postcss-unocss.cjs → uno.config.ts
```

`postcss-unocss.cjs` 用于解决 Next.js 通过 `require()` 加载 `@unocss/postcss` 时的 ESM/CJS 兼容问题。

### 三层样式

| 层级       | 位置             | 用途                                            |
| ---------- | ---------------- | ----------------------------------------------- |
| 原子类     | 组件 `className` | Wind 兼容工具类 + 语义化类（`text-heading` 等） |
| shortcuts  | `uno.config.ts`  | 复用组合类，见下表                              |
| preflights | `uno.config.ts`  | 双主题 CSS 变量、全局基础样式、动画 keyframes   |

### 语义化 shortcuts

| 类名                                 | 用途                             |
| ------------------------------------ | -------------------------------- |
| `text-heading` / `text-body`         | 标题 / 正文色                    |
| `text-muted` / `text-faint`          | 次要 / 辅助文字色                |
| `border-divider`                     | 分隔线 / 边框色                  |
| `bg-active` / `bg-hover`             | 导航激活 / 悬停背景              |
| `glass-card`                         | 玻璃拟态卡片                     |
| `glass-card-interactive`             | 可交互卡片（hover 动效）         |
| `btn-primary` / `btn-ghost`          | 主按钮 / 幽灵按钮                |
| `section-shell` / `section-inner`    | 区块外层 / 内容容器              |
| `section-title` / `section-subtitle` | 区块标题 / 副标题                |
| `tech-tag`                           | 技术标签                         |
| `stat-card`                          | Hero 数据卡片                    |
| `theme-text`                         | 主题色文字                       |
| `focus-ring`                         | 键盘焦点环（鼠标点击不显示边框） |
| `skip-link`                          | 跳过导航链接                     |
| `bg-grid-pattern` / `bg-grid`        | 网格背景                         |
| `hero-overlay`                       | Hero 区域渐变遮罩                |

新增组件级样式时，优先在 `uno.config.ts` 的 `shortcuts` 中扩展，避免在 `globals.css` 写 `@apply`。

### 双主题

通过 `<html data-theme="light|dark">` 切换，`ThemeProvider` 负责写入，`layout.tsx` 内联脚本防止首屏闪烁。

| 模式 | 行为                                      |
| ---- | ----------------------------------------- |
| 白天 | 固定浅色主题                              |
| 夜晚 | 固定深色主题                              |
| 自动 | 跟随系统 `prefers-color-scheme`，实时响应 |

偏好存储键：`portfolio-theme`（值为 `light` / `dark` / `auto`）。

Cookie 同意状态：`portfolio-cookie-consent`（值为 `accepted` / `rejected`，任一值均不再弹出）。

主色 Teal 在两种模式下均保留，背景 / 文字 / 玻璃卡片等通过 CSS 变量适配：

| 变量（节选）         | 夜晚      | 白天      |
| -------------------- | --------- | --------- |
| `--color-background` | `#050508` | `#f8fafc` |
| `--color-surface`    | `#0c0c14` | `#f1f5f9` |
| `--theme-accent`     | `#14b8a6` | `#0d9488` |

修改主题色时需同步 `uno.config.ts` 的 preflights 与 `components/VantaBackground.tsx` 中的 `THEME_COLORS`。

## 背景特效

| 主题 | 效果            | 说明                                                |
| ---- | --------------- | --------------------------------------------------- |
| 夜晚 | BIRDS（飞鸟）   | 移动端与桌面端一致；移动端减少鸟数量以降低 GPU 压力 |
| 白天 | NET（粒子网格） | 浅色背景                                            |
| 回退 | NET             | BIRDS 初始化或 GPGPU 失败时自动切换                 |

- **无障碍**：`prefers-reduced-motion` 时禁用 3D 背景
- 切换主题或视口档位时自动重建效果，Vanta 均 `dynamic import` 按需加载

更换效果：编辑 `components/VantaBackground.tsx`，可选效果见 [vantajs.com](https://www.vantajs.com/)。

> Vanta.js 与新版 Three.js 存在兼容问题，项目锁定 `three@0.134.0`。升级前请先验证背景效果。

## 交互组件

### 回到顶部（`BackToTop`）

- 向下滚动超过 400px 后，右下角显示浮动按钮
- 点击平滑滚回顶部；系统开启「减少动效」时改为瞬间跳转

### Cookie 提示（`CookieConsent`）

- 首次访问时在页面底部显示横幅
- 提供「全部接受」「全部拒绝」两个等权重按钮
- 点击任一选项后写入 `localStorage`，后续访问不再显示
- 开发调试时可在控制台执行 `localStorage.removeItem('portfolio-cookie-consent')` 重置

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
