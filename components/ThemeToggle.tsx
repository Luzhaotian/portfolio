"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useI18n } from "@/components/I18nProvider";
import type { ThemeMode } from "@/lib/theme";

interface ThemeToggleProps {
  compact?: boolean;
  onSelect?: () => void;
}

export default function ThemeToggle({ compact = false, onSelect }: ThemeToggleProps) {
  const { mode, setMode } = useTheme();
  const { t } = useI18n();

  const modeLabels: Record<ThemeMode, string> = {
    light: t.theme.light,
    dark: t.theme.dark,
    auto: t.theme.auto,
  };

  const handleSelect = (next: ThemeMode) => {
    setMode(next);
    onSelect?.();
  };

  if (compact) {
    return (
      <div
        className="inline-flex border border-divider p-0.5"
        role="group"
        aria-label={t.theme.ariaLabel}
      >
        {(["light", "dark", "auto"] as ThemeMode[]).map((item) => (
          <button
            key={item}
            type="button"
            className={`focus-ring px-2 py-1 text-[11px] transition-colors duration-250 ${
              mode === item ? "bg-active text-theme" : "text-muted hover:text-heading"
            }`}
            aria-pressed={mode === item}
            aria-label={modeLabels[item]}
            onClick={() => handleSelect(item)}
          >
            {item === "light" ? "☀" : item === "dark" ? "☾" : "◐"}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1" role="group" aria-label={t.theme.ariaLabel}>
      {(["light", "dark", "auto"] as ThemeMode[]).map((item) => (
        <button
          key={item}
          type="button"
          className={`focus-ring flex items-center gap-2 px-3 py-2.5 text-base transition-colors ${
            mode === item ? "bg-active text-theme" : "text-muted hover:bg-hover"
          }`}
          aria-pressed={mode === item}
          onClick={() => handleSelect(item)}
        >
          <span aria-hidden="true">
            {item === "light" ? "☀" : item === "dark" ? "☾" : "◐"}
          </span>
          {modeLabels[item]}
        </button>
      ))}
    </div>
  );
}
