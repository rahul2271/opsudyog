import Link from "next/link";
import { fetchCategories, fetchProductsByCategory } from "../../../lib/wp";

export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export default async function CategoryPage({ params }) {
  const { slug } = params;
  const categories = await fetchCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) return <div>Category not found</div>;

  const products = await fetchProductsByCategory(category.id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((prod, index) => (
          <Link key={`${prod.id}-${index}`} href={`/product/${prod.slug}`}>
            <div className="p-4 border rounded shadow hover:shadow-lg transition">
              {prod.images?.[0]?.src && (
                <img
                  src={prod.images[0].src}
                  alt={prod.name}
                  className="mb-4 w-full h-40 object-cover rounded"
                />
              )}
              <h2 className="text-xl font-semibold">{prod.name}</h2>
              <p className="text-orange-600 font-bold mt-2">${prod.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
