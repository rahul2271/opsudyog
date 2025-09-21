"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-[80px] overflow-x-hidden"
    >
      {/* Header Merge Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900/95 to-transparent z-30 pointer-events-none"></div>

      {/* Background */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/hero11.jpg"
          alt="OPS Udyog Machinery"
          fill
          priority
          sizes="100vw"
          quality={65}
          className="object-cover object-center brightness-50"
        />
      </motion.div>

      {/* Rotating Gears */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 opacity-20 z-20 max-w-[calc(100%-20px)] max-h-[calc(100%-20px)]"
      >
        <Image src="/colorful-gears.png" alt="gear" width={100} height={100} loading="lazy" />
      </motion.div>

      {/* Content */}
      <div className="text-center px-6 md:px-4 max-w-6xl relative z-40 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold text-white drop-shadow-lg break-words"
        >
          Engineering Tomorrow’s Machinery, Today
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-200 break-words"
        >
          Precision, durability, and innovation for modern industries.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 flex justify-center"
        >
          <Link
            href="/products"
            className="relative px-8 py-3 rounded-full bg-primary text-white font-semibold text-lg overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            Explore Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
