import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get(
      `${process.env.WP_URL}/wp-json/wc/v3/products/categories`,
      {
        auth: {
          username: process.env.WC_KEY,
          password: process.env.WC_SECRET,
        },
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
