---
title: "Understanding HTTP Caching Headers"
description: "How Cache-Control, ETags, and CDNs work together to make your site faster and cheaper to run."
date: "2026-11-30"
category: "Web Development"
tags: ["caching", "http", "cdn"]
---

The fastest request is the one that never reaches your server. HTTP caching makes that possible, but only if your headers are set correctly.

## Cache-Control basics

The `Cache-Control` header tells browsers and CDNs how long to keep a response.

- `max-age=31536000, immutable`: ideal for fingerprinted assets like `app.a1b2c3.js`
- `no-cache`: store it, but revalidate before every use
- `no-store`: never cache, for sensitive data

## Revalidation with ETags

An `ETag` is a fingerprint of a response. When a cached copy expires, the browser sends it back. If nothing changed, the server replies `304 Not Modified` with no body. That's fast, and it barely touches bandwidth.

## stale-while-revalidate

This directive lets caches serve a slightly stale response instantly while fetching a fresh one in the background. Users get speed, and content stays reasonably current.

## Fingerprint your assets

Put a content hash in static filenames. When the file changes, the URL changes, so you can cache aggressively without ever worrying about users seeing outdated code.