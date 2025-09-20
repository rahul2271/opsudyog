"use client";
import { useEffect, useState } from "react";

export default function ProductsPage({ params }) {
  const { categoryId } = params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/products?category=${categoryId}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [categoryId]);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Products in Category {categoryId}</h1>
      <ul className="grid grid-cols-2 gap-6">
        {products.map(prod => (
          <li key={prod.id} className="border p-4 rounded">
            <img src={prod.images[0]?.src} alt={prod.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="font-semibold">{prod.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: prod.price_html }} />
          </li>
        ))}
      </ul>
    </main>
  );
}
