"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-cookie-consent";

type ConsentChoice = "accepted" | "rejected";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setVisible(stored !== "accepted" && stored !== "rejected");
  }, []);

  const saveChoice = (choice: ConsentChoice) => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-divider bg-[var(--nav-bg-solid)] p-4 backdrop-blur-xl sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1.5">
          <p id="cookie-consent-title" className="text-sm font-medium text-heading">
            我们使用 Cookie
          </p>
          <p id="cookie-consent-desc" className="text-sm leading-relaxed text-muted">
            为保障网站正常运行、记住您的主题偏好并了解访问情况，我们会使用必要 Cookie
            及类似技术。您可以选择全部接受，或拒绝非必要
            Cookie；拒绝后不影响浏览本站内容。
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => saveChoice("rejected")}
            className="focus-ring rounded-full border border-[var(--border-medium)] bg-[var(--glass-bg)] px-5 py-2.5 text-sm font-semibold text-body transition-colors hover:border-theme/40 hover:text-theme-light"
          >
            全部拒绝
          </button>
          <button
            type="button"
            onClick={() => saveChoice("accepted")}
            className="focus-ring rounded-full bg-theme px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            全部接受
          </button>
        </div>
      </div>
    </div>
  );
}
