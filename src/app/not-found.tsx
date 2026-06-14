import Link from "next/link";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

// Global not-found for routes outside any locale. Needs its own html/body
// because the app's primary layout lives under [locale].
export default function NotFound() {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable}`}>
      <body className="flex min-h-screen items-center justify-center bg-bg text-ink">
        <div className="px-6 text-center">
          <p className="font-display text-6xl font-semibold text-primary">404</p>
          <p className="mt-4 text-ink-soft">This page could not be found.</p>
          <Link
            href="/en"
            className="mt-6 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-bg"
          >
            Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
