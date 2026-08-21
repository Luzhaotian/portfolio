import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, Noto_Serif_SC } from "next/font/google";
import { I18nProvider } from "@/components/I18nProvider";
import SkipLink from "@/components/SkipLink";
import { localeInitScript } from "@/lib/i18n";
import { basePath } from "@/lib/site";
import { styleInitScript } from "@/lib/style";
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

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

const notoSerifSc = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    icon: `${basePath}/favicon.svg`,
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
        <script dangerouslySetInnerHTML={{ __html: styleInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeInitScript }} />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--font-display:var(--font-noto-serif-sc),var(--font-fraunces),serif}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${notoSerifSc.variable} min-h-screen bg-background font-sans antialiased`}
        suppressHydrationWarning
      >
        <I18nProvider>
          <SkipLink />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
