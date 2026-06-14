import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface Props {
  children: ReactNode;
  intro?: ReactNode;
}

export default function SectionHeading({ children, intro }: Props) {
  return (
    <Reveal>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {children}
      </h2>
      {intro && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
          {intro}
        </p>
      )}
      <span className="mt-5 block h-px w-12 bg-accent" aria-hidden="true" />
    </Reveal>
  );
}
