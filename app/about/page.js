"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import OurStory from "../components/ourStoryAbout";
import Team from "../components/teamAbout";






export default function AboutHero() {
  return (
    <>
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/img2.avif" // Machinery bg
          alt="OPS Udyog Machinery"
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-center brightness-25"
        />
      </motion.div>

      {/* Content */}
      <div className="text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg uppercase leading-tight"
        >
          Welcome to <span className="text-orange-500">OPS Udyog</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-xl md:text-2xl font-semibold text-gray-200"
        >
          Engineering <span className="text-orange-400 font-bold">Powerful Machinery</span> <br />
          Driving <span className="text-orange-400 font-bold">Industrial Excellence</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col md:flex-row gap-5 justify-center"
        >
          {/* Main Button */}
          <Link
            href="/products"
            className="relative px-10 py-4 rounded-full bg-orange-600 text-white font-bold text-lg overflow-hidden group shadow-lg shadow-orange-900/40"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            Explore Products
          </Link>

          {/* Secondary Button */}
          <Link
            href="/contact"
            className="px-10 py-4 rounded-full border-2 border-gray-400 text-gray-200 font-bold text-lg hover:bg-gray-800 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
    <OurStory/>
    <Team/>
    </>
  );
}
