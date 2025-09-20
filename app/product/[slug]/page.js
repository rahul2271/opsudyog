import ProductClient from "./ProductClient";
import { fetchProductBySlug } from "../../../lib/wp";

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.WP_API_BASE}/products?consumer_key=${process.env.WC_CONSUMER_KEY}&consumer_secret=${process.env.WC_CONSUMER_SECRET}`
  );
  const products = await res.json();
  return products.map((prod) => ({ slug: prod.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = params;
  const product = await fetchProductBySlug(slug);

  if (!product) return <div>Product not found</div>;

  return <ProductClient product={product} />;
}
