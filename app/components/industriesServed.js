"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  {
    name: "Rolling Mill",
    tagline: "Precision Metal Rolling Machinery",
    description:
      "High-performance machinery designed for rolling metals efficiently, ensuring precision, durability, and minimal downtime.",
    image: "/rollmill.jpg",
  },
  {
    name: "Sugar Mill",
    tagline: "Efficient Sugar Processing Equipment",
    description:
      "Robust machinery for sugar production, delivering high output, hygiene, and energy-efficient operations.",
    image: "/sugarmill.jpg",
  },
  {
    name: "Paper Mill",
    tagline: "State-of-the-art Paper Manufacturing Machines",
    description:
      "Smooth production and superior quality, ideal for large-scale and specialized paper manufacturing.",
    image: "/papermill.jpg",
  },
  {
    name: "Automobile Industry",
    tagline: "Machinery for Automotive Manufacturing",
    description:
      "Reliable machines for automotive assembly and production, maintaining precision, speed, and safety.",
    image: "/automobileindustry.webp",
  },
  {
    name: "Oil and Gas Industry",
    tagline: "Equipment for Demanding Environments",
    description:
      "Specialized machinery built to withstand extreme conditions, ensuring durability and safety.",
    image: "/oil.jpg",
  },
  {
    name: "General Engineering",
    tagline: "Versatile Machinery for Engineering Applications",
    description:
      "Flexible equipment supporting varied engineering processes with accuracy and efficiency.",
    image: "/general.jpg",
  },
  {
    name: "Tool Room",
    tagline: "Precision Tool-Making Machines",
    description:
      "High-efficiency machines for tool rooms, delivering accurate tooling solutions and advanced manufacturing support.",
    image: "/tool.jpg",
  },
  {
    name: "Heavy Equipment Industry",
    tagline: "Advanced Machinery for Heavy Equipment Manufacturing",
    description:
      "Robust and reliable equipment for heavy machinery production, precision, and energy-efficient operations.",
    image: "/heavy.avif",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

export default function IndustriesServed() {
  return (
    <section className="relative py-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--primary)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Industries <span className="text-orange-600">We Serve</span>
        </motion.h2>

        <motion.p
          className="mt-5 text-lg md:text-xl text-[var(--foreground)]/80 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          OPS Udyog machinery powers diverse industries worldwide with precision, durability, and trust. Explore the sectors where our advanced equipment makes a difference.
        </motion.p>
      </div>

      {/* Industries Grid */}
      <motion.div
        className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-6 max-w-7xl mx-auto relative"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        {industries.map((industry, idx) => (
          <motion.div
            key={industry.name}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative overflow-hidden rounded-3xl shadow-2xl bg-[var(--secondary)] text-white backdrop-blur-sm cursor-pointer"
          >
            {/* Image */}
            {/* <div className="relative h-80 w-full overflow-hidden rounded-3xl">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover object-center transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />
            </div> */}

            {/* Text Overlay */}
            <div className="relative h-80 w-full overflow-hidden rounded-3xl">
  <Image
    src={industry.image}
    alt={industry.name}
    fill
    className="object-cover object-center transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
  />
  {/* Darker gradient for text readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500" />
</div>

{/* Text Overlay */}
<div className="absolute bottom-0 left-0 right-0 p-7 z-10">
  <motion.h3
    className="text-2xl font-bold text-white drop-shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1, duration: 0.6 }}
  >
    {industry.name}
  </motion.h3>
  <motion.h4
    className="text-md font-semibold text-orange-500 mt-1 drop-shadow-md"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.15, duration: 0.6 }}
  >
    {industry.tagline}
  </motion.h4>
  <motion.p
    className="mt-2 text-[var(--foreground)]/90 text-sm drop-shadow-sm"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.2, duration: 0.6 }}
  >
    {industry.description}
  </motion.p>

  {/* CTA Button */}
  <motion.a
    href="/quote"
    target="_blank"
    className="mt-4 inline-block px-10 py-3 rounded-full bg-[var(--primary)] text-white font-semibold text-lg overflow-hidden group shadow-xl shadow-[var(--primary)]/40 relative"
  >
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
    Request a Quote
  </motion.a>
</div>

            {/* Glow Effect */}
            <span className="absolute -inset-1 rounded-3xl border-[2px] border-[var(--primary)] opacity-0 group-hover:opacity-50 animate-pulse transition-all duration-700"></span>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Background Gears */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/subtle-gears.png"
          alt="decorative gears"
          fill
          className="opacity-10 object-cover animate-spin-slow"
        />
      </div>
    </section>
  );
}
