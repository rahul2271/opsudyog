"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "Rolling Mill", tagline: "Precision Metal Rolling Machinery", description: "High-performance machinery designed for rolling metals efficiently, ensuring precision, durability, and minimal downtime.", image: "/rollmill.jpg" },
  { name: "Sugar Mill", tagline: "Efficient Sugar Processing Equipment", description: "Robust machinery for sugar production, delivering high output, hygiene, and energy-efficient operations.", image: "/sugarmill.jpg" },
  { name: "Paper Mill", tagline: "State-of-the-art Paper Manufacturing Machines", description: "Smooth production and superior quality, ideal for large-scale and specialized paper manufacturing.", image: "/papermill.jpg" },
  { name: "Automobile Industry", tagline: "Machinery for Automotive Manufacturing", description: "Reliable machines for automotive assembly and production, maintaining precision, speed, and safety.", image: "/AutomobileIndustry.webp" },
  { name: "Oil and Gas Industry", tagline: "Equipment for Demanding Environments", description: "Specialized machinery built to withstand extreme conditions, ensuring durability and safety.", image: "/oil.jpg" },
  { name: "General Engineering", tagline: "Versatile Machinery for Engineering Applications", description: "Flexible equipment supporting varied engineering processes with accuracy and efficiency.", image: "/general.jpg" },
  { name: "Tool Room", tagline: "Precision Tool-Making Machines", description: "High-efficiency machines for tool rooms, delivering accurate tooling solutions and advanced manufacturing support.", image: "/tool.jpg" },
  { name: "Heavy Equipment Industry", tagline: "Advanced Machinery for Heavy Equipment Manufacturing", description: "Robust and reliable equipment for heavy machinery production, precision, and energy-efficient operations.", image: "/heavy.avif" },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

export default function IndustriesServed() {
  return (
    <section className="relative py-16 md:py-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--primary)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Industries <span className="text-orange-600">We Serve</span>
        </motion.h2>

        <motion.p
          className="mt-4 md:mt-5 text-base sm:text-lg md:text-xl text-[var(--foreground)]/80 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          OPS Udyog machinery powers diverse industries worldwide with precision, durability, and trust. Explore the sectors where our advanced equipment makes a difference.
        </motion.p>
      </div>

      {/* Grid Section */}
      <motion.div
        className="mt-12 md:mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 max-w-[95rem] mx-auto relative"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {industries.map((industry) => (
          <motion.div
            key={industry.name}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl bg-[#0B1120] text-white cursor-pointer transition-all duration-500"
          >
            {/* Image Container - Taller on mobile to accommodate permanent text */}
            <div className="relative h-[25rem] md:h-[24rem] w-full overflow-hidden">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Darker gradient on mobile to ensure the permanently visible text is readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 md:via-black/40 to-transparent opacity-100 md:opacity-90 md:group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 z-10">
              
              {/* Title and Tagline */}
              <div className="transform transition-transform duration-500 ease-out md:translate-y-2 md:group-hover:-translate-y-2">
                <h3 className="text-[1.25rem] md:text-[1.35rem] leading-tight font-bold text-white drop-shadow-md">
                  {industry.name}
                </h3>
                <h4 className="text-[0.8rem] md:text-[0.85rem] font-semibold text-orange-500 mt-1 drop-shadow-sm">
                  {industry.tagline}
                </h4>
              </div>

              {/* Description and Button 
                  MOBILE: Always visible (grid-rows-1, opacity-100)
                  DESKTOP (md+): Hidden by default (grid-rows-0, opacity-0), reveals on hover 
              */}
              <div className="grid grid-rows-[1fr] opacity-100 mt-3 md:grid-rows-[0fr] md:opacity-0 md:mt-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-3 transition-all duration-500 ease-out">
                <div className="overflow-hidden">
                  <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                    {industry.description}
                  </p>

                  <a
                    href="/quote"
                    target="_blank"
                    className="inline-flex items-center justify-center w-full px-6 py-2.5 rounded-xl bg-[var(--primary)] text-white font-semibold text-sm overflow-hidden group/btn shadow-lg relative transition-all hover:bg-opacity-90 active:scale-95"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                    <span className="relative">Request a Quote</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Subtle animated border on hover (Desktop only) */}
            <span className="hidden md:block absolute inset-0 rounded-[2rem] border-2 border-[var(--primary)] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}