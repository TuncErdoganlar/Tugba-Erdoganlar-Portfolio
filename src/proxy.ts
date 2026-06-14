import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed the "middleware" convention to "proxy"; next-intl's
// request handler works identically here.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes, Next.js internals and Vercel internals
  // - files with an extension (e.g. favicon.ico, og.png)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
