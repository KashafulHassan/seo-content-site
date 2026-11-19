---
title: "The Technical SEO Checklist for New Websites"
description: "The foundational technical SEO tasks every new site should complete before launch, from robots.txt to canonical tags."
date: "2026-11-26"
category: "SEO"
tags: ["technical-seo", "crawling", "indexing"]
---

Great content can't rank if search engines can't find, crawl, and understand it. Technical SEO is the plumbing that makes everything else work.

## Crawlability

- Make sure `robots.txt` isn't blocking important paths
- Remove any leftover `noindex` tags from staging
- Use real `<a href>` links, not JavaScript click handlers

## Sitemaps

Generate an XML sitemap listing your canonical URLs and submit it in Search Console. Keep it updated automatically. A stale sitemap is worse than none.

## Canonicalization

Duplicate content splits ranking signals. Pick one version of each page and point to it with `<link rel="canonical">`. Also enforce a single protocol and hostname: HTTPS, with or without `www`, but not both.

## Status codes

Use `301` for permanent redirects, `404` or `410` for removed pages, and avoid redirect chains. Soft 404s, where a missing page returns `200`, confuse crawlers and waste crawl budget.

## Mobile-first

Google indexes the mobile version of your site. If content or links are hidden on mobile, they effectively don't exist.