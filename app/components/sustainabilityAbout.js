"use client";
import { motion } from "framer-motion";
import { Leaf, Factory, Users } from "lucide-react";

const initiatives = [
  {
    title: "Eco-Friendly Machinery",
    description:
      "Our machines are designed to reduce waste and emissions, supporting a greener planet.",
    icon: Leaf,
  },
  {
    title: "Energy Efficiency",
    description:
      "We integrate advanced engineering for lower energy consumption without compromising performance.",
    icon: Factory,
  },
  {
    title: "Social Responsibility",
    description:
      "OPS Udyog actively invests in communities, ensuring growth that benefits people and industries alike.",
    icon: Users,
  },
];

export default function Sustainability() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#050b16] dark:via-[#0b1220] dark:to-[#050b16] overflow-hidden">
      {/* Gradient overlay background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#050b16] dark:via-[#0b1220] dark:to-[#050b16] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sustainability <span className="text-white">&</span> Responsibility
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-[var(--accent)] text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Building the future of machinery with eco-conscious design, energy efficiency, 
          and a strong commitment to social responsibility.
        </motion.p>

        {/* Initiatives Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative bg-[var(--background)] dark:bg-[#0f172a] rounded-2xl shadow-xl p-10 text-center group overflow-hidden border border-[var(--accent)]/20 hover:border-[var(--primary)] transition-all duration-500"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[var(--primary)]/10 via-[var(--accent)]/10 to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Icon */}
              <div className="flex justify-center">
                <item.icon className="w-16 h-16 text-[var(--primary)] group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-[var(--secondary)] dark:text-[var(--foreground)]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[var(--accent)] dark:text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
