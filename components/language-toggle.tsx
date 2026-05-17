"use client";

import type { Language } from "@/lib/content";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageToggle({
  language,
  onChange,
}: LanguageToggleProps) {
  return (
    <div
      className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1"
      role="group"
      aria-label="Selecionar idioma"
    >
      {(["pt", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
            language === option
              ? "bg-white text-slate-950 shadow-lg shadow-white/10"
              : "text-slate-300 hover:text-white"
          }`}
          aria-pressed={language === option}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

