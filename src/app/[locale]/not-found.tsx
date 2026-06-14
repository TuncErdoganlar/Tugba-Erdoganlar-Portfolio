import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function LocaleNotFound() {
  const t = useTranslations("notFound");
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 text-center">
      <div>
        <p className="font-display text-6xl font-semibold text-primary">404</p>
        <p className="mt-4 text-ink-soft">{t("message")}</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-bg"
        >
          {t("home")}
        </Link>
      </div>
    </div>
  );
}
