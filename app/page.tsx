import Link from "next/link";
import { getAllPosts, getCategories } from "@/lib/posts";

export const dynamic = "force-static";

export default function Home() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <>
      <section className="hero">
        <h1>
          Content that renders before it <span>ranks</span>.
        </h1>
        <p>
          A static, SEO-optimized content site: pre-rendered HTML, dynamic
          meta tags, structured data, sitemaps, and clean URLs.
        </p>
      </section>

      <section id="categories" aria-label="Categories">
        <h2>Categories</h2>
        <div className="categories">
          {categories.map((c) => (
            <Link
              key={c.name}
              className="category-card"
              href={`/category/${c.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {c.name} ({c.count})
            </Link>
          ))}
        </div>
      </section>

      <section aria-label="Latest posts" style={{ marginTop: "3rem" }}>
        <h2>Latest Posts</h2>
        <ul className="post-list">
          {posts.map((post) => (
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
      </section>
    </>
  );
}