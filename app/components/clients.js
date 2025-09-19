"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Example partner logos (replace with actual)
const partners = [
  { name: "Siemens", logo: "/partners/siemens.png" },
  { name: "Bosch", logo: "/partners/bosch.png" },
  { name: "Tata Steel", logo: "/partners/tata.png" },
  { name: "Reliance", logo: "/partners/reliance.png" },
  { name: "Mahindra", logo: "/partners/mahindra.png" },
  { name: "L&T", logo: "/partners/lt.png" },
];

export default function Partners() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/10 dark:via-orange-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Our <span className="text-orange-600">Partners</span>
        </motion.h2>

        {/* Partner Logos Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center justify-center"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain max-h-12 grayscale hover:grayscale-0 transition duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling ticker for dynamic effect (optional) */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mt-16 flex items-center gap-16 opacity-70"
        >
          {partners.concat(partners).map((partner, i) => (
            <Image
              key={i}
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={50}
              className="object-contain max-h-10 grayscale hover:grayscale-0 transition duration-500"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
