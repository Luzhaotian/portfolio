# 卢照天 · 个人作品集

卢照天（Luzhaotian）的个人作品集 — **Next.js 15** 单页应用，提供两套可切换视觉风格：**静奢（Atelier）** 与 **经典（Classic）**。

本地预览：[http://localhost:3000](http://localhost:3000)（需先 `npm run dev`）

**在线地址：** [https://luzhaotian.github.io/portfolio/](https://luzhaotian.github.io/portfolio/)

入口：`/` 会按上次选择跳转到 `/atelier` 或 `/classic`（新窗口切换风格，互不影响）。

---

## 功能特性

- **双风格架构**：静奢 / 经典拆成独立包（`styles/atelier` · `styles/classic`），共享内容与壳层
- **左侧竖栏**：切换风格（新标签打开另一套）
- **右侧 AI 按钮**：悬停说明用途；点击复制当前风格的 Skill 提示词，粘贴给 AI 即可按本站生成同款项目
- **中英文 / 主题**：语言与白天·夜晚·自动主题，偏好写入 `localStorage`
- **内容数据化**：`site-content.yaml`（模板入口）→ `data/`（结构）+ `lib/i18n/`（双语文案），id 类型绑定防漏写
- **博客**：CSDN 点赞文（`npm run fetch:blogs`）；GitHub Actions 可每日更新
- Cookie 提示、回到顶部、SEO（Metadata / OpenGraph / 跳过导航）

### 静奢（Atelier）

- 大留白、衬线标题、氧化铜金强调色
- Canvas：ParticleObject / GlyphRain / FlameWrap / PointerAura（桌面端；减少动效时关闭）
- 区块：Hero → 精选 → 关于 → 作品索引 → 技能 → 博客 → 经验领域

### 经典（Classic）

- 毛玻璃卡片 + Vanta 全屏背景（白天 **Waves**，夜晚 **Birds**）
- 区块：Hero → 关于 → 技能 → 企业精选 / 开源 → 博客 → 经验领域
- 部分章节交替「实体毛玻璃 / 透明」节奏

---

## 用 AI Skill 复用本站风格

仓库内置 Cursor Agent Skills，他人可拉代码后**只保留一套风格**并换成自己的内容，还可按需上线。

| Skill | 调用                 | 说明                   |
| ----- | -------------------- | ---------------------- |
| 静奢  | `/portfolio-atelier` | 保留 Atelier，去掉经典 |
| 经典  | `/portfolio-classic` | 保留 Classic，去掉静奢 |

### 推荐流程

1. 克隆 `https://github.com/Luzhaotian/portfolio`
2. **先确认**保留哪套风格
3. **生成前**选择填写个人信息，或「仅预览」使用根目录 `site-content.yaml` 占位
4. 保留 `site-content.yaml`，之后可随时改，再让 AI 同步到 `data/` + `lib/i18n/`
5. 本地 `npm install && npm run dev` 验证
6. **可选上线**（非必须）：需要时再走 GitHub / 部署；只要本地预览可跳过

站内点**右侧 AI 按钮**可复制当前风格提示词（已含上述可选上线一步）。  
在 Cursor：对话输入 `/portfolio-atelier` / `/portfolio-classic`，或 **Customize → Skills**；也可把本仓库当 Remote Skill 源导入。

### Skill 文件

```
.cursor/skills/
  portfolio-atelier/
    SKILL.md
    references/
      strip-style.md      # 只留静奢
      apply-content.md    # 同步 site-content.yaml
      go-live.md          # 可选：注册 / 提交 / 部署
  portfolio-classic/
    SKILL.md
    references/…          # 同上（只留经典）
```

### 可选：注册 GitHub · 提交 · 上线

Skill 会先问你要不要上线。**选「只要本地」就不会强制部署。**

若选择上线，AI 按 `references/go-live.md` 引导，大致包括：

| 步骤 | 内容                                                     |
| ---- | -------------------------------------------------------- |
| 账号 | 没有 GitHub 时协助注册；检查本机 Git                     |
| 仓库 | 在你账号下新建空仓库（建议名 `portfolio`）               |
| 推送 | 把 `origin` 改成你的仓库，`commit` + `push` 到 `main`    |
| 部署 | **推荐 GitHub Pages**（模板已有 Actions）；也可选 Vercel |

GitHub Pages 首次启用：仓库 **Settings → Pages → Source** 选 **GitHub Actions**，推送 `main` 后访问：

`https://<你的用户名>.github.io/<仓库名>/`

更细的命令与排错见：

- [`.cursor/skills/portfolio-atelier/references/go-live.md`](./.cursor/skills/portfolio-atelier/references/go-live.md)
- [`.cursor/skills/portfolio-classic/references/go-live.md`](./.cursor/skills/portfolio-classic/references/go-live.md)

---

## 本地开发

```bash
npm install
npm run dev
```

- 静奢：<http://localhost:3000/atelier>
- 经典：<http://localhost:3000/classic>

若 `.next` 缓存异常：`npm run dev:clean`。

### 环境要求

- Node.js 20+
- npm 9+

### 常用命令

| 命令                              | 说明                           |
| --------------------------------- | ------------------------------ |
| `npm run dev`                     | 开发服务器                     |
| `npm run dev:clean`               | 清 `.next` 后启动              |
| `npm run build`                   | 生产构建                       |
| `npm run preview`                 | 模拟 GitHub Pages 静态预览     |
| `npm start`                       | Next.js 生产服务（非静态导出） |
| `npm run fetch:blogs`             | 抓取 CSDN 博客数据             |
| `npm run lint` / `lint:fix`       | ESLint                         |
| `npm run format` / `format:check` | Prettier                       |
| `npm run clean`                   | 删除 `.next`                   |

---

## 项目结构

```
app/
  page.tsx                 # / → 按上次风格跳转
  atelier/ · classic/      # 各风格路由（layout 含独立 favicon）
  layout.tsx · globals.css
styles/
  registry.ts · types.ts   # 风格注册表（扩展入口）
  README.md                # 如何新增第三套风格
  shared/                  # 公共：StyleRail、SkillShareRail、Providers、Uno 共享层
  atelier/                 # 静奢：components + uno.ts + meta
  classic/                 # 经典：components + Vanta + uno.ts + meta + vendor
components/                # 应用壳：I18n / Theme / Viewport / SkipLink
data/                      # 结构数据（id / tech / 链接…）
lib/
  i18n/                    # zh / en 文案与类型
  style.ts · theme.ts · skillShare.ts · site.ts …
site-content.yaml          # 内容模板（预览占位 / 正式填写）
.cursor/skills/            # portfolio-atelier · portfolio-classic
                           #   SKILL.md + references/{strip,apply,go-live}
uno.config.ts              # 合并 shared + atelier + classic 的 Uno 配置
public/                    # favicon-atelier / favicon-classic 等
scripts/ · .github/workflows/
```

扩展风格步骤见 [`styles/README.md`](./styles/README.md)。

---

## 自定义内容

1. **优先**编辑根目录 [`site-content.yaml`](./site-content.yaml)（Skill / AI 按此同步）
2. 或直接改 `data/` + `lib/i18n/locales/{zh,en}.ts`

### 分工

| 层                   | 职责                                     |
| -------------------- | ---------------------------------------- |
| `site-content.yaml`  | 对人友好的内容草稿 / 占位                |
| `data/*`             | 结构：id、技术标签、链接、顺序（无文案） |
| `lib/i18n/locales/*` | 中英文文案，按 id 查找                   |

`data/` 每个 id 必须在 zh、en **两侧**都有文案，否则 `tsc` / 构建报错。

### 主要数据文件

| 文件            | 说明                |
| --------------- | ------------------- |
| `profile.ts`    | GitHub、工作年限    |
| `projects.ts`   | 企业 / 开源项目结构 |
| `skills.ts`     | 技能分类            |
| `experience.ts` | 经验领域            |
| `blogs.ts`      | 博客列表            |

企业项目描述建议用通用业务名，避免公开敏感公司名。

语言键：`portfolio-locale`（`zh` / `en`）。  
主题键：`portfolio-theme`（`light` / `dark` / `auto`）。  
风格键：`portfolio-style`（`atelier` / `classic`）。

---

## 样式体系（UnoCSS）

```
uno.config.ts
  ├── styles/shared/uno      # 公共 shortcuts / preflight
  ├── styles/atelier/uno.ts  # 静奢 tokens + shortcuts
  └── styles/classic/uno.ts  # 经典 tokens + shortcuts
```

通过 `<html data-style="atelier|classic" data-theme="light|dark">` 切换变量。

| 风格 | 白天强调           | 夜晚强调  | 背景气质                        |
| ---- | ------------------ | --------- | ------------------------------- |
| 静奢 | 氧化铜金 `#8f7355` | `#a68968` | 实体底 + Canvas 氛围            |
| 经典 | Teal `#0f766e`     | `#14b8a6` | 透明底 + Vanta（Waves / Birds） |

新增组件样式时，优先写到对应风格的 `uno.ts`，再在根 `uno.config.ts` 中 spread。

---

## 交互组件

| 组件                           | 位置     | 说明                                         |
| ------------------------------ | -------- | -------------------------------------------- |
| `StyleRail`                    | 左侧中部 | 竖排切换静奢 / 经典（`window.open`）         |
| `SkillShareRail`               | 右侧中部 | AI 圆形按钮；悬停提示；点击复制 Skill 提示词 |
| `LocaleToggle` / `ThemeToggle` | 导航栏   | 语言 / 主题                                  |
| `BackToTop`                    | 右下角   | 滚动超过阈值后显示                           |
| `CookieConsent`                | 底部     | 同意偏好 `portfolio-cookie-consent`          |

---

## 代码规范与 Git

Prettier · ESLint · Husky · lint-staged（`.lintstagedrc.mjs`，跳过 `vendor/` 与 `*.min.js`）· Commitlint。

```bash
git commit -m "feat: 拆分静奢与经典风格包"
git commit -m "docs: 更新 README"
```

---

## 构建与部署

### 作者本仓库 / 本地生产预览

```bash
npm run build && npm start   # 标准 Next.js
npm run preview              # 模拟 GitHub Pages 静态站（推荐）
```

推送 `main` → `.github/workflows/deploy.yml` 自动部署 Pages。  
定时抓博客：`.github/workflows/update-blogs.yml`（UTC 02:00 / 北京时间 10:00）。

```bash
GITHUB_PAGES=true npm run build   # 产物在 out/；basePath 一般为 /portfolio
```

### 复用模板的人如何上线

1. 代码推到**你自己的** GitHub 仓库（不要一直指向本模板 `origin`，除非你故意 fork 同步）
2. **Settings → Pages → Source** 选 **GitHub Actions**
3. 确认 Actions 里 **Deploy to GitHub Pages** 成功
4. 打开 `https://<user>.github.io/<repo>/`

备选：**Vercel** Import 仓库即可（通常不要设 `GITHUB_PAGES=true`）。  
完整小白步骤由 Skill 的 `go-live.md` 携带，README 不替代逐步确认。

---

## 相关链接

- 在线站点：[https://luzhaotian.github.io/portfolio/](https://luzhaotian.github.io/portfolio/)
- 仓库：[https://github.com/Luzhaotian/portfolio](https://github.com/Luzhaotian/portfolio)
- CSDN：[https://blog.csdn.net/paopao_pop](https://blog.csdn.net/paopao_pop)
- 风格扩展说明：[`styles/README.md`](./styles/README.md)
- 内容模板：[`site-content.yaml`](./site-content.yaml)
- 上线指引（Skill）：[`go-live.md`（经典）](./.cursor/skills/portfolio-classic/references/go-live.md)
- UnoCSS · Next.js

## License

见 [LICENSE](./LICENSE)。
