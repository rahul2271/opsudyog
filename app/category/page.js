import { fetchCategories } from "../../lib/wp";
import CategoriesGrid from "./CategoriesGrid";

export const metadata = {
  title: "Explore Product Categories | Ops Udyog",
  description:
    "Browse our wide range of product categories at Ops Udyog. Discover premium, authentic, and industry-leading solutions tailored to your needs.",
};

export default async function HomePage() {
  const categories = await fetchCategories();

  return <CategoriesGrid categories={categories} />;
}
