import { setRequestLocale, getTranslations } from "next-intl/server";
import { site } from "@/lib/site";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TherapeuticAreas from "@/components/TherapeuticAreas";
import Education from "@/components/Education";
import Training from "@/components/Training";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "hero" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t("name"),
    jobTitle: t("title"),
    url: `${site.url}/${locale}`,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "İzmir",
      addressCountry: "TR",
    },
    sameAs: [site.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <TherapeuticAreas />
      <Education />
      <Training />
      <Skills />
      <Contact />
    </>
  );
}
