import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { themeInitScript } from "@/lib/theme";
import "@unocss/reset/tailwind.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "卢照天 | 高级前端工程师",
  description:
    "卢照天（Luzhaotian）— 8 年经验的高级前端工程师，专注 React/Vue 生态、金融科技、AI 应用与企业 SaaS 平台开发。",
  keywords: [
    "卢照天",
    "Luzhaotian",
    "前端工程师",
    "React",
    "Vue",
    "Next.js",
    "TypeScript",
    "金融科技",
    "AI Agent",
  ],
  authors: [{ name: "卢照天", url: "https://github.com/Luzhaotian" }],
  openGraph: {
    title: "卢照天 | 高级前端工程师",
    description: "8 年经验的高级前端工程师，专注 React/Vue 生态、金融科技与 AI 应用。",
    type: "website",
    locale: "zh_CN",
    siteName: "卢照天 Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "卢照天 | 高级前端工程师",
    description: "8 年经验的高级前端工程师，专注 React/Vue 生态、金融科技与 AI 应用。",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-sans antialiased`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          跳到主要内容
        </a>
        {children}
      </body>
    </html>
  );
}
