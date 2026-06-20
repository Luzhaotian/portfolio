#!/usr/bin/env node

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const CSDN_USERNAME = "paopao_pop";
const CSDN_PROFILE = `https://blog.csdn.net/${CSDN_USERNAME}`;
const TOP_N = 6;

function decodeHtml(text = "") {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'");
}

function formatDate(timestamp) {
  if (!timestamp) return "";
  return new Date(timestamp).toISOString().slice(0, 10);
}

async function fetchCsdnArticles() {
  const res = await fetch(CSDN_PROFILE, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept-Language": "zh-CN,zh;q=0.9",
    },
  });

  if (!res.ok) {
    throw new Error(`CSDN 请求失败: ${res.status} ${res.statusText}`);
  }

  const html = await res.text();
  const marker = "window.__INITIAL_STATE__";
  const start = html.indexOf(marker);
  if (start === -1) {
    throw new Error("未找到 CSDN 页面数据，可能页面结构已变更");
  }

  const jsonStart = html.indexOf("{", start);
  let depth = 0;
  let jsonEnd = jsonStart;

  for (let i = jsonStart; i < html.length; i++) {
    if (html[i] === "{") depth++;
    else if (html[i] === "}") {
      depth--;
      if (depth === 0) {
        jsonEnd = i + 1;
        break;
      }
    }
  }

  const state = JSON.parse(html.slice(jsonStart, jsonEnd));
  const list = state?.pageData?.data?.baseInfo?.latelyList;

  if (!Array.isArray(list) || list.length === 0) {
    throw new Error("CSDN 文章列表为空");
  }

  return [...list]
    .sort((a, b) => b.diggCount - a.diggCount)
    .slice(0, TOP_N)
    .map((item) => ({
      title: item.title,
      description: decodeHtml(item.description || "").slice(0, 160),
      url: item.url || `${CSDN_PROFILE}/article/details/${item.articleId || item.id}`,
      likes: item.diggCount ?? 0,
      views: item.viewCount ?? 0,
      date: formatDate(item.createTime || item.postTime),
    }));
}

function generateModule(articles) {
  const fetchedAt = new Date().toISOString().slice(0, 10);

  return `export interface BlogPost {
  title: string;
  description: string;
  url: string;
  likes: number;
  views: number;
  date: string;
}

/** CSDN 博客主页 */
export const csdnProfile = "${CSDN_PROFILE}";

/** 数据更新时间：${fetchedAt}，运行 npm run fetch:blogs 可刷新 */
export const blogPosts: BlogPost[] = ${JSON.stringify(articles, null, 2)};
`;
}

async function main() {
  console.log(`正在从 ${CSDN_PROFILE} 获取点赞最多的 ${TOP_N} 篇博客…`);
  const articles = await fetchCsdnArticles();
  const outPath = join(dirname(fileURLToPath(import.meta.url)), "../data/blogs.ts");

  writeFileSync(outPath, generateModule(articles), "utf8");
  console.log(`已写入 ${outPath}`);
  articles.forEach((a, i) => console.log(`  ${i + 1}. [${a.likes}👍] ${a.title}`));
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
