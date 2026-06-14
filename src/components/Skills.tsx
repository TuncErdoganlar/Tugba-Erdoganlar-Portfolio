import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const groups = ["clinical", "regulatory", "languages", "software"] as const;

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section aria-label={t("heading")} className="bg-bg-alt">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {groups.map((g, gi) => {
            const items = t.raw(`${g}.items`) as string[];
            return (
              <Reveal key={g} delay={Math.min(gi * 0.05, 0.15)}>
                <div className="h-full rounded-card border border-line bg-bg p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {t(`${g}.title`)}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="rounded-full bg-primary-soft px-3 py-1 text-sm text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
