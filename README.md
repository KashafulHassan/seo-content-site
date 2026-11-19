# Neon Notes — Search-Optimized Content Site

A content site built with Next.js App Router, fully statically generated.
**Lighthouse SEO: 100/100** (mobile & desktop; see /lighthouse for reports).

## How to run

npm install
npm run dev      # development
npm run build && npm start   # production (what Lighthouse should measure)

## SEO checklist
- [x] Fully static generation (SSG) — all routes pre-rendered to HTML
- [x] Dynamic per-page meta tags via generateMetadata (title, description, canonical)
- [x] Open Graph + Twitter card data on every page, dynamic branded OG images (next/og)
- [x] Auto-generated sitemap.xml (app/sitemap.ts) + robots.txt (app/robots.ts)
- [x] JSON-LD structured data: WebSite + Organization (site-wide), BlogPosting (posts)
- [x] Clean URLs: lowercase, hyphenated, extensionless (/blog/my-post)
- [x] Single h1 per page, semantic HTML (header/main/article/nav)
- [x] No layout shift, optimized font stack, minimal client JS

## Lighthouse results

| Category       | Mobile | Desktop |
| -------------- | ------ | ------- |
| Performance    | 76     | 93      |
| SEO            | 100    | 100     |
| Best Practices | 100    | 100     |
| Accessibility  | 100    | 100     |

## How the SEO score was achieved
SSG serves complete HTML immediately (no crawl timing issues); every route
ships canonical + OG + Twitter meta; structured data was validated with
Google's Rich Results Test; sitemap and robots emitted at build time; audited
with Chrome DevTools Lighthouse in production mode, 4 runs per device,
averaged, reports stored in /lighthouse.