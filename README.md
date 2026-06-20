# 卢照天 · 个人作品集

卢照天（Luzhaotian）的个人作品集网站，展示 8 年前端开发经验、技术栈、企业项目与开源作品。

在线预览：本地运行后访问 [http://localhost:3000](http://localhost:3000)

## 功能特性

- 响应式单页布局，深色主题 + 玻璃拟态卡片
- SEO 优化（Next.js Metadata、OpenGraph、语义化 HTML）
- [Vanta.js](https://github.com/tengbao/vanta) 飞鸟 3D 背景（基于 Three.js，支持鼠标交互）
- 内容模块化：个人简介、技能、企业项目、开源项目、经验领域均可在 `data/` 中维护

## 技术栈

| 类别    | 技术                               |
| ------- | ---------------------------------- |
| 框架    | Next.js 15（App Router）+ React 19 |
| 语言    | TypeScript                         |
| 样式    | Tailwind CSS                       |
| 3D 背景 | Three.js 0.134 + Vanta.js BIRDS    |
| 字体    | Geist Sans / Geist Mono            |

## 本地开发

```bash
npm install
npm run dev
```

`dev` 会自动清理 `.next` 缓存后启动开发服务器，避免构建缓存导致的运行时错误。

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 常用命令

| 命令                   | 说明                           |
| ---------------------- | ------------------------------ |
| `npm run dev`          | 清理缓存并启动开发服务器       |
| `npm run build`        | 生产构建                       |
| `npm start`            | 启动生产服务器（需先 `build`） |
| `npm run lint`         | ESLint 检查                    |
| `npm run lint:fix`     | ESLint 自动修复                |
| `npm run format`       | Prettier 格式化全部文件        |
| `npm run format:check` | 检查格式是否符合 Prettier 规则 |
| `npm run clean`        | 删除 `.next` 构建缓存          |

## 代码规范与 Git 校验

项目集成了 **Prettier**（格式化）、**ESLint**（代码检查）、**Husky**（Git 钩子）与 **Commitlint**（提交信息规范）。

### 本地格式化

```bash
npm run format        # 格式化所有文件
npm run format:check  # 仅检查，不修改
npm run lint:fix      # ESLint 自动修复
```

推荐在 VS Code 中安装 `.vscode/extensions.json` 推荐的扩展，已配置保存时自动格式化。

### Git 提交校验

`npm install` 后会通过 `husky` 自动注册钩子：

| 钩子         | 行为                                              |
| ------------ | ------------------------------------------------- |
| `pre-commit` | 对暂存文件运行 ESLint + Prettier（lint-staged）   |
| `commit-msg` | 校验提交前缀 + 中文单行说明（禁止英文正文与多行） |

提交格式：`type: 中文说明`（仅一行，说明只能中文）

| 前缀       | 用途                   |
| ---------- | ---------------------- |
| `feat`     | 新功能                 |
| `fix`      | 修复问题               |
| `docs`     | 文档变更               |
| `style`    | 代码格式（不影响逻辑） |
| `refactor` | 重构                   |
| `perf`     | 性能优化               |
| `test`     | 测试                   |
| `build`    | 构建/依赖              |
| `ci`       | CI 配置                |
| `chore`    | 其他杂项               |
| `revert`   | 回滚                   |

```bash
git commit -m "feat: 添加技能展示区块"
git commit -m "fix: 修复背景层级问题"
git commit -m "docs: 更新项目说明"
```

以下提交会被拒绝：

```bash
git commit -m "feat: add feature"      # 说明含英文
git commit -m "feat(api): 新功能"       # 不允许 scope
git commit -m "feat: 标题\n\n正文"       # 不允许多行
```

## 构建与部署

```bash
npm run build
npm start
```

支持部署到 Vercel、Node.js 服务器等 Next.js 兼容平台。推送到 GitHub 后可在 Vercel 一键关联部署。

## 项目结构

```
app/
  layout.tsx      # 根布局与 SEO metadata
  page.tsx        # 首页（各区块组合）
  globals.css     # 全局样式
components/
  VantaBackground.tsx       # Vanta 飞鸟背景（Client Component）
  VantaBackgroundClient.tsx # dynamic import，禁用 SSR
  NavBar.tsx                # 导航栏
  HeroSection.tsx           # 首屏
  AboutSection.tsx          # 关于
  SkillsSection.tsx         # 技能
  ProjectsSection.tsx       # 项目列表
  ExperienceSection.tsx     # 经验领域
  FooterSection.tsx         # 页脚
data/
  profile.ts      # 个人信息与导航
  skills.ts       # 技能分类
  projects.ts     # 企业项目与 GitHub 开源项目
lib/
  vantaThree.ts   # Three.js 兼容层（适配 Vanta.js）
types/
  vanta.d.ts      # Vanta 类型声明
public/
  favicon.svg
```

## 自定义内容

编辑 `data/` 目录下的文件即可更新网站内容，无需改动组件逻辑：

- `profile.ts` — 姓名、职位、简介、GitHub 链接
- `skills.ts` — 技能分类与标签
- `projects.ts` — 企业项目与开源项目列表

## 背景特效

默认使用 Vanta.js **BIRDS**（飞鸟）效果。若 GPGPU 初始化失败，会自动回退到 **NET**（粒子网格）。

更换效果：修改 `components/VantaBackground.tsx` 中的 import 与初始化配置，可选效果见 [vantajs.com](https://www.vantajs.com/)。

> **注意**：Vanta.js 与 Three.js 新版本存在兼容性问题，项目已锁定 `three@0.134.0`。升级 Three.js 前请先验证 Vanta 效果是否正常。

## 链接

- GitHub：[https://github.com/Luzhaotian](https://github.com/Luzhaotian)
- Vanta.js：[https://github.com/tengbao/vanta](https://github.com/tengbao/vanta)

## License

见 [LICENSE](./LICENSE) 文件。
