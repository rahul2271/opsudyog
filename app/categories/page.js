"use client";
import { useEffect, useState } from "react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Product Categories</h1>
      <ul className="space-y-4">
        {categories.map(cat => (
          <li key={cat.id}>
            <a
              href={`/products/${cat.id}`}
              className="flex items-center space-x-2 text-blue-700 underline"
            >
              {cat.image && <img src={cat.image.src} alt={cat.name} width={40} />}
              <span>{cat.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
