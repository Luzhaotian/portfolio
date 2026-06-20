import SectionHeader from "@/components/SectionHeader";
import { blogPosts, csdnProfile } from "@/data/blogs";

function formatCount(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export default function BlogSection() {
  return (
    <section id="blog" className="section-shell bg-surface/40">
      <div className="section-inner">
        <SectionHeader
          index="05 — BLOG"
          title="技术博客"
          subtitle="CSDN 上点赞最多的文章，分享前端工程化、AI 工具链与实战踩坑"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={post.url}
              className={`glass-card-interactive group flex flex-col p-5 sm:p-6 ${
                index === 0 ? "ring-1 ring-theme/20" : ""
              }`}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug text-slate-100 transition-colors group-hover:text-theme-light sm:text-lg">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring rounded-sm hover:underline"
                  >
                    {post.title}
                  </a>
                </h3>
                {index === 0 && (
                  <span className="shrink-0 rounded-md bg-theme/10 px-2 py-0.5 text-[11px] font-medium text-theme-light">
                    最热
                  </span>
                )}
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400 text-pretty line-clamp-3">
                {post.description}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <span aria-hidden="true">👍</span>
                  {formatCount(post.likes)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <span aria-hidden="true">👁</span>
                  {formatCount(post.views)}
                </span>
                {post.date && (
                  <time dateTime={post.date} className="ml-auto">
                    {post.date}
                  </time>
                )}
              </div>

              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-4 inline-flex items-center gap-1 text-sm text-theme transition-colors hover:text-theme-light"
              >
                阅读全文 →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={csdnProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !mx-auto !inline-flex !w-auto"
          >
            查看 CSDN 主页 →
          </a>
        </div>
      </div>
    </section>
  );
}
