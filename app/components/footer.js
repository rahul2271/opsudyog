"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = ["Home", "About", "Products", "Industries", "Services", "Contact"];
  const resources = ["Privacy Policy", "Terms & Conditions", "Brochures", "Careers"];

  return (
    <footer className="relative bg-[var(--background)] text-[var(--foreground)] pt-16 pb-12 overflow-hidden transition-colors duration-500">
      
      {/* Floating gradient orbs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[var(--primary)]/20 to-[var(--secondary)]/20 opacity-10 blur-3xl top-10 left-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-10 blur-3xl bottom-0 right-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        
        {/* Logo + Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <div className="relative w-14 h-14 md:w-20 md:h-20">
            <Image
              src="/opslogo1.png"
              alt="OPS Udyog Logo"
              fill
              className="object-contain animate-spin-slow"
            />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--primary)]">
              OPS Udyog
            </h2>
            <p className="text-sm md:text-base text-[var(--accent)] leading-relaxed mt-1">
              Engineering Tomorrow’s Machinery, Today.
              <br />
              <span className="text-[var(--primary)] font-medium">Precision • Innovation • Reliability</span>
            </p>
          </div>
        </motion.div>

        {/* Links & Newsletter */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-12 flex-1 justify-end"
        >
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link} className="relative group">
                  <Link href="#" className="transition-all duration-300 text-[var(--foreground)] hover:text-[var(--primary)]">
                    {link}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_6px_var(--primary)]"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link} className="relative group">
                  <Link href="#" className="transition-all duration-300 text-[var(--foreground)] hover:text-[var(--primary)]">
                    {link}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_6px_var(--primary)]"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">Stay Updated</h3>
            <p className="text-sm text-[var(--accent)] mb-4">
              Subscribe for latest industry insights & updates.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-[var(--accent)] text-[var(--foreground)] placeholder-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] flex-1 transition-all duration-300 hover:bg-white/20"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-[var(--primary)] text-[var(--background)] font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg"
              >
                Join
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Divider & Credits */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="border-t border-[var(--accent)] mt-12 pt-6 text-center text-[var(--accent)] text-sm relative z-10"
      >
        © {new Date().getFullYear()} OPS Udyog. Developed with ⚙️ by{" "}
        <a
          href="https://www.rctechsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] font-semibold hover:underline"
        >
          RC Tech Solutions
        </a>
      </motion.div>
    </footer>
  );
}
