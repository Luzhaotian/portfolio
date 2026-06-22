export interface BlogPost {
  title: string;
  description: string;
  url: string;
  likes: number;
  views: number;
  date: string;
}

/** CSDN 博客主页 */
export const csdnProfile = "https://blog.csdn.net/paopao_pop";

/** 数据更新时间：2026-06-22，运行 npm run fetch:blogs 可刷新 */
export const blogPosts: BlogPost[] = [
  {
    title:
      "我把 Cursor 调教成「全能搭子」后，开发效率直接翻倍：Skills + MCP 小白避坑指南",
    description:
      '摘要 本文分享了如何通过合理配置 Skills（方法）和 MCP（工具能力）将 AI 助手从"问答工具"升级为"开发搭档"的经验。作者指出 AI 落地效果差往往不是模型问题，而是缺乏稳定的工作方法和执行能力。文章提供了20个高频Skills分类清单和5个核心MCP工具，建议从最小可用组合（3个MCP+4个Skills）',
    url: "https://blog.csdn.net/paopao_pop/article/details/159546739",
    likes: 22,
    views: 1145,
    date: "2026-03-27",
  },
  {
    title: "自定义指令",
    description:
      "解决控制台报错# 报错：Blocked aria-hidden on a ＜input＞ element because the element that just...这个bug是最近才出现的，之前自己也这样写也没有问题，网上说是chrome浏览器升级出现的问题。",
    url: "https://blog.csdn.net/paopao_pop/article/details/145722668",
    likes: 21,
    views: 872,
    date: "2025-02-19",
  },
  {
    title: "Vite + Vue3 开发",
    description:
      "项目里引入了全局监听报错机制 onErrorCaptured 但是如果一直报错，会出现内存泄漏的问题（只会在开发环境上出现，不确定是这个钩子导致的，但是复现也不太容易，总结太菜，待解决。封装二次表单的 Select 组件的数据循环 Children 需要循环才能写入（这个不符合我的初始设计想法，但是，目前也没有好的解决",
    url: "https://blog.csdn.net/paopao_pop/article/details/137513698",
    likes: 17,
    views: 624,
    date: "2024-04-08",
  },
  {
    title: "Figma 配置",
    description:
      "本文介绍了如何配置Figma与Cursor的集成方案。主要内容包括：1)下载安装Figma软件；2)安装Bun运行时环境；3)克隆cursor-talk-to-figma-mcp插件项目并启动WebSocket服务；4)在Figma中导入插件manifest文件；5)配置Cursor的MCP连接；6)测试连接；7)添加",
    url: "https://blog.csdn.net/paopao_pop/article/details/159427862",
    likes: 14,
    views: 577,
    date: "2026-03-24",
  },
  {
    title: "Vite + Vue3 部署 GitHub",
    description:
      "因为在 yml 文件中是监控 push 事件，所以会自定发布。新建文件夹 .github 然后再建一个文件夹 workflows。因为静态资源是可以部署到 GitHub 上，自己顺便学习部署网站。在 Actions 里可以查看进度，成功以后就会生成一个地址。因为我使用的是 Vite 工具，官方有提供相应 Demo。打开",
    url: "https://blog.csdn.net/paopao_pop/article/details/139117816",
    likes: 11,
    views: 855,
    date: "2024-05-22",
  },
  {
    title: "个人精选 MCP 清单",
    description:
      "本文介绍了在 Cursor 中配置和使用多种 MCP（Model Context Protocol）的指南。主要内容包括：1）环境准备（Node.js 18+、Python 3.10+）；2）5个常用MCP的功能说明、触发条件和安装方法（neural-memory、playwright、filesystem、seque",
    url: "https://blog.csdn.net/paopao_pop/article/details/159546584",
    likes: 10,
    views: 476,
    date: "2026-03-27",
  },
];
