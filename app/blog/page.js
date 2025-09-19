// app/blog/page.js
import React from "react";
import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://darkcyan-gnu-869252.hostingersite.com/wp-json/wp/v2/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
