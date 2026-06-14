import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  const t = useTranslations("education");

  return (
    <section aria-label={t("heading")} className="bg-bg-alt">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading>{t("heading")}</SectionHeading>
        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-col gap-1 rounded-card border border-line bg-bg p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {t("degree")}
              </h3>
              <p className="mt-1 text-ink-soft">{t("institution")}</p>
              <p className="mt-0.5 text-sm text-ink-soft">{t("detail")}</p>
            </div>
            <span className="mt-2 shrink-0 rounded-full bg-primary-soft px-3 py-1 text-sm font-medium text-primary sm:mt-0">
              {t("year")}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
