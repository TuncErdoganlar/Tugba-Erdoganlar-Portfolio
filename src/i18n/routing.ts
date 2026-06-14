import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // International clinical-research audience: English is the default.
  locales: ["en", "tr"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];
