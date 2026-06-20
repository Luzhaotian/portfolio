"use client";

import { useI18n } from "@/components/I18nProvider";
import type { Locale } from "@/lib/i18n";

interface LocaleToggleProps {
  compact?: boolean;
  onSelect?: () => void;
}

export default function LocaleToggle({ compact = false, onSelect }: LocaleToggleProps) {
  const { locale, setLocale, t } = useI18n();

  const handleSelect = (next: Locale) => {
    if (next !== locale) setLocale(next);
    onSelect?.();
  };

  const options: { value: Locale; label: string }[] = [
    { value: "zh", label: t.locale.zh },
    { value: "en", label: t.locale.en },
  ];

  if (compact) {
    return (
      <div
        className="inline-flex rounded-full border border-divider bg-[var(--glass-bg)] p-0.5"
        role="group"
        aria-label="Language"
      >
        {options.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className={`focus-ring rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors ${
              locale === value
                ? "bg-active text-theme-light"
                : "text-muted hover:text-body"
            }`}
            aria-pressed={locale === value}
            aria-label={label}
            onClick={() => handleSelect(value)}
          >
            {value === "zh" ? "中" : "EN"}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1" role="group" aria-label="Language">
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className={`focus-ring flex items-center gap-2 rounded-lg px-3 py-2.5 text-base transition-colors ${
            locale === value
              ? "bg-active text-theme-light"
              : "text-muted hover:bg-hover"
          }`}
          aria-pressed={locale === value}
          onClick={() => handleSelect(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
