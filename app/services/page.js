// app/services/page.js

import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Services | Ops Udyog",
  description:
    "Explore Ops Udyog services – Industrial Installation, Maintenance & Support, and Custom Machine Designing for your business needs.",
};

export default function ServicesPage() {
  return (
    // <section className="relative w-full min-h-screen bg-background text-foreground py-20 px-6 md:px-16 lg:px-28 overflow-hidden">
      <ServicesContent />
    // </section>
  );
}
