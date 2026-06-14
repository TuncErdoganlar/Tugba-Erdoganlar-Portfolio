# Tuğba Erdoğanlar — Professional Site

Kıdemli Klinik Araştırma Uzmanı (Senior Clinical Research Associate) için iki dilli (EN/TR), sofistike ve güven veren bir profesyonel web sitesi. Next.js + Vercel.

> Bu dosya projenin kalıcı bağlamıdır. Her görevde buradaki stack, tasarım sistemi ve CV verilerini esas al. **Bu bir geliştirici portfolyosu DEĞİL** — kıdemli bir klinik araştırma profesyoneline ait, kurumsal ve editöryel bir profesyonel sitedir. Ton ona göre: ciddi, sade, güvenilir.

---

## Stack & konvansiyonlar

- **Next.js** (App Router, en güncel kararlı sürüm) + **TypeScript** (strict)
- **Tailwind CSS v4** — tasarım token'ları `globals.css` içinde CSS değişkeni; renk/font için doğrudan hex/px yazma, token kullan
- **next-intl** — EN/TR, `/en` ve `/tr` route'ları, **varsayılan locale `en`** (uluslararası klinik araştırma kitlesi). Tüm metinler `messages/*.json`'dan gelir, hardcoded metin yok.
- **Framer Motion** — animasyonlar **çok hafif ve ölçülü** (subtle fade/slide). Oyuncu, gösterişli efekt YOK. Profesyonel ciddiyet esas.
- Paket yöneticisi: `npm`
- Bileşenler `src/components/`, PascalCase. Server Component varsayılan; sadece interaktivite (motion, dil toggle, filtre) gerektirenler `"use client"`.
- `@/` alias → `src/`

## Dosya yapısı (hedef)

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx        # NextIntlClientProvider, fontlar, <html lang>
│   │   └── page.tsx          # section'ları dizer
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navbar.tsx            # sticky, anchor linkler + LanguageSwitcher
│   ├── LanguageSwitcher.tsx  # EN | TR
│   ├── Hero.tsx              # isim, unvan, konum, iletişim
│   ├── Stats.tsx             # "bir bakışta" rakamlar
│   ├── About.tsx             # profesyonel özet
│   ├── Experience.tsx        # kariyer timeline (ana bölüm)
│   ├── TherapeuticAreas.tsx  # terapötik/çalışma deneyimi (vitrin, filtreli)
│   ├── Education.tsx
│   ├── Training.tsx          # eğitimler & sertifikalar (gruplu, derli toplu)
│   ├── Skills.tsx            # yetkinlikler & diller
│   ├── Contact.tsx
│   └── Footer.tsx
├── i18n/
│   ├── routing.ts
│   └── request.ts
└── middleware.ts
messages/
├── en.json
└── tr.json
public/
└── cv.pdf                    # "Download CV" butonu
```

---

## ⚠️ Gizlilik (ÖNEMLİ — herkese açık site)

CV'de ev adresi (Bostanlı Mah. ... No: 12 D:4) ve kişisel cep telefonu var. **Bunları herkese açık siteye KOYMA.**
- Konum olarak yalnızca **"İzmir, Türkiye"** göster (sokak/kapı no yok).
- İletişim için **e-posta** ve **LinkedIn** kullan; istenirse bir iletişim formu. Cep telefonunu açıkça yayınlama (istenirse formdan iletilsin).
- Bu, kimliğe yönelik riskleri ve istenmeyen iletişimi azaltır.

---

## Tasarım sistemi  (yön: sofistike, güven veren, editöryel)

Genel his: sıcak kırık-beyaz zemin, otoriter serif başlıklar, temiz okunur gövde, cömert boşluk, sakin renk. Klinik/medikal güven duygusu ama soğuk-kurumsal değil — insani ve zarif. Parlak renkler, neon, ağır gölge YOK.

### Fontlar
- **Başlıklar (display):** `Fraunces` (Google Fonts) — zarif, otoriter, modern serif
- **Gövde:** `Geist` (Google/`geist` paketi) — temiz, nötr, çok okunur sans
- Arial / Times / sistem fontları kullanma.
- `next/font` ile yükle.

### Renk token'ları (light tema)
```css
--bg:           #FAF8F3;  /* sıcak kırık beyaz */
--bg-alt:       #F0EBE1;  /* section alternasyonu */
--ink:          #1A1C1B;  /* ana metin, sıcak siyah */
--ink-soft:     #5A615D;  /* ikincil metin */
--primary:      #14564F;  /* derin petrol/teal — güven, sağlık */
--primary-soft: #E4EFEC;  /* açık teal dolgu (etiketler, vurgular) */
--accent:       #A8742E;  /* mat bronz/altın — çok az kullan, küçük vurgular */
--line:         rgba(26,28,27,0.10);
```
Renk kullanımı ölçülü: ağırlık `--ink` + `--primary`; `--accent` yalnızca küçük detaylarda (ör. aktif filtre, ince çizgi). Kart/etiketlerde dolgu olarak `--primary-soft`.

### Düzen
- Container max-width ~960–1040px (metin yoğun, editöryel okuma), yatayda cömert padding
- Hero: isim büyük serif, altında unvan, kısa tagline, konum + iletişim. Sade, asimetri abartısız.
- Sticky minimal navbar; mobilde hamburger
- Köşe yarıçapı yumuşak (8–12px), gölge yok/çok hafif, ince border'lar
- Bölümler arası net ayrım, `--bg` / `--bg-alt` alternasyonu

### Animasyon (Framer Motion — ölçülü)
- Section'lar: `whileInView` ile hafif fade-up (`y: 12 → 0`), `viewport={{ once: true }}`
- Hover'da abartısız tepkiler (renk/çizgi değişimi). Bounce, parlama, sürekli animasyon YOK.
- `prefers-reduced-motion`'a saygı göster.

---

## SEO

- Her locale için `generateMetadata`: EN/TR ayrı `title` + `description`
- Open Graph + Twitter card; `public/og.png`
- JSON-LD **Person** schema: `name`, `jobTitle: "Senior Clinical Research Associate"`, `url`, `sameAs: [LinkedIn]`
- `sitemap.ts` + `robots.ts`; `<html lang>` + locale'ler arası `hreflang`
- Semantik HTML, doğru başlık hiyerarşisi (tek h1)

---

## Kişi & içerik verileri

**Tuğba Erdoğanlar** — Senior Clinical Research Associate
- E-posta: tugbaerdoganlar@gmail.com
- LinkedIn: *(eklenecek — klinik araştırma için güçlü öneri; placeholder bırak)*
- Konum: İzmir, Türkiye  *(yalnızca şehir — tam adres/cep no SİTEDE YOK)*

### Profesyonel özet  (CV'de yoktu — deneyimden yazıldı)
**EN:** Senior Clinical Research Associate with nearly two decades of experience in the monitoring and management of clinical trials across leading CROs and sponsors. Broad therapeutic expertise spanning oncology, nephrology, cardiovascular, infectious disease, vaccines, and medical devices, with deep command of ICH-GCP, SOPs, and EC/MoH regulatory submissions in Turkey and internationally. Experienced across Phase I–IV studies — from site feasibility and start-up through monitoring and close-out.

**TR:** İlaç araştırma kuruluşları (CRO) ve sponsorlarda yaklaşık yirmi yıllık klinik araştırma izleme ve yönetim deneyimine sahip Kıdemli Klinik Araştırma Uzmanı. Onkoloji, nefroloji, kardiyovasküler, enfeksiyon hastalıkları, aşılar ve tıbbi cihazlar dâhil geniş bir terapötik alanda; ICH-GCP, SOP'lar ve Türkiye ile uluslararası EC/MoH düzenleyici başvurularında derin uzmanlık. Faz I–IV çalışmalarında, merkez fizibilitesi ve başlatmadan izleme ve kapanışa kadar deneyimli.

### Bir bakışta (Stats bölümü)
- **~20 yıl** klinik araştırma deneyimi
- **30+** klinik çalışma (izleme/yönetim)
- **15+** terapötik alan
- **Faz I–IV** çalışmalar

### Profesyonel deneyim  (timeline — ana bölüm, en yeniden eskiye)
| Tarih | Şirket | Pozisyon |
|---|---|---|
| Haz 2024 – devam | ICON | Senior Clinical Research Associate |
| Şub 2023 – Haz 2024 | IQVIA | Freelancer Senior Clinical Research Associate |
| May 2020 – May 2023 | PSI | Freelancer Senior Clinical Research Associate |
| Haz 2019 – Ara 2019 | Covance Ltd. | Senior Clinical Research Associate |
| Ağu 2017 – Eki 2018 | Inventiv Health Ltd. | Study Start-up Specialist |
| Oca 2015 – Ağu 2017 | Occlutech Ltd. | Consultant |
| Eki 2009 – Oca 2015 | Cromnia CRO | Clinical Research Manager |
| May 2007 – Ağu 2009 | Kuantum CRO | Senior CRA |
| Eki 2005 – May 2007 | Kuantum CRO | CRA / CTA |
| Ağu 2004 – Eki 2005 | Hurok Marble Turkey | Export Department Leader |
| Ara 2001 – Haz 2003 | Atlas Energy Company | Project Administrative |

Sorumluluk temaları (rollerde dönüşümlü kullan): site monitoring (routine + close-out), pre-study/initiation ziyaretleri, study & site file / TMF yönetimi, EC & MoH başvuruları, IVDR/MDD başvuruları, protokol/ICF/CRF güncelleme, SOP hazırlama, CRA süpervizyonu, regülasyon otoriteleriyle iletişim. (Tüm sorumluluk maddeleri CV'den; gerekirse özetle.)

### Terapötik / çalışma deneyimi  (TherapeuticAreas vitrini — filtreli)
Bu bölüm onun en güçlü farkı: geniş terapötik yelpaze. Terapötik alana göre grupla; üstte alan/faz'a göre basit filtre (JS ile, sendPrompt değil). Her kayıt: alan, endikasyon, faz, merkez sayısı, lokasyon.

| Terapötik Alan | Endikasyon | Faz | Merkez | Lokasyon |
|---|---|---|---|---|
| Infection | Paediatric HCC | III | 3 | Turkey |
| Oncology | Hepatocellular Carcinoma | III | 4 | Turkey |
| Ophthalmology | Pharmaceutical | III | 6 | Turkey |
| Vaccine | Newborn | III | 1 | Turkey |
| Hematology | Non-Hodgkin's Lymphoma | III | 3 | Turkey |
| Neurology | Multiple Sclerosis | IV | 6 | Turkey |
| Nephrology | Chronic Renal Failure – predialysis | III | 12 | Turkey |
| Nephrology | Chronic Renal Failure – dialysis | III | 12 | Turkey |
| Nephrology | Chronic Renal Failure – follow up | III | 4 | Turkey |
| Cardiovascular | Atrial Fibrillation | III | 23 | Turkey |
| Dermatology | Onychomycosis | III | 5 | Turkey |
| Infectious Disease | Nosocomial Pneumonia | III | 3 | Turkey |
| Respiratory / Pulmonary | Asthma | III | 18 | Turkey |
| Oncology | Lung Cancer | III | 13 | Turkey |
| Nephrology | Renal Transplantation | IV | 6 | Turkey |
| Immunology / Vaccines | Immunogenicity & Safety (IC43) | II | 5 | Turkey |
| Gastroenterology | Ulcerative Colitis | III | 10 | Turkey |
| Children's Mental Health | ADHD | III | 1 | Turkey |
| Orthopaedics | Gadolinium Retention in Bones | IV | 3 | Turkey |
| Rheumatology | Ischemic Digital Ulcers | III | 3 | Turkey |
| Medical Device (LAA) | Left Atrial Appendage Occluder | I | 5 | Germany & England |
| Medical Device (AFR) | Catheter-based AFR Implantation | I | 10 | Turkey, Germany & England |
| Medical Device (VSD) | Ventricular Septal Defect Occluder | I | 10 | Turkey & England |
| Oncology | Lung Cancer | III | 6 | Turkey |
| Oncology | NSCLC | III | 6 | Turkey |
| Oncology | Non-Hodgkin's Lymphoma | III | 5 | Turkey |
| Oncology | Diffuse Large B-cell Lymphoma | III | 5 | Turkey |
| Hematology | Paediatric Haemophilia B | III | 2 | Turkey |
| Oncology | Lung Cancer | III | 4 | Turkey |
| Oncology | Diffuse Large B-cell Lymphoma | III | 11 | Turkey |
| Infectious Disease | Staphylococcus aureus Bacteremia | III | 4 | Turkey |

### Eğitim
- **Kimya Mühendisliği** — Ege Üniversitesi, Mühendislik Fakültesi, İzmir (İngilizce eğitim), 2003

### Eğitimler & sertifikalar  (Training — GRUPLU, ham liste değil)
CV'de ~40 eğitim var; hepsini ham listeleme. Şu kategorilerde grupla ve derli toplu göster (gerekirse "daha fazla" ile genişlet):
- **GCP & klinik standartlar:** ICH-GCP, SOP eğitimleri (ICON, IQVIA, PSI, Covance/Merck, Pfizer, AKADEMIKA, ARGEFAR — GCP/Monitoring courses), Declaration of Helsinki, CRA Training I & II, Fraud & Misconduct in Clinical Trials
- **Düzenleyici (regulatory):** EC/MoH başvuruları, yeni regülasyonlar, MDD 2007/47/EC (İstanbul Sanayi Odası), ICH
- **Çalışma/yatırımcı toplantıları:** Investigator & Monitor Meetings (protokol, IMP handling, e-CRF, SAE raporlama), RDC Workshop, LAA Conference
- **Kalite & profesyonel gelişim (Elginkan Vakfı, 2003–2004):** ISO 9000/9001:2000, İç Denetçi Kursu, İstatistiksel Proses Kontrol, HACCP, 5S, Zaman Yönetimi, Liderlik & Motivasyon, Problem Çözme

### Yetkinlikler & diller (Skills)
- **Klinik:** ICH-GCP, Clinical Monitoring (routine & close-out), Site Management, Study Start-up, Trial Master File (TMF) & Site/Core Files, Pre-study/Initiation visits, Feasibility
- **Düzenleyici:** Ethics Committee (EC) & MoH başvuruları, IVDR/MDD başvuruları, Regulatory Authority iletişimi, protokol/ICF/CRF & SOP hazırlama
- **Diller:** İngilizce (akıcı — sözlü, yazılı, teknik), Fransızca (A1)
- **Yazılım:** Microsoft Office (Word, Excel, PowerPoint)

> Not: CV'deki "Windows 2007/2003/1998" satırı güncelliğini yitirdiği için "Microsoft Office" olarak sadeleştirildi.

---

## Komutlar
- Geliştirme: `npm run dev`
- Build (deploy öncesi zorunlu): `npm run build`
- Lint: `npm run lint`
