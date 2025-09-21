"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative w-screen min-h-screen flex items-center justify-center pt-[80px] overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-10 w-full h-full"
      >
        <Image
          src="/hero11.jpg"
          alt="OPS Udyog Machinery"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover object-center brightness-50"
        />
      </motion.div>

      {/* Content */}
      <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-[90vw] md:max-w-4xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg leading-tight"
        >
          Engineering Tomorrow’s Machinery, Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-200"
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
            className="relative px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-primary text-white font-semibold text-base sm:text-lg overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            Explore Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
