import { profile } from "@/data/profile";
import { csdnProfile } from "@/data/blogs";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-divider px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-semibold theme-text">{profile.name}</p>
          <p className="mt-1 text-sm text-faint">
            {profile.title} · {profile.yearsOfExperience} 年经验
          </p>
        </div>

        <nav
          aria-label="页脚导航"
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm text-muted transition-colors hover:text-theme-light"
          >
            GitHub
          </a>
          <a
            href="#about"
            className="focus-ring text-sm text-muted transition-colors hover:text-theme-light"
          >
            关于
          </a>
          <a
            href="#blog"
            className="focus-ring text-sm text-muted transition-colors hover:text-theme-light"
          >
            博客
          </a>
          <a
            href={csdnProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm text-muted transition-colors hover:text-theme-light"
          >
            CSDN
          </a>
        </nav>

        <p className="text-sm text-faint" translate="no">
          © {year} {profile.name}. Next.js & Three.js
        </p>
      </div>
    </footer>
  );
}
