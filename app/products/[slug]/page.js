import { use } from "react";
import Layout from "../../../components/layout";
import axios from "axios";

export async function generateMetadata({ params }) {
  const { slug } = params;
  return { title: `Product - ${slug}` };
}

export default async function ProductPage({ params }) {
  const { slug } = params;

  // Fetch product by slug
  const res = await axios.get(`https://yourwordpresssite.com/wp-json/wp/v2/products?slug=${slug}`);
  const product = res.data[0];

  if (!product) return <p>Product not found</p>;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 dangerouslySetInnerHTML={{ __html: product.title.rendered }} className="text-4xl font-bold" />
        <img src={product.featured_image} alt={product.title.rendered} className="w-full h-96 object-cover my-4" />
        <div dangerouslySetInnerHTML={{ __html: product.content.rendered }} className="product-content" />
      </div>
    </Layout>
  );
}
