"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

interface Group {
  title: string;
  items: string[];
}

const COLLAPSED_COUNT = 4;

export default function Training() {
  const t = useTranslations("training");
  const groups = t.raw("groups") as Group[];
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="training" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading intro={t("intro")}>{t("heading")}</SectionHeading>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {groups.map((group, gi) => {
            const items = expanded
              ? group.items
              : group.items.slice(0, COLLAPSED_COUNT);
            const hidden = group.items.length - items.length;

            return (
              <Reveal key={group.title} delay={Math.min(gi * 0.05, 0.15)}>
                <div className="h-full rounded-card border border-line p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-soft">
                    {items.map((item, i) => (
                      <li key={i} className="relative pl-4">
                        <span
                          className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                    {!expanded && hidden > 0 && (
                      <li className="pl-4 text-sm text-ink-soft/70">
                        + {hidden}
                      </li>
                    )}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
          >
            {expanded ? t("showLess") : t("showMore")}
          </button>
        </div>
      </div>
    </section>
  );
}
