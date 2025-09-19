"use client";

import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier curve
    },
  },
};

const services = [
  {
    title: "Installation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3v18m4.5-18v18M3 9.75h18m-18 4.5h18"
        />
      </svg>
    ),
    desc: "Professional on-site installation ensuring optimal performance from day one.",
  },
  {
    title: "Maintenance & Support",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c.234-.64.94-1.022 1.621-.902a7.5 7.5 0 015.882 5.882c.12.681-.262 1.387-.902 1.621l-2.432.89a12.042 12.042 0 01-5.09-5.09l.89-2.432z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25m10.5-2.25V5.25M3 6.75h2.25m13.5 0H21M3 17.25h2.25m13.5 0H21M6.75 19.5V21M17.25 19.5V21"
        />
      </svg>
    ),
    desc: "Reliable maintenance & 24/7 support to keep your machines running without downtime.",
  },
  {
    title: "Custom Machine Designing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687 1.687-3.746 3.746-1.687-1.687 3.746-3.746zM6.75 9.75h4.5M6.75 13.5h2.25m6.364-7.114l1.06 1.06a2.25 2.25 0 010 3.182L9.879 21.182a2.25 2.25 0 01-1.591.659H5.25v-3.038c0-.597.237-1.17.659-1.591l9.545-9.545z"
        />
      </svg>
    ),
    desc: "Tailored machinery solutions built to match your specific industrial requirements.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Subtle BG Glow */}
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
          Our <span className="text-orange-600">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="group relative p-10 rounded-2xl bg-white dark:bg-gray-800/90 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-600 to-red-500 text-white shadow-md group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
