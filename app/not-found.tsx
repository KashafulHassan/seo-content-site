import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 0" }}>
      <h1>404 — nothing here</h1>
      <p style={{ color: "var(--muted)", marginBottom: "1.5rem" }}>
        This page drifted off the grid.
      </p>
      <Link href="/">← Back home</Link>
    </div>
  );
}