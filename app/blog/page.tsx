import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description: "All articles: design, technology, and culture.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <h1>Blog</h1>
      <ul className="post-list">
        {getAllPosts().map((post) => (
          <li key={post.slug} className="post-card">
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="meta">
              {post.category} · {post.date}
            </p>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}