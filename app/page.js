// app/page.js
async function getHomepage() {
  const res = await fetch(
    "https://darkcyan-gnu-869252.hostingersite.com/wp-json/wp/v2/pages?slug=homepage",
    { cache: "no-store" }
  );

  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const text = await res.text(); // log HTML response for debugging
    console.error("WordPress did not return JSON:", text);
    return { title: { rendered: "Homepage" }, content: { rendered: "<p>Default content</p>" } };
  }

  const data = await res.json();
  return data[0];
}

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-5xl font-bold text-center">Welcome to My Custom Homepage</h1>
      <p className="mt-6 text-lg text-center">
        This is fully built in Next.js with custom components, animations, etc.
      </p>

      {/* Example custom sections */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-blue-100 rounded shadow">Feature 1</div>
        <div className="p-6 bg-green-100 rounded shadow">Feature 2</div>
        <div className="p-6 bg-yellow-100 rounded shadow">Feature 3</div>
      </section>
    </main>
  );
}
