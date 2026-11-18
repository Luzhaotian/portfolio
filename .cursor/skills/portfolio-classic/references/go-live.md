# Optional：获取代码 · 推送 · 部署（按需）

**仅在用户明确需要时执行。** 本地 `npm run dev` 能预览即可结束主流程；推送 / 部署是加分项。

若用户说「先不部署 / 只要本地」，跳过本文件全部步骤。

---

## 0) 先确认获取方式

问清用户选 **Fork** 还是 **Pull（直接克隆上游）**，并说明区别：

| 方式                 | 做法                                                | 优点                                                    | 代价                                                                 |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| **Fork**             | 在 GitHub 上把仓库复制到自己账号，再克隆自己的 Fork | 保留 `forked from` 关联，可同步模板更新；上线免新建仓库 | 显示 forked from；公开仓库的 fork 一般不能设为私有；需要 GitHub 账号 |
| **Pull（克隆上游）** | 直接 `git clone` 上游仓库                           | 完全独立、无 fork 标记；可有私有仓库；没账号也能预览    | 与上游无关联，同步更新要手动加 `upstream`；上线需自己新建仓库        |

只要本地预览、又没有 GitHub 账号 → 选 Pull。

---

## 1) 获取代码

### Fork 路由

1. 打开 <https://github.com/Luzhaotian/portfolio> → 右上角 **Fork** → **Create a new fork**
2. Owner 选自己的账号，仓库名保持 `portfolio`，得到 `https://github.com/your-name/portfolio`
3. 克隆自己的 Fork：

```bash
git clone https://github.com/your-name/portfolio.git
cd portfolio
```

### Pull 路由

```bash
git clone https://github.com/Luzhaotian/portfolio.git
cd portfolio
```

### 没有 GitHub 账号时（仅 Fork / 上线需要）

1. 打开 <https://github.com/signup> 注册，记住用户名（后面地址会用到）
2. 本机检查：

```bash
git --version
gh --version   # 可选：GitHub CLI
```

未安装 Git：macOS 可装 Xcode Command Line Tools / 用 Homebrew；Windows 用 [Git for Windows](https://git-scm.com/download/win)。

---

## 2) 推送提交

### Fork 路由

`origin` 就是用户的 Fork，直接推：

```bash
git status
git add .
git commit -m "feat: 基于模板初始化个人作品集"
git push -u origin main
```

### Pull 路由（需要自己的仓库）

先在 GitHub 新建空仓库（**不要**勾选 Add README），然后：

```bash
git remote remove origin
git remote add origin https://github.com/your-name/portfolio.git
git push -u origin main
```

### 通用

- **不要**推到上游 `Luzhaotian/portfolio`
- 想同步模板更新：`git remote add upstream https://github.com/Luzhaotian/portfolio.git`，之后 `git fetch upstream && git merge upstream/main`
- 提交信息可用中文：`feat: …` / `docs: …`
- **不要**把用户的私钥、token 写进仓库或聊天记录长期保存

---

## 3) 部署到 GitHub Pages（推荐，与模板一致）

模板已含 `.github/workflows/deploy.yml`：推送 `main` 即构建静态站，Fork 同样生效。

### 3.1 打开 Pages

1. 仓库 **Settings → Pages**
2. **Build and deployment → Source** 选 **GitHub Actions**
3. 推送 `main` 或手动跑 **Actions → Deploy to GitHub Pages → Run workflow**

### 3.2 访问地址

默认类似：

`https://your-name.github.io/portfolio/`

（仓库名不是 `portfolio` 时，路径段换成仓库名。）

构建使用 `GITHUB_PAGES=true`，`basePath` 为 `/<仓库名>`。若改了仓库名，确认 `lib/site.ts` / 文档与实际仓库名一致（本模板通常按 repo 名推导）。

### 3.3 常见问题

| 现象         | 处理                                                          |
| ------------ | ------------------------------------------------------------- |
| Actions 失败 | 打开 Actions 日志；本地先 `GITHUB_PAGES=true npm run build`   |
| 页面 404     | 等 1～2 分钟；确认 Source 为 GitHub Actions；路径是否带仓库名 |
| 静态资源 404 | 确认 Pages 构建带了 `GITHUB_PAGES=true`                       |
| 博客抓取失败 | `fetch:blogs` 在 CI 里 `continue-on-error`，不阻断部署        |

本地模拟 Pages 构建：

```bash
npm run preview
```

---

## 4) 备选：Vercel（可选）

适合想要自定义域名、或不用 `basePath` 的用户：

1. 注册 <https://vercel.com>，用 GitHub 登录
2. Import 自己的仓库（Fork 或新建的空仓库）
3. Framework Preset：Next.js；**不要**设 `GITHUB_PAGES=true`（用完整 Next 运行时或按 Vercel 默认）
4. Deploy 后获得 `*.vercel.app` 链接

若同时保留 GitHub Pages 与 Vercel，向用户说明两套 URL，避免搞混。

---

## 5) 上线后建议改的内容

- `site-content.yaml` / i18n 里的 GitHub、博客链接改成用户自己的
- 仓库 **About** 填主页 URL
- README 可改成用户自己的简介（可选）

---

## Agent 执行清单（仅当用户需要推送 / 上线）

- [ ] 确认用户选 Fork 还是 Pull
- [ ] 协助注册 GitHub / 安装 Git（若需要）
- [ ] 拿到代码（Fork 或克隆上游），本地 `origin` 指向用户自己的副本
- [ ] 提交并 `push` 到 `main`
- [ ] 指导 Settings → Pages → GitHub Actions
- [ ] 告知线上 URL，并协助排查首次部署问题
- [ ] 未要求上线则**不要**强迫完成以上步骤
