export async function GET(req) {
  const url = new URL(req.url);
  const path = url.searchParams.get("path");

  if (!path) return new Response("Missing path", { status: 400 });

  const res = await fetch(`https://darkcyan-gnu-869252.hostingersite.com//wp-json/${path}`);
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
