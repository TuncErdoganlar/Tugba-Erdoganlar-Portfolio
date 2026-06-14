import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

const keys = ["years", "studies", "areas", "phases"] as const;

export default function Stats() {
  const t = useTranslations("stats");

  return (
    <section aria-label={t("heading")} className="bg-bg-alt">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <dl className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {keys.map((k, i) => (
            <Reveal key={k} delay={i * 0.05}>
              <div className="h-full rounded-card bg-primary-soft px-5 py-6 text-center">
                <dt className="sr-only">{t(`${k}.label`)}</dt>
                <dd>
                  <span className="block font-display text-4xl font-semibold text-primary sm:text-5xl">
                    {t(`${k}.value`)}
                  </span>
                  <span className="mt-2 block text-sm leading-snug text-ink-soft">
                    {t(`${k}.label`)}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
