---
title: "Modern Image Optimization: Formats, Sizing, and Lazy Loading"
description: "How to serve images that look sharp, load fast, and don't wreck your LCP score, using AVIF, WebP, and responsive markup."
date: "2026-11-18"
category: "Performance"
tags: ["images", "performance", "html"]
---

Images are typically the heaviest assets on a page. Getting them right is often the single biggest performance win available.

## Choose the right format

- **AVIF**: best compression, now widely supported
- **WebP**: a reliable fallback with excellent support
- **JPEG/PNG**: keep only as a last-resort fallback

Use the `<picture>` element to let the browser pick the best format it supports.

## Serve the right size

A 4000px image squeezed into a 400px container wastes bandwidth. Use `srcset` and `sizes` so the browser downloads only what it needs for the current viewport.

## Lazy load, but not everything

Add `loading="lazy"` to images below the fold. **Never** lazy load your LCP image. It delays the most important paint on the page. For that hero image, consider `fetchpriority="high"` instead.

## Don't forget alt text

Descriptive `alt` attributes help screen reader users and give search engines context. They also make your images eligible to rank in image search.