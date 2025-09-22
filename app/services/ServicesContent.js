"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 12 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardMotion = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 14 } },
};

// Services Data
const services = [
  {
    title: "Precision Installation",
    desc: "Expert commissioning, operator training, and adherence to safety-first protocols for seamless deployment.",
    icon: "M3 12h18",
    badge: "Top Rated",
    btn: "Get Installed",
  },
  {
    title: "Maintenance & Support",
    desc: "24/7 monitoring, preventive maintenance, and instant troubleshooting to maximize uptime and efficiency.",
    icon: "M12 6v6l4 2",
    badge: "24/7 Support",
    btn: "View Plans",
  },
  {
    title: "Custom Machine Design",
    desc: "Tailored CAD designs and scalable solutions to meet your unique industrial production needs.",
    icon: "M4 7h16M4 12h10M4 17h16",
    badge: "Expert Design",
    btn: "Start Project",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-500 overflow-x-hidden relative pt-[120px]">

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 overflow-hidden">
        {/* Radial Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1.3 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f97316_0%,transparent_85%)] blur-3xl"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Hero Text */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 font-semibold tracking-wide animate-pulse">
              ⚙ Ops Udyog — Industrial Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Premium Industrial Services for a <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                Future-Ready World
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
              Empowering industries with precision engineering, seamless installations, and mission-critical support—redefining operational excellence.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="relative px-6 sm:px-8 py-3 rounded-full bg-primary text-white font-semibold text-base sm:text-lg overflow-hidden group shadow-lg hover:scale-105 transition-transform duration-700"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                Explore Products
              </Link>
              <Link
                href="#contact"
                className="relative px-6 sm:px-8 py-3 rounded-full border-2 border-orange-600 text-orange-600 dark:text-orange-300 font-semibold text-base sm:text-lg overflow-hidden group hover:bg-orange-600 hover:text-white transition duration-500"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right: Hero Image + Floating Elements */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
            className="relative lg:col-span-5"
          >
            {/* Main Hero Image */}
            <motion.div
              whileHover={{ scale: 0.97, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <Image
                src="/opslogo1.png"
                alt="OPS Udyog Machinery"
                width={500}
                height={500}
                className="object-cover w-full h-auto"
                priority
              />
            </motion.div>

            {/* Floating Elements for md+ only */}
            <motion.div
              className="hidden md:block absolute top-10 left-8 w-16 h-16 bg-[url('/gear.svg')] bg-contain bg-no-repeat opacity-40 pointer-events-none"
              animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="hidden md:block absolute bottom-12 right-6 w-20 h-20 bg-[url('/cog.svg')] bg-contain bg-no-repeat opacity-30 pointer-events-none"
              animate={{ y: [5, -5, 5], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="hidden md:block absolute top-1/2 left-1/3 w-12 h-12 bg-[url('/blueprint.svg')] bg-contain bg-no-repeat opacity-25 pointer-events-none"
              animate={{ y: [-5, 5, -5], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        {/* Desktop Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.3 }}
          className="hidden md:grid md:grid-cols-3 gap-10"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardMotion}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden group"
            >
              {/* Badge */}
              <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                {service.badge}
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-700 text-orange-600 dark:text-orange-300 text-2xl font-bold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d={service.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{service.desc}</p>
                </div>
              </div>
              <Link href="#contact" className="mt-4 inline-block px-4 py-2 bg-orange-600 dark:bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-500 dark:hover:bg-orange-400 transition">
                {service.btn}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Swiper */}
        <div className="block md:hidden mt-8">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 4000 }}
            modules={[Pagination, Autoplay]}
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <motion.div variants={cardMotion} whileHover={{ scale: 1.03 }} className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition overflow-hidden">
                  <div className="absolute -top-1 -right-1 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {service.badge}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-700 text-orange-600 dark:text-orange-300 text-xl font-bold">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d={service.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">{service.desc}</p>
                    </div>
                  </div>
                  <Link href="#contact" className="mt-3 inline-block px-4 py-2 bg-orange-600 dark:bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-500 dark:hover:bg-orange-400 transition">
                    {service.btn}
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
          className="rounded-2xl p-10 bg-gradient-to-br from-orange-200/30 via-red-300/20 to-orange-400/20 opacity-50 text-white shadow-2xl hover:shadow-[0_20px_50px_rgba(249,115,22,0.4)] transition-transform"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="mb-8 text-sm md:text-lg">Connect with our engineers today and get your industrial solutions deployed with confidence.</p>
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
        </motion.div>
      </section>
    </main>
  );
}
