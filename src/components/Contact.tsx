import { useTranslations } from "next-intl";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading intro={t("intro")}>{t("heading")}</SectionHeading>

        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <ContactCard label={t("emailLabel")} value={site.email} href={`mailto:${site.email}`} />
            <ContactCard
              label={t("linkedinLabel")}
              value="linkedin.com"
              href={site.linkedin}
              external
            />
            <ContactCard label={t("locationLabel")} value={t("location")} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {t("emailCta")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="text-xs font-medium uppercase tracking-wide text-ink-soft">
        {label}
      </span>
      <span className="mt-1 block text-ink">{value}</span>
    </>
  );

  const className =
    "block rounded-card border border-line p-5 transition-colors";

  if (href) {
    return (
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={`${className} hover:border-primary`}
      >
        {inner}
      </a>
    );
  }
  return <div className={className}>{inner}</div>;
}
