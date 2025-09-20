"use client";
import { useEffect, useState } from "react";

export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/products?category=${categoryId}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [categoryId]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Category: {categoryId}</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((prod) => (
          <li
            key={prod.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={prod.images[0]?.src || "/placeholder.png"}
              alt={prod.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h3 className="font-semibold text-lg">{prod.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: prod.price_html }} />

            {/* ✅ Open WordPress product page directly in SAME tab */}
            <a
              href={prod.permalink} // WordPress product URL
              className="mt-2 inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold"
            >
              View Product
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
