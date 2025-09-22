// ./app/category/[slug]/page.js
// ✅ Server Component — no "use client"

import Link from "next/link";
import { fetchCategories, fetchProductsByCategory } from "../../../lib/wp";

// Helper to strip HTML tags from WordPress content
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
}

// Static params
export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

// Dynamic metadata
export async function generateMetadata({ params }) {
  const categories = await fetchCategories();
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    return {
      title: "Category Not Found - OPS Udyog",
      description: "This category does not exist.",
    };
  }

  return {
    title: `${category.name} | OPS Udyog`,
    description: category.description || `Explore premium products in ${category.name} at OPS Udyog.`,
    openGraph: {
      title: `${category.name} | OPS Udyog`,
      description: category.description || `Explore premium products in ${category.name} at OPS Udyog.`,
      url: `https://www.opsudyog.com/category/${category.slug}`,
      type: "website",
      images: category.image?.src ? [{ url: category.image.src }] : [],
    },
  };
}

export default async function CategoryPage({ params }) {
  const slug = params?.slug;
  const categories = await fetchCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) return <div className="text-center py-32">Category not found</div>;

  const products = await fetchProductsByCategory(category.id);

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-primary">
        {category.name}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-transform duration-500 transform hover:-translate-y-1"
          >
            {/* Image */}
            {prod.images?.[0]?.src && (
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={prod.images[0].src}
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
  <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors duration-300">
    {prod.name}
  </h2>

  {prod.description && (
    <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-gray-300">
      {stripHtml(prod.description).slice(0, 120)}...
    </p>
  )}

  <Link
    href={`/quote?product=${prod.slug}`}
    className="mt-4 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow text-center transition"
  >
    Request a Quote
  </Link>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}
