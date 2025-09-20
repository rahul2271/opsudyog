import Link from "next/link";
import { fetchCategories } from "../../lib/wp";

export default async function HomePage() {
  const categories = await fetchCategories();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Product Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.id} href={`/category/${cat.slug}`}>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              {cat.image?.src && (
                <img
                  src={cat.image.src}
                  alt={cat.name}
                  className="mb-4 w-full h-40 object-cover rounded"
                />
              )}
              <h2 className="text-xl font-semibold">{cat.name}</h2>
              <p className="text-gray-600">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
