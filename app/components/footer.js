// components/Footer.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = ["Home", "About", "Products", "Industries", "Services", "Contact"];
  const resources = ["Privacy Policy", "Terms & Conditions", "Brochures", "Careers"];

  return (
    <footer className="relative bg-[var(--background)] text-[var(--foreground)] pt-20 pb-12 overflow-hidden transition-colors duration-500">
      {/* Background mechanical particles */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 opacity-10 blur-3xl top-10 left-10 animate-spin-slow"
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[var(--accent)]/10 to-[var(--primary)]/10 opacity-10 blur-3xl bottom-0 right-20 animate-spin"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-[var(--primary)]">OPS Udyog</h2>
          <p className="text-sm text-[var(--accent)] leading-relaxed">
            Engineering Tomorrow’s Machinery, Today.<br />
            Precision • Innovation • Reliability
          </p>
          <div className="w-12 h-12 relative">
            <Image
              src="/colorful-gears.png"
              alt="gears"
              fill
              className="animate-spin-slow"
            />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link} className="relative group">
                <Link href="#" className="transition-all duration-300 text-[var(--foreground)] hover:text-[var(--primary)]">
                  {link}
                  {/* Sliding gradient underline */}
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_6px_var(--primary)]"></span>
                  {/* Spinning gear on hover */}
                  <span className="absolute -right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500">
                    <Image
                      src="/colorful-gears.png"
                      alt="gear"
                      width={16}
                      height={16}
                      className="animate-spin-slow"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">Resources</h3>
          <ul className="space-y-2">
            {resources.map((link) => (
              <li key={link} className="relative group">
                <Link href="#" className="transition-all duration-300 text-[var(--foreground)] hover:text-[var(--primary)]">
                  {link}
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_6px_var(--primary)]"></span>
                  <span className="absolute -right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500">
                    <Image
                      src="/colorful-gears.png"
                      alt="gear"
                      width={16}
                      height={16}
                      className="animate-spin-slow"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">Stay Updated</h3>
          <p className="text-sm text-[var(--accent)] mb-4">
            Subscribe for latest industry insights, product updates & offers.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg bg-white/10 border border-[var(--accent)] text-[var(--foreground)] placeholder-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] flex-1"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--background)] font-semibold hover:bg-orange-600 transition"
            >
              Join
            </button>
          </form>
        </motion.div>
      </div>

      {/* Divider & Credits */}
      <div className="border-t border-[var(--accent)] mt-12 pt-6 text-center text-[var(--accent)] text-sm relative z-10">
  © {new Date().getFullYear()} OPS Udyog.<br />
  Developed with ⚙️ by{" "}
  <a
    href="https://www.rctechsolutions.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--primary)] font-semibold"
  >
    RC Tech Solutions
  </a>
</div>

    </footer>
  );
}
