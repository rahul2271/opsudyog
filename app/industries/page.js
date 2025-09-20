"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  {
    name: "Rolling Mill",
    tagline: "Precision Metal Rolling Machinery",
    description:
      "High-performance machinery designed for metal rolling processes, ensuring precision, efficiency, and durability. OPS Udyog’s rolling mill equipment guarantees smooth production, minimal downtime, and consistent product quality.",
    features: [
      "Advanced rolling technology",
      "High durability & minimal maintenance",
      "Customizable for various metals",
      "Energy-efficient operation",
    ],
    image: "/rollmill.jpg",
  },
  {
    name: "Sugar Mill",
    tagline: "Efficient Sugar Processing Equipment",
    description:
      "Robust machinery for sugar production, delivering consistent output and high-quality products. Our equipment ensures hygienic processing, reduced wastage, and optimal energy utilization.",
    features: [
      "High output capacity",
      "Energy-saving design",
      "Durable stainless steel components",
      "Easy cleaning & maintenance",
    ],
    image: "/sugarmill.jpg",
  },
  {
    name: "Paper Mill",
    tagline: "State-of-the-art Paper Manufacturing Machines",
    description:
      "OPS Udyog’s paper mill machinery ensures smooth production, superior quality, and minimal material wastage. Ideal for both large-scale and specialized paper manufacturing.",
    features: [
      "High-speed paper production",
      "Consistent paper quality",
      "Energy-efficient operation",
      "Adaptable for multiple paper types",
    ],
    image: "/papermill.jpg",
  },
  {
    name: "Automobile Industry",
    tagline: "Machinery for Automotive Manufacturing",
    description:
      "Reliable machinery for automotive assembly and production. Our equipment helps maintain precision, speed, and safety in every stage of manufacturing.",
    features: [
      "Automated assembly lines",
      "Precision tooling and machines",
      "High-speed production support",
      "Custom solutions for OEMs",
    ],
    image: "/AutomobileIndustry.webp",
  },
  {
    name: "Oil and Gas Industry",
    tagline: "Equipment for Demanding Environments",
    description:
      "Specialized equipment designed for oil and gas manufacturing and extraction. OPS Udyog machinery is built to withstand high pressure, extreme temperatures, and challenging environments.",
    features: [
      "Durable and corrosion-resistant",
      "Safety-focused design",
      "Custom solutions for refineries",
      "Energy-efficient operation",
    ],
    image: "/oil.jpg",
  },
  {
    name: "General Engineering",
    tagline: "Versatile Machinery for Engineering Applications",
    description:
      "Flexible, high-precision equipment for general engineering industries. Supports a variety of production needs while ensuring accuracy and reliability.",
    features: [
      "Multi-purpose machining",
      "High-accuracy production",
      "Customizable setups",
      "Reliable and low maintenance",
    ],
    image: "/general.jpg",
  },
  {
    name: "Tool Room",
    tagline: "Precision Tool-Making Machines",
    description:
      "High-efficiency machinery for tool rooms, delivering accurate tooling solutions and supporting advanced manufacturing requirements.",
    features: [
      "Precision tool creation",
      "Efficient workflow",
      "Customizable tooling solutions",
      "Durable and low maintenance",
    ],
    image: "/tool.jpg",
  },
  {
    name: "Heavy Equipment Industry",
    tagline: "Advanced Machinery for Construction & Heavy Equipment",
    description:
      "Our equipment supports heavy machinery manufacturing, ensuring high reliability, precision, and energy efficiency.",
    features: [
      "Robust heavy-duty machines",
      "Precision manufacturing",
      "Energy-efficient and safe",
      "Custom solutions for large-scale projects",
    ],
    image: "/heavy.avif",
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="text-center py-28 px-6 md:px-12">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-[var(--primary)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Industries We Serve
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-[var(--foreground)]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          OPS Udyog machinery is trusted across multiple industries. Explore how our advanced
          equipment supports production, efficiency, and precision in each sector.
        </motion.p>
      </section>

      {/* Detailed Industry Sections */}
      {industries.map((industry, idx) => (
        <motion.section
          key={industry.name}
          className={`py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col ${
            idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-12`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: idx * 0.2 }}
        >
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={industry.image}
              alt={industry.name}
              fill
              className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[var(--primary)]"
              whileHover={{ scale: 1.03 }}
            >
              {industry.name}
            </motion.h2>
            <h3 className="text-xl font-semibold text-[var(--accent)]">{industry.tagline}</h3>
            <p className="text-[var(--foreground)]/80">{industry.description}</p>

            {/* Features List */}
            <ul className="flex flex-col gap-2 pl-4 list-disc text-[var(--foreground)]/90">
              {industry.features.map((feat) => (
                <li key={feat}>{feat}</li>
              ))}
            </ul>

            {/* CTA Button with smooth gradient hover */}
            <motion.div>
              <motion.a
              target="_blank"
                href="/quote"
                className="relative inline-block px-10 py-4 rounded-full bg-[var(--primary)] text-white font-semibold text-lg overflow-hidden group shadow-xl shadow-[var(--primary)]/40"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                Request a Quote
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      ))}

      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/subtle-gears.png"
          alt="decorative gears"
          fill
          className="opacity-10 object-cover animate-spin-slow"
        />
      </div>
    </main>
  );
}
