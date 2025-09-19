// app/page.js
import AboutSection from "./components/aboutSection";
import Herosection from "./components/hero";
import ProductsSection from "./components/productSection";
import IndustriesServed from "./components/industriesServed";
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
    <main className="">
      <Herosection/>
      <AboutSection/>
      <ProductsSection/>
      <IndustriesServed/>
    </main>
  );
}




