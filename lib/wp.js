const WP_API_BASE = process.env.WP_API_BASE;
const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY;
const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET;

function getAuthHeader() {
  const auth = Buffer.from(`${WC_CONSUMER_KEY}:${WC_CONSUMER_SECRET}`).toString("base64");
  return { Authorization: `Basic ${auth}` };
}

export async function fetchCategories() {
  const res = await fetch(`${WP_API_BASE}/products/categories`, {
    headers: getAuthHeader(),
    next: { revalidate: 60 }, // ISR
  });
  if (!res.ok) {
    const text = await res.text();
    console.error("Failed to fetch categories:", res.status, text);
    throw new Error("Failed to fetch categories");
  }
  return res.json();
}

export async function fetchProductsByCategory(categoryId) {
  const res = await fetch(`${WP_API_BASE}/products?category=${categoryId}`, {
    headers: getAuthHeader(),
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProductBySlug(slug) {
  const res = await fetch(`${WP_API_BASE}/products?slug=${slug}`, {
    headers: getAuthHeader(),
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  const [product] = await res.json();
  return product;
}
