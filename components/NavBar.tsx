"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold gradient-text"
          onClick={() => setMenuOpen(false)}
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-sky-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-sky-400/30 px-4 py-1.5 text-sm text-sky-300 transition-all hover:bg-sky-400/10"
            >
              GitHub
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="打开菜单"
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
        <div className="border-b border-white/10 bg-background/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-slate-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300"
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
