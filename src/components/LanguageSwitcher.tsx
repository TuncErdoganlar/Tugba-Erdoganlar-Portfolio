"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="inline-flex items-center gap-1 text-sm"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc, i) => {
        const active = loc === locale;
        return (
          <span key={loc} className="inline-flex items-center">
            {i > 0 && <span className="mx-1 text-line">|</span>}
            <button
              type="button"
              onClick={() => router.replace(pathname, { locale: loc })}
              aria-current={active ? "true" : undefined}
              className={`uppercase tracking-wide transition-colors ${
                active
                  ? "text-primary font-semibold"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {loc}
            </button>
          </span>
        );
      })}
    </div>
  );
}
