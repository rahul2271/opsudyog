import Link from "next/link";
import { fetchCategories, fetchProductsByCategory } from "../../../lib/wp";

// ✅ Static params for all categories
export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

// ✅ Dynamic SEO Metadata per category (JavaScript only, no TS types)
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
    description:
      category.description || `Explore premium products in ${category.name} at OPS Udyog.`,
    openGraph: {
      title: `${category.name} | OPS Udyog`,
      description:
        category.description || `Explore premium products in ${category.name} at OPS Udyog.`,
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

  if (!category) return <div>Category not found</div>;

  const products = await fetchProductsByCategory(category.id);

  // ✅ Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.opsudyog.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.name,
        item: `https://www.opsudyog.com/category/${category.slug}`,
      },
    ],
  };

  // ✅ Product Schema for SEO Rich Snippets
  const productSchema = products.map((prod) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: prod.name,
    image: prod.images?.[0]?.src,
    description: prod.description || `${prod.name} available at OPS Udyog.`,
    sku: prod.sku || prod.id,
    brand: {
      "@type": "Brand",
      name: "OPS Udyog",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.opsudyog.com/product/${prod.slug}`,
      priceCurrency: "USD",
      price: prod.price,
      availability: "https://schema.org/InStock",
    },
  }));

  return (
    <div className="container mx-auto px-6 py-10 pt-[180px]">
      {/* ✅ Inject Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, ...productSchema]),
        }}
      />

      {/* Page Title */}
      <h1 className="text-4xl font-extrabold mb-8 text-slate-900 dark:text-white">
        {category.name}
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((prod) => (
          <Link key={prod.id} href={`/product/${prod.slug}`}>
            <div className="group relative bg-white dark:bg-slate-900 p-6 
                rounded-xl border border-gray-200 dark:border-gray-700 
                shadow hover:shadow-xl transition transform hover:-translate-y-1">
              {prod.images?.[0]?.src && (
                <img
                  src={prod.images[0].src}
                  alt={prod.name}
                  className="mb-4 w-full h-48 object-cover rounded-lg 
                    group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-orange-500">
                {prod.name}
              </h2>
              <p className="text-orange-600 font-bold mt-2">${prod.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
