# Portfolio × Canvas UI 设计方案

> **已归档**：方向已改为整站大改，请以 [2026-08-15-portfolio-redesign.md](./2026-08-15-portfolio-redesign.md) 为准。  
> 下文保留作「轻量点缀」备选，不再作为当前主方案。

> 状态：已归档 · 2026-08-15  
> 目标：在不大翻版的前提下，用 1～2 个 Canvas UI 效果做出记忆点，并顺带修掉当前 Hero / 卡片上的模板感。

---

## 1. 一句话定位

| 项 | 选择 |
|----|------|
| 主体 | 卢照天 — 8 年前端，金融科技 / AI / 企业 SaaS |
| 观众 | 招聘方、技术负责人、同行（30 秒扫完） |
| 页面唯一任务 | **证明「能把复杂前端做稳、做得好看」**，再引导看项目与履历 |
| 签名记忆点 | **名字被「解密/粒子收束」展开**；精选项目卡上有一层 **玻璃透镜 hover** |

不是「特效站」，是「工程师作品集 + 克制的触感」。

---

## 2. 现状诊断（简要）

**已有优势**

- 深色底 + 单色 teal accent，方向对，没有紫渐变 AI 味
- Vanta 全页氛围已成立（birds / net）
- 结构完整：Hero → About → Skills → Projects → Blog → Experience
- Geist + mono 标签体系可用

**主要问题（对照 redesign 审计）**

1. **Hero 像仪表盘**：名字 + 两行文案 + 双 CTA + 四格 stat card，首屏信息过满，品牌（姓名）被卡片抢戏
2. **三列等宽玻璃卡**：企业/开源项目区是最常见的 AI 布局指纹
3. **编号区块**（`01 — ABOUT`）尚可，但整站节奏偏「同一模板复制」
4. **动效分散**：fade/slide 入场 + Vanta；若再无加 Canvas UI 全页效果会打架
5. **按钮全 pill**：`rounded-full` 偏消费产品，可略收一点更「工程」

**技术约束**

- Canvas UI 的 html-in-canvas 主要在 Chrome（旗标/试用）；其它浏览器靠 WebGL overlay 降级
- 已有 Vanta：禁止再叠全页 Liquid / Bubble / Blaze
- `prefers-reduced-motion` 必须跳过 Canvas 特效，只留静态内容

---

## 3. 三条路线（取舍）

### A. 仅点缀（最小改动）

- 版式几乎不动
- Hero 名字包一层 `DecryptReveal` 或 `ParticleReveal`
- Featured 项目卡 hover 用 `Glass` 或 `Ripple`
- **优点**：风险低、1～2 天可落地  
- **缺点**：整体仍像「旧站贴特效」

### B. 轻量升格 + 点缀（推荐）

- 保留分区与 Vanta
- **收紧 Hero**：去掉或下移四格 stat；姓名成为绝对主角；一句 tagline + 一组 CTA
- 项目区：精选 1 大 + 其余小（打破三列均分）
- 再叠加 A 的两个 Canvas 效果
- **优点**：记忆点 + 结构都更好，不必重做整站  
- **缺点**：要改 Hero / Projects 组件

### C. 整站 Canvas 气质

- 弱化/替换 Vanta，大面积 Liquid / Bubble / Particle Scroll  
- **不推荐**：作品集会像 demo 站，性能与可达性成本高

**推荐：B。**

---

## 4. 视觉方向（B 的 token）

### 4.1 调性

**「深渊仪表 × 液态玻璃」**  
暗炭底、青绿信号色、一张「可触」的交互签名；其余安静。

### 4.2 颜色（沿用并微调）

| 角色 | Dark | Light | 说明 |
|------|------|-------|------|
| Ink / 底 | `#050508` | `#f8fafc` | 保持 |
| Surface | `#0c0c14` | `#f1f5f9` | 保持 |
| Accent | `#14b8a6` → 可略降饱和到 `#0f9e8f` | `#0d9488` | 避免过亮尖叫 |
| Accent soft | `#5eead4` | `#14b8a6` | 标签 / 链接 hover |
| Heading | `#f8fafc` | `#0f172a` | 保持 |

Canvas 组件 tint 跟 accent 对齐，例如 Bubble/Glass：`tint ≈ [0.08, 0.62, 0.55]`（仅若启用）。

### 4.3 字体

- Display / 姓名：继续 Geist Sans，但 **更大、更紧**（`tracking-tight`，桌面约 `clamp(2.75rem, 8vw, 5.5rem)`）
- Body：Geist Sans
- Meta / 区块索引：Geist Mono（已有）

暂不换字体栈，优先改尺度与层级。

### 4.4 布局原则

1. 首屏只做一件事：认人 + 一句能力主张 + CTA  
2. 每个 section 一个标题、一句副文、一种主交互  
3. 卡片默认「能不加边框/阴影就不加」；交互态再抬升  
4. 动效预算：**Vanta（氛围）+ 1 个进场签名 + 1 个 hover 签名**，禁止第三套全页 WebGL

---

## 5. 线框（桌面）

### 5.1 Hero（改后）

```
┌──────────────────────────────────────────────────────────────┐
│  [nav]                                           [主题][语言] │
│                                                              │
│     Senior Frontend Engineer                                 │
│                                                              │
│     卢 照 天          ← Particle / Decrypt Reveal            │
│     （粒子收束成字 / 解码展开）                                 │
│                                                              │
│     高级前端工程师                                             │
│     构建高性能、可扩展的前端应用 · 金融科技 · AI · SaaS         │
│                                                              │
│     [ 查看履历 ]    GitHub →                                   │
│                                                              │
│                         ↓ scroll                             │
└──────────────────────────────────────────────────────────────┘
  背景：Vanta（降低对比，避免压字）
  删除：右侧 2×2 stat cards（数据挪到 About 或页脚旁）
```

### 5.2 Projects（改后）

```
┌──────────────────────────────────────────────────────────────┐
│  03 — ENTERPRISE                                             │
│  企业精选                                                     │
│                                                              │
│  ┌─────────────────────────────┐  ┌──────────┐ ┌──────────┐  │
│  │  Featured（大卡）            │  │  小卡    │ │  小卡    │  │
│  │  标题 + 描述                 │  │          │ │          │  │
│  │  [Glass 透镜随指针]          │  └──────────┘ └──────────┘  │
│  │  tech tags                   │  ┌──────────┐ ┌──────────┐  │
│  └─────────────────────────────┘  │  小卡    │ │  小卡    │  │
│                                   └──────────┘ └──────────┘  │
└──────────────────────────────────────────────────────────────┘
```

开源区可同样用「1 精选大 + 网格」，或保持网格但仅对 `highlight` 卡启用 Glass。

### 5.3 其它区块

About / Skills / Blog / Experience：**结构不动**，只统一间距与标题节奏；不做 Canvas。

---

## 6. Canvas UI 选型与落点

| 优先级 | 组件 | 挂载点 | 行为 | 降级 |
|--------|------|--------|------|------|
| P0 | `ParticleReveal` **或** `DecryptReveal`（二选一） | Hero 姓名 | 入场 / 指针附近清晰 | 静态文字 |
| P0 | `Glass`（首选）或 `Ripple` | Featured `ContentCard` | hover / 指针透镜 | 普通 hover 边框 |
| P1（可选） | `Bubble` | **仅** Hero 内容区，且 Vanta `points`/`quantity` 再降 | 指针水滴 | soap-film overlay |
| 不做 | Liquid / Shatter / Blaze / VHS / Particle Scroll / 全页 Bubble | — | 与 Vanta + 作品集气质冲突 | — |

**二选一建议**

- 更「工程 / 黑客」气质 → **DecryptReveal**
- 更「材质 / 高级感」→ **ParticleReveal**

默认推荐：**DecryptReveal（姓名）+ Glass（精选卡）**。

安装方式（落地时）：

```bash
npx shadcn@latest add @canvas-ui/decrypt-reveal-react
npx shadcn@latest add @canvas-ui/glass-react
```

源码进仓库（shadcn registry），不额外 npm 锁 Canvas 包。

---

## 7. 交互与可达性

1. `prefers-reduced-motion: reduce` → 不初始化 Canvas 实例，直接渲染 children  
2. 触控设备：Glass 用轻量 `pointermove` 或退化为 CSS hover；Decrypt 只播一次入场  
3. 姓名、链接仍可选中、可聚焦；canvas 层 `pointer-events: none`（组件已有则保持）  
4. 性能：IntersectionObserver 离屏暂停；Hero + 一张 Featured 卡，同时最多 2 个 WebGL 上下文叠加在 Vanta 之上——验收时用中端机 Chrome / Safari 各测一帧预算  
5. 若帧率 < 40：优先关 Glass，保留 Decrypt；再不行降 Vanta 粒子数

---

## 8. 实施分期

### Phase 0 — 设计确认（本文档）

- [ ] 确认走路线 B  
- [ ] 确认 Decrypt vs Particle  
- [ ] 确认是否做 P1 Bubble  

### Phase 1 — 版式轻改（无 Canvas）

- [ ] Hero：移除四格 stat，强化姓名尺度；highlights 迁到 About  
- [ ] Projects：featured 大卡 + 其余网格  
- [ ] CTA：略减 pill（如 `rounded-xl`）可选  
- [ ] Vanta：略降数量 / 对比，给文字留空

### Phase 2 — Canvas 接入

- [ ] 安装 DecryptReveal + Glass 源码到 `components/canvas/`  
- [ ] Hero 姓名包装；Featured 卡包装  
- [ ] reduced-motion / 移动端降级开关  
- [ ] 主题色 tint 与 dark/light 对齐  

### Phase 3 — 打磨

- [ ] 浏览器矩阵：Chrome / Safari / Firefox  
- [ ] Lighthouse + 手动滚动画质  
- [ ] i18n 下中英姓名均正常 reveal  

---

## 9. 成功标准

1. 关掉特效后，页面仍完整、可读、可投递简历  
2. 开着特效时，**第一眼记住名字的展开方式**，而不是「这站特效真多」  
3. 首屏不再出现四格 KPI 墙  
4. Safari / Firefox 无白屏、无报错，仅效果减弱  
5. 不引入新的全页 WebGL 层

---

## 10. 明确不做

- 用 Canvas UI 替换 Vanta 作为唯一背景  
- 每个 section 各挂一个不同效果  
- 为特效重写整站信息架构或 i18n 结构  
- 在无障碍路径上依赖 html-in-canvas 才能读内容  

---

## 11. 下一步

请确认以下三点后，再写实现计划 / 开工：

1. **路线**：同意 B（轻量升格 + 点缀）？  
2. **Hero 签名**：DecryptReveal / ParticleReveal / 你指定其它？  
3. **P1 Bubble**：本轮做 / 不做？

确认后可按 Phase 1 → 2 落地；若要可视化对照，可再补一版浏览器线框 mock。
