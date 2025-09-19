// app/blog/[slug]/page.js
import React from "react";

async function getPost(slug) {
  const res = await fetch(
    `https://darkcyan-gnu-869252.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}`,
    { cache: "no-store" }
  );
  const post = await res.json();
  return post[0];
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) return <p>Post not found</p>;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title.rendered}</h1>
      <div
        className="mt-4 prose"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  );
}
