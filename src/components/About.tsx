import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading>{t("heading")}</SectionHeading>
        <Reveal delay={0.05}>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
