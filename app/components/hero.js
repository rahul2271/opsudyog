"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen flex items-center justify-center pt-[25px] md:pt-[80px] overflow-hidden"
    >
      {/* Hero Background */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-10 w-full h-full"
      >
        <Image
          src={isMobile ? "/hero11.jpg" : "/hero11.jpg"}
          alt="OPS Udyog Machinery"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          quality={isMobile ? 50 : 80}
          placeholder="blur"
          blurDataURL="/hero11-blur.jpg"
          className="object-cover object-center brightness-50"
        />
      </motion.div>

      {/* Magical Floating Orbs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="absolute top-10 left-10 w-36 h-36 rounded-full bg-gradient-to-tr from-orange-500/20 to-pink-500/20 blur-3xl opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-3xl opacity-20 pointer-events-none"
      />

      {/* Hero Content */}
      <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-[90vw] md:max-w-4xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl leading-tight"
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
