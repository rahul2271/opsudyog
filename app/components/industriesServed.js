"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Container for staggered animations
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const industries = [
  {
    name: "Automobile",
    img: "/industries/automobile.jpg",
    desc: "Precision machinery supporting world-class automotive manufacturing.",
  },
  {
    name: "Construction",
    img: "/industries/construction.jpg",
    desc: "Heavy-duty equipment ensuring durability for infrastructure projects.",
  },
  {
    name: "Manufacturing",
    img: "/industries/manufacturing.jpg",
    desc: "Innovative solutions powering diverse industrial production lines.",
  },
  {
    name: "Energy",
    img: "/industries/energy.jpg",
    desc: "Reliable machinery for energy plants and sustainable operations.",
  },
  {
    name: "Aerospace",
    img: "/industries/aerospace.jpg",
    desc: "High-precision tools engineered for aerospace innovation.",
  },
];

export default function IndustriesServed() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Industries <span className="text-orange-600">We Serve</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            OPS Udyog machinery powers diverse industries worldwide with
            precision, durability, and trust.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl bg-white/5 dark:bg-black/20 backdrop-blur-sm"
            >
              {/* Image with parallax zoom */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={industry.img}
                  alt={industry.name}
                  fill
                  className="object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-2xl font-bold text-white"
                >
                  {industry.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="mt-2 text-gray-200 text-sm leading-relaxed"
                >
                  {industry.desc}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <button className="mt-4 px-5 py-2.5 rounded-full bg-orange-600 text-white text-sm font-medium shadow hover:bg-orange-700 transition">
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
