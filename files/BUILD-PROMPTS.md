# Build promptları — sırayla çalıştır  (Tuğba Erdoğanlar · Professional Site)

> Önce `CLAUDE.md`'yi proje köküne koy. Sonra bu promptları **sırayla** Claude Code'a yapıştır. Her adımdan sonra `npm run dev` ile kontrol et. Promptlar `CLAUDE.md`'deki verilere ve tasarım sistemine atıf yapar.

---

## Adım 0 — Terminal (sen çalıştır)

```bash
npx create-next-app@latest tugba-site --typescript --tailwind --app --eslint --src-dir --import-alias "@/*"
cd tugba-site
npm install next-intl framer-motion
```

`CLAUDE.md`'yi bu klasörün köküne kopyala, Claude Code'u burada başlat.

> İlk prompt olarak şunu ver: *"Read CLAUDE.md and BUILD-PROMPTS.md first — they define the project, design system, CV data and privacy rules. Confirm you've read them, then wait."* Sonra Prompt 1 ile devam et.

---

## Prompt 1 — i18n iskeleti (next-intl)

```
CLAUDE.md'deki dosya yapısına uygun olarak next-intl'i App Router ile kur. EN/TR, /en ve /tr route'ları, varsayılan locale "en".

Şu dosyaları oluştur/düzenle:
- src/i18n/routing.ts  (locales, defaultLocale, createNavigation export'ları)
- src/i18n/request.ts  (getRequestConfig, messages'ı locale'e göre import et)
- src/middleware.ts    (createMiddleware + matcher)
- next.config.ts       (createNextIntlPlugin ile sarmalı)
- src/app/[locale]/layout.tsx  (NextIntlClientProvider, <html lang={locale}>, geçersiz locale'de notFound)
- messages/en.json ve messages/tr.json  (şimdilik {} yeterli)
- Eski src/app/page.tsx ve layout.tsx'i [locale] yapısına taşı.

ÖNEMLİ: next-intl App Router API'si sürümle değişebiliyor. Kurulu next-intl sürümünü (package.json) kontrol et ve gerekirse güncel next-intl App Router dokümanına bakarak doğru API'yi kullan (defineRouting / createNavigation / getRequestConfig).

Bittiğinde `npm run dev` ile /en ve /tr açılıyor mu test et.
```

---

## Prompt 2 — Tasarım token'ları, fontlar, navbar, dil değiştirici

```
CLAUDE.md'deki "Tasarım sistemi" bölümünü uygula. Bu sofistike, güven veren, editöryel bir profesyonel site — gösterişli efekt yok.

1. globals.css'e renk token'larını CSS değişkeni olarak ekle (--bg, --bg-alt, --ink, --ink-soft, --primary, --primary-soft, --accent, --line) ve Tailwind v4 @theme ile utility'lere bağla. Body bg --bg, metin --ink.

2. Fontları kur (next/font): Başlıklar = Fraunces (serif), Gövde = Geist. CLAUDE.md'de yasaklı fontları kullanma.

3. src/components/Navbar.tsx: sticky, sade; solda isim (Tuğba Erdoğanlar, serif), sağda anchor linkler (About, Experience, Therapeutic Areas, Training, Contact) + LanguageSwitcher. Mobilde hamburger. Tüm metinler messages üzerinden.

4. src/components/LanguageSwitcher.tsx: "EN | TR" toggle, aktif locale belirgin, next-intl Link/usePathname ile mevcut sayfada dil değiştir.

Navbar'ı layout'a ekle. scroll-behavior: smooth ekle.
```

---

## Prompt 3 — İçerik bölümleri (1/2): Hero, Stats, About, Experience

```
CLAUDE.md'deki kişi ve içerik verilerini kullanarak aşağıdaki bölümleri oluştur ve page.tsx'te sırayla diz. Tüm metinleri messages/en.json ve messages/tr.json'a iki dilde ekle, useTranslations ile kullan.

- Hero.tsx: büyük serif isim, altında unvan "Senior Clinical Research Associate", kısa tagline, konum "İzmir, Türkiye" (SADECE şehir — adres/telefon yok), iletişim: e-posta + LinkedIn (placeholder), "Download CV" butonu (/cv.pdf).
- Stats.tsx: "bir bakışta" 4 rakam (~20 yıl, 30+ çalışma, 15+ terapötik alan, Faz I–IV). Sade metric kartlar, --primary-soft dolgu.
- About.tsx: CLAUDE.md'deki profesyonel özet (EN/TR).
- Experience.tsx: 11 rolün dikey timeline'ı (tarih, şirket, pozisyon, sorumluluk maddeleri). En yeniden eskiye. Temiz, okunur; sorumlulukları gerekirse 2-4 maddeyle özetle.

GİZLİLİK: Ev adresi ve cep telefonu hiçbir yerde görünmesin. Framer Motion sadece hafif whileInView fade-up.
```

---

## Prompt 4 — İçerik bölümleri (2/2): Therapeutic Areas, Education, Training, Skills, Contact, Footer

```
Kalan bölümleri oluştur, page.tsx'e ekle, metinleri iki dilde messages'a ekle.

- TherapeuticAreas.tsx: CLAUDE.md'deki terapötik deneyim tablosunu vitrin olarak göster. Terapötik alana göre grupla. Üstte alana ve faza göre basit filtre (saf JS/React state — sendPrompt KULLANMA). Her kayıt: alan, endikasyon, faz, merkez sayısı, lokasyon. Bu bölüm onun en güçlü farkı, net ve etkileyici olsun.
- Education.tsx: Kimya Mühendisliği, Ege Üniversitesi, 2003.
- Training.tsx: CLAUDE.md'deki gruplu kategorilerle (GCP & klinik standartlar / Düzenleyici / Çalışma toplantıları / Kalite & profesyonel gelişim). Ham 40 maddelik liste DEĞİL — kategori başlıkları altında derli toplu, gerekirse "daha fazla göster" ile genişleyen.
- Skills.tsx: yetkinlik kategorileri (Klinik, Düzenleyici) + diller (İngilizce akıcı, Fransızca A1) + yazılım (Microsoft Office).
- Contact.tsx: e-posta + LinkedIn + "İzmir, Türkiye". Net bir CTA. İstenirse basit iletişim formu, ama telefon/adres yok.
- Footer.tsx: isim, yıl, e-posta, LinkedIn.

Framer Motion ölçülü; prefers-reduced-motion'a saygı göster.
```

---

## Prompt 5 — SEO & metadata

```
CLAUDE.md'deki "SEO" bölümünü uygula.
- layout.tsx'te generateMetadata: her locale için EN/TR title + description (messages'tan). metadataBase ayarla.
- Open Graph + Twitter card; public/og.png referansı (placeholder olabilir).
- JSON-LD Person schema: name "Tuğba Erdoğanlar", jobTitle "Senior Clinical Research Associate", url, sameAs olarak LinkedIn.
- src/app/sitemap.ts ve robots.ts; her iki locale sitemap'te; locale'ler arası hreflang alternates.
```

---

## Prompt 6 — Cila: responsive, erişilebilirlik, build

```
Son rötuşlar:
- Tüm bölümleri mobil/tablet/masaüstünde responsive yap (mobil öncelikli). Navbar hamburger menüsü çalışsın. Therapeutic Areas tablosu/filtresi mobilde de okunur olsun (gerekirse kart düzenine geç).
- Erişilebilirlik: görünür focus state, görsellerde alt, tek h1, doğru başlık hiyerarşisi, butonlarda aria-label, filtre kontrollerinde label.
- prefers-reduced-motion açıkken animasyonları kapat.
- `npm run build` çalıştır, tüm hata/uyarıları düzelt. TypeScript strict hatası kalmasın.
```

---

## Adım 7 — GitHub + Vercel ile yayınlama (oğlunun sitesindeki akışın AYNISI)

Bunu Claude Code'da değil, GitHub Desktop + tarayıcıda yaparsın — daha önce yaptığın adımlar:

1. **GitHub Desktop** → File → Add Local Repository → `tugba-site` klasörünü seç
   (Repo değilse "create a repository" ile başlat)
2. Summary'ye `Initial commit` yaz → **Commit to main**
3. Sağ üstte **Publish repository** → isim `tugba-site`, Public → Publish
   (GitHub Desktop repo'yu hem oluşturur hem push eder — GitHub'da manuel repo açmana gerek yok)
4. **vercel.com** → Log in with GitHub → Add New → Project → `tugba-site` → Import
   → Framework otomatik **Next.js** → Deploy
5. Bitince adres: `tugba-site.vercel.app`

Bundan sonra: Claude Code'da değişiklik → GitHub Desktop'ta commit → **Push origin** → Vercel otomatik deploy.

> `cv.pdf`: annenin güncel CV'sinin PDF'ini `public/` klasörüne `cv.pdf` adıyla koy ki "Download CV" çalışsın. (.doc'u PDF olarak dışa aktarman yeterli.)

---

## Kullanım sırası özeti
1. **Adım 0** — projeyi kur, `CLAUDE.md`'yi köke koy
2. **Prompt 1** — i18n → /en ve /tr açılıyor mu
3. **Prompt 2** — tasarım + navbar + dil değiştirici
4. **Prompt 3** — Hero, Stats, About, Experience
5. **Prompt 4** — Therapeutic Areas, Education, Training, Skills, Contact
6. **Prompt 5** — SEO
7. **Prompt 6** — cila + build
8. **Adım 7** — GitHub Desktop + Vercel ile yayınla
