// Server Component
import React from "react";

export default async function ProductPage({ params }) {
  const { slug } = params;

  try {
    // Fetch full WordPress product page HTML
    const res = await fetch(
      `https://darkcyan-gnu-869252.hostingersite.com/product/${slug}`,
      { cache: "no-store" } // ensures fresh content
    );
    const html = await res.text();

    return (
      <main className="p-6">
        {/* Render WordPress HTML safely */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    );
  } catch (error) {
    return <p className="text-red-500">Failed to load product page.</p>;
  }
}
