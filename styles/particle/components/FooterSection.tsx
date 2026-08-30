"use client";

import { useI18n } from "@/components/I18nProvider";
import { profile } from "@/data/profile";
import { csdnProfile } from "@/data/blogs";

export default function FooterSection() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-divider px-5 py-10 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-heading" translate="no">
            {t.profile.name}
          </p>
          <p className="mt-1 text-sm text-muted">{t.common.footerTech}</p>
          <p className="mt-2 text-xs text-faint">© {year}</p>
        </div>
        <nav className="flex flex-wrap gap-4" aria-label={t.navAria.footer}>
          <a className="particle-link" href="#about">
            {t.footer.about}
          </a>
          <a
            className="particle-link"
            href={csdnProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.footer.csdn}
          </a>
          <a
            className="particle-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
