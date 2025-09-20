// app/api/products/route.js
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// Initialize WooCommerce API
const api = new WooCommerceRestApi({
  url: "https://darkcyan-gnu-869252.hostingersite.com", // Your WP URL
  consumerKey: "ck_your_consumer_key",
  consumerSecret: "cs_your_consumer_secret",
  version: "wc/v3",
});

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    // Fetch products by category
    const response = await api.get("products", {
      category,
      per_page: 100, // adjust as needed
    });

    const products = response.data.map(prod => ({
      id: prod.id,
      name: prod.name,
      slug: prod.slug,
      images: prod.images,
      price_html: prod.price_html,
      permalink: prod.permalink,
    }));

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch products" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
