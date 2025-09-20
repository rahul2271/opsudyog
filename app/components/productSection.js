"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const categories = [
  {
    id: 1,
    title: "CNC Machines",
    img: "/cnc.jpeg",
    slug: "cnc-machines",
  },
  {
    id: 2,
    title: "Industrial Equipment",
    img: "/industrialequipments.png",
    slug: "industrial-equipment",
  },
  {
    id: 3,
    title: "Custom Machinery",
    img: "/custommechenary.webp",
    slug: "custom-machinery",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Our <span className="text-primary">Products</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            From CNC Machines to custom-built industrial solutions, OPS Udyog provides
            precision-engineered machinery crafted with excellence.
          </motion.p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl bg-white/5 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={500}
                  height={350}
                  className="object-cover w-full h-72 transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-7">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
                    {cat.title}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={`/products/${cat.slug}`}
                      className="inline-block mt-4 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium shadow hover:bg-primary transition"
                    >
                      Explore
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
