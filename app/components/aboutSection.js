"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
    },
  },
};

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left: Image with premium hover effect */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <motion.div
            whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800"
          >
            <Image
              src="/about.jpg"
              alt="OPS Udyog Factory"
              width={500}
              height={500}
              className="object-cover w-full h-[400px] transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-8 bg-gradient-to-r from-orange-600 to-red-500 text-white px-7 py-5 rounded-2xl shadow-2xl"
          >
            <p className="text-xl font-bold tracking-wide">Since 1950</p>
            <p className="text-sm opacity-90">75 Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div variants={fadeInUp}>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            About <span className="text-primary">O.P.S Udyog</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            With decades of expertise in industrial machinery, OPS Udyog is committed 
            to delivering precision, durability, and innovation. Our mission is to 
            engineer the future of manufacturing with cutting-edge technology.
          </motion.p>

          {/* Mission & Vision cards */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 grid sm:grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-primary">Our Mission</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                To innovate and provide world-class machinery that powers industries 
                and strengthens economies.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-primary">Our Vision</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                To be a global leader in industrial solutions while maintaining 
                sustainable and ethical practices.
              </p>
            </motion.div>
          </motion.div>

          {/* Certifications / Awards */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex items-center gap-6 flex-wrap"
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image src="/iso.png" alt="ISO Certification" width={80} height={80} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image src="/excellence.png" alt="Excellence Award" width={80} height={80} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image src="/award.png" alt="Industry Medal" width={80} height={80} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
