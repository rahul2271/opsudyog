import axios from "axios";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get("category");

  try {
    const res = await axios.get(
      `${process.env.WP_URL}/wp-json/wc/v3/products`,
      {
        auth: {
          username: process.env.WC_KEY,
          password: process.env.WC_SECRET,
        },
        params: categoryId ? { category: categoryId } : {},
      }
    );

    return new Response(JSON.stringify(res.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
