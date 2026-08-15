/**
 * 语言无关的个人基础配置。
 *
 * 姓名、职位、简介、Hero 数据卡片等「文字」不在这个文件里，而在
 * lib/i18n/locales/zh.ts 与 en.ts 的 profile / about / hero 下（两语言各一份）。
 * 这个文件只放「两种语言共用」的数据。
 */

export const GITHUB_URL = "https://github.com/Luzhaotian";

export const profile = {
  /** GitHub 主页地址：导航栏按钮、关于区块、页脚链接共用 */
  github: GITHUB_URL,
  /** 前端工作经验年限：关于区块会拼接成「8 年前端开发经验」，改这里即可全局生效 */
  yearsOfExperience: 8,
};
