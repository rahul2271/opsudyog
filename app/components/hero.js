"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Herosection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/img2.avif"
          alt="OPS Udyog Machinery"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={65}
          className="object-cover object-center brightness-25"
        />
      </motion.div>

      {/* Decorative Gear (lazy) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 opacity-20"
      >
        <Image
          src="/colorful-gears.png"
          alt="gear"
          width={100}
          height={100}
          loading="lazy"
        />
      </motion.div>

      {/* Content */}
      <div className="text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          Engineering Tomorrow’s Machinery, Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          Precision, durability, and innovation for modern industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 flex justify-center"
        >
          <Link
            href="/products"
            className="relative px-8 py-3 rounded-full bg-orange-600 text-white font-semibold text-lg overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            Explore Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
