import { use } from "react";
import Layout from "../../../components/layout";
import axios from "axios";
import Link from "next/link";

export default async function CategoryPage({ params }) {
  const { slug } = params;

  // Fetch category
  const categoryRes = await axios.get(`https://yourwordpresssite.com/wp-json/wp/v2/categories?slug=${slug}`);
  const category = categoryRes.data[0];

  // Fetch products for this category
  const productsRes = await axios.get(`https://yourwordpresssite.com/wp-json/wp/v2/products?categories=${category.id}`);
  const products = productsRes.data;

  if (!category) return <p>Category not found</p>;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 dangerouslySetInnerHTML={{ __html: category.name }} className="text-3xl font-bold" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <div className="border p-4 rounded hover:shadow-lg transition">
                <img src={product.featured_image} alt={product.title.rendered} className="w-full h-48 object-cover rounded" />
                <h2 dangerouslySetInnerHTML={{ __html: product.title.rendered }} className="mt-2 font-semibold" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
