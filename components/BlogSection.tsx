import ContentCard from "@/components/ContentCard";
import SectionHeader from "@/components/SectionHeader";
import { blogPosts, csdnProfile } from "@/data/blogs";
import { formatCount } from "@/lib/format";

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
            <ContentCard
              key={post.url}
              title={post.title}
              description={post.description}
              href={post.url}
              badge={index === 0 ? "最热" : undefined}
              highlight={index === 0}
              clampDescription
              linkLabel="阅读全文 →"
              footer={
                <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-faint">
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
              }
            />
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
