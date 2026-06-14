"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { studies, areaKeys, phases, type Phase } from "@/data/therapeutic";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function TherapeuticAreas() {
  const t = useTranslations("therapeutic");
  const [area, setArea] = useState<string>("all");
  const [phase, setPhase] = useState<string>("all");

  // Only show area options that actually exist in the data, in defined order.
  const availableAreas = useMemo(
    () => areaKeys.filter((k) => studies.some((s) => s.areaKey === k)),
    [],
  );

  const filtered = useMemo(
    () =>
      studies.filter(
        (s) =>
          (area === "all" || s.areaKey === area) &&
          (phase === "all" || s.phase === phase),
      ),
    [area, phase],
  );

  const isFiltered = area !== "all" || phase !== "all";

  const formatLocations = (locs: string[]) =>
    locs.map((l) => t(`loc.${l}`)).join(", ");

  return (
    <section id="therapeutic" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading intro={t("intro")}>{t("heading")}</SectionHeading>

        {/* Filters */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="area-filter"
                className="text-xs font-medium uppercase tracking-wide text-ink-soft"
              >
                {t("filterArea")}
              </label>
              <select
                id="area-filter"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="min-w-[14rem] rounded-md border border-line bg-bg px-3 py-2 text-sm text-ink"
              >
                <option value="all">{t("all")}</option>
                {availableAreas.map((k) => (
                  <option key={k} value={k}>
                    {t(`area.${k}`)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                {t("filterPhase")}
              </span>
              <div
                className="flex flex-wrap gap-1.5"
                role="group"
                aria-label={t("filterPhase")}
              >
                <FilterPill
                  active={phase === "all"}
                  onClick={() => setPhase("all")}
                >
                  {t("all")}
                </FilterPill>
                {phases.map((p) => (
                  <FilterPill
                    key={p}
                    active={phase === p}
                    onClick={() => setPhase(p)}
                  >
                    {p}
                  </FilterPill>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 flex items-center justify-between text-sm text-ink-soft">
          <p aria-live="polite">
            {t("showing", { count: filtered.length, total: studies.length })}
          </p>
          {isFiltered && (
            <button
              type="button"
              onClick={() => {
                setArea("all");
                setPhase("all");
              }}
              className="text-primary underline-offset-2 hover:underline"
            >
              {t("reset")}
            </button>
          )}
        </div>

        {/* Desktop table */}
        <Reveal delay={0.05}>
          <div className="mt-4 hidden overflow-hidden rounded-card border border-line md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-primary-soft text-ink">
                  <th className="px-4 py-3 font-medium">{t("col.area")}</th>
                  <th className="px-4 py-3 font-medium">{t("col.indication")}</th>
                  <th className="px-4 py-3 font-medium">{t("col.phase")}</th>
                  <th className="px-4 py-3 font-medium">{t("col.sites")}</th>
                  <th className="px-4 py-3 font-medium">{t("col.location")}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr
                    key={`${s.areaKey}-${s.indication}-${i}`}
                    className="border-t border-line"
                  >
                    <td className="px-4 py-3 font-medium text-ink">
                      {t(`area.${s.areaKey}`)}
                    </td>
                    <td className="px-4 py-3 text-ink-soft">{s.indication}</td>
                    <td className="px-4 py-3">
                      <PhaseBadge phase={s.phase} />
                    </td>
                    <td className="px-4 py-3 text-ink-soft">{s.sites}</td>
                    <td className="px-4 py-3 text-ink-soft">
                      {formatLocations(s.locations)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile cards */}
        <ul className="mt-4 space-y-3 md:hidden">
          {filtered.map((s, i) => (
            <li
              key={`${s.areaKey}-${s.indication}-${i}`}
              className="rounded-card border border-line p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium text-ink">{t(`area.${s.areaKey}`)}</p>
                <PhaseBadge phase={s.phase} />
              </div>
              <p className="mt-1 text-sm text-ink-soft">{s.indication}</p>
              <p className="mt-2 text-xs text-ink-soft">
                {t("sitesLabel", { count: s.sites })} · {formatLocations(s.locations)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
        active
          ? "border-primary bg-primary text-bg"
          : "border-line text-ink-soft hover:border-primary hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}

function PhaseBadge({ phase }: { phase: Phase }) {
  return (
    <span className="inline-block rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-medium text-primary">
      {phase}
    </span>
  );
}
