import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories, getPostsByCategory } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map((c) => ({
    slug: c.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cats = getCategories();
  const cat = cats.find((c) => c.name.toLowerCase().replace(/\s+/g, "-") === params.slug);
  if (!cat) return {};
  return {
    title: `${cat.name} articles`,
    description: `All ${cat.name} articles.`,
    alternates: { canonical: `/category/${params.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const posts = getPostsByCategory(params.slug);
  if (posts.length === 0) notFound();
  return (
    <>
      <h1>{posts[0].category}</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug} className="post-card">
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="meta">{post.date}</p>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}