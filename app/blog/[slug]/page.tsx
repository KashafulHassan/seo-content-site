import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";
import { SITE } from "@/lib/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>; // ✅ Next 15: params is a Promise
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params; // ✅ await params
  const post = await getPost(slug); // ✅ await getPost
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [{ url: `/blog/${post.slug}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/blog/${post.slug}/opengraph-image`],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params; // ✅
  const post = await getPost(slug); // ✅
  if (!post) notFound();

  const tags = post.tags ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    keywords: tags.join(", "),
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="meta">
        {post.category} · {post.date}
      </p>
      <h1>{post.title}</h1>
      <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
        {post.description}
      </p>
      <div className="article" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      <p style={{ marginTop: "2.5rem" }}>
        {tags.map((t) => (
          <Link key={t} href="/" className="tag">
            #{t}
          </Link>
        ))}
      </p>
      <Link href="/blog" style={{ display: "inline-block", marginTop: "1.5rem" }}>
        ← All posts
      </Link>
    </article>
  );
}