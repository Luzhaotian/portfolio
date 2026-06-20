"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";
import { useViewport } from "@/lib/hooks/useViewport";

const SECTION_IDS = navLinks.map((link) => link.href.replace("#", ""));

export default function NavBar() {
  const { isMobile } = useViewport();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    if (!menuOpen || !isMobile) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen, isMobile]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-background/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
        aria-label="主导航"
      >
        <a
          href="#"
          className="focus-ring rounded-lg text-base font-bold theme-text sm:text-lg"
          onClick={() => setMenuOpen(false)}
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`focus-ring rounded-full px-3.5 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-white/10 text-theme-light"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="ml-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !w-auto !px-4 !py-2 text-xs"
            >
              GitHub
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="focus-ring flex flex-col gap-1.5 rounded-lg p-2 md:hidden"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-slate-300 transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-300 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-300 transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-b border-white/10 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="flex max-h-[calc(100dvh-3.5rem)] flex-col gap-1 overflow-y-auto px-4 py-4">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`focus-ring block rounded-lg px-3 py-3 text-base transition-colors ${
                      isActive
                        ? "bg-white/10 text-theme-light"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="mt-2 border-t border-white/10 pt-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !py-2.5"
                onClick={() => setMenuOpen(false)}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
