"use client";

import ContentCard from "@/components/ContentCard";
import SectionHeader from "@/components/SectionHeader";
import { useI18n } from "@/components/I18nProvider";
import { blogPosts, csdnProfile } from "@/data/blogs";
import { formatCount } from "@/lib/format";

export default function BlogSection() {
  const { t } = useI18n();

  return (
    <section id="blog" className="section-shell bg-surface/40">
      <div className="section-inner">
        <SectionHeader
          index={t.blog.index}
          title={t.blog.title}
          subtitle={t.blog.subtitle}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ContentCard
              key={post.url}
              title={post.title}
              description={post.description}
              href={post.url}
              badge={index === 0 ? t.common.hot : undefined}
              highlight={index === 0}
              clampDescription
              linkLabel={`${t.common.readMore} →`}
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
            {t.common.viewCsdn} →
          </a>
        </div>
      </div>
    </section>
  );
}
