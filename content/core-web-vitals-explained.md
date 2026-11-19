---
title: "Core Web Vitals Explained Without the Jargon"
description: "A plain-language breakdown of LCP, INP, and CLS, what causes poor scores, and the fixes that actually move the needle."
date: "2026-11-14"
category: "Performance"
tags: ["core-web-vitals", "performance", "seo"]
---

Core Web Vitals are Google's attempt to measure how a page *feels* to real users. There are three metrics, and each one targets a different kind of frustration.

## Largest Contentful Paint (LCP)

LCP measures how long it takes for the biggest visible element, usually a hero image or headline, to render. Aim for under 2.5 seconds. Common culprits:

- Unoptimized hero images
- Render-blocking CSS and fonts
- Slow server response times

## Interaction to Next Paint (INP)

INP replaced First Input Delay in 2024. It tracks how quickly the page responds to clicks, taps, and key presses across the whole visit. Long JavaScript tasks are the usual offender. Break up heavy work and defer non-critical scripts.

## Cumulative Layout Shift (CLS)

CLS measures unexpected movement. If a button jumps just as you go to tap it, that's layout shift. Always set explicit `width` and `height` on images, and reserve space for ads and embeds.

## Field data vs. lab data

Lighthouse gives you lab data, a simulated run on one device. Google ranks on field data collected from real Chrome users. A perfect Lighthouse score doesn't guarantee passing vitals in Search Console.