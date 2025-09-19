async function getHomepage() {
  const res = await fetch(
    "https://darkcyan-gnu-869252.hostingersite.com/wp-json/wp/v2/pages?slug=homepage",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch homepage: ${res.status}`);
  }

  const data = await res.json();
  return data[0];
}
