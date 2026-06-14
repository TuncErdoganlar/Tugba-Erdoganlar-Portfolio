import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

interface Role {
  date: string;
  company: string;
  position: string;
  items: string[];
}

export default function Experience() {
  const t = useTranslations("experience");
  const roles = t.raw("roles") as Role[];

  return (
    <section id="experience" className="scroll-mt-20 bg-bg-alt">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading intro={t("intro")}>{t("heading")}</SectionHeading>

        <ol className="mt-12 space-y-0">
          {roles.map((role, i) => (
            <Reveal as="li" key={`${role.company}-${i}`} delay={Math.min(i * 0.03, 0.15)}>
              <div className="relative grid grid-cols-1 gap-x-8 gap-y-2 border-l border-line py-6 pl-7 sm:grid-cols-[10rem_1fr] sm:pl-9">
                <span
                  className="absolute left-0 top-8 h-2.5 w-2.5 -translate-x-[5px] rounded-full bg-primary ring-4 ring-bg-alt"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium uppercase tracking-wide text-ink-soft sm:pt-0.5">
                  {role.date}
                </p>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {role.company}
                  </h3>
                  <p className="mt-0.5 text-base font-medium text-primary">
                    {role.position}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-ink-soft">
                    {role.items.map((item, j) => (
                      <li key={j} className="relative pl-4">
                        <span
                          className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
