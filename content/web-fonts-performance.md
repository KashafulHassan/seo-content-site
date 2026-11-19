---
title: "Loading Web Fonts Without Killing Performance"
description: "Practical strategies for self-hosting, subsetting, and preloading fonts to avoid invisible text and layout shift."
date: "2026-12-12"
category: "Performance"
tags: ["fonts", "performance", "css"]
---

Custom fonts make a brand feel distinct, but poorly loaded fonts cause invisible text, layout shifts, and slower paints.

## Self-host your fonts

Loading fonts from a third-party domain adds DNS lookups and connection overhead. Self-hosting keeps fonts on your origin, where they benefit from your existing connection and caching rules.

## Use WOFF2 and subset

WOFF2 is the only format you need today. Subsetting strips out glyphs you'll never use, like unneeded languages and symbols, which often cuts file size by more than half.

## Control the swap

`font-display: swap` shows fallback text immediately, then swaps in the custom font when it's ready. Text is never invisible, though you may see a brief style change.

## Reduce layout shift

Use `size-adjust`, `ascent-override`, and related descriptors to match your fallback font's metrics to the custom font. The swap becomes nearly invisible and your CLS stays low.

## Preload selectively

Preload only the one or two fonts used above the fold. Preloading everything competes with more important resources like your LCP image.