---
title: "Getting Started With Server-Side Rendering"
description: "What SSR and static generation actually mean, when to use each, and how they affect your SEO and Core Web Vitals."
date: "2026-11-10"
category: "Web Development"
tags: ["ssr", "seo", "nextjs"]
---

Server-side rendering (SSR) and static site generation (SSG) both move HTML generation off the client. The difference is timing.

## Static generation

With SSG, pages are built once at deploy time. Every visitor gets a pre-built file. That means:

- Near-zero server cost
- Best possible Time to First Byte
- Perfectly cacheable responses

## When SSR matters

SSR regenerates HTML per request (or per revalidation window). Use it when content changes frequently or depends on per-request data — dashboards, feeds, search results.

## Why this matters for SEO

Crawlers receive full, ready HTML in both cases. No client-side hydration hoop is required for indexing, which avoids the classic SPA pitfall where content arrives, if at all, after JavaScript executes.