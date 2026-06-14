import { useTranslations } from "next-intl";
import { site } from "@/lib/site";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {site.name}
          </p>
          <p className="text-sm text-ink-soft">{t("tagline")}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-ink-soft sm:items-end">
          <div className="flex gap-4">
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-primary"
            >
              {t("email")}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              {t("linkedin")}
            </a>
          </div>
          <p className="mt-1">
            © {year} {site.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
