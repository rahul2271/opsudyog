"use client";
import { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [textColor, setTextColor] = useState("text-[var(--primary)]");

  // Detect light section for text color
  useEffect(() => {
    const lightSection = document.getElementById("light-section");
    if (!lightSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setTextColor(entry.isIntersecting ? "text-[var(--foreground)]" : "text-[var(--primary)]");
      },
      { threshold: 0.1 }
    );

    observer.observe(lightSection);
    return () => observer.disconnect();
  }, []);

  const mainLinks = ["Home", "About", "Services", "Contact"];
  const categories = ["Machinery", "Spare Parts", "Services"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className={`flex items-center gap-2 ${textColor}`}>
          <Image
            src="/opslogo1.png"
            alt="OPS Udyog"
            width={150}
            height={50}
            className="transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 font-poppins font-medium">
          {mainLinks.map((item) => (
            <Link
              key={item}
              href="#"
              className={`relative group tracking-wide transition-colors duration-300 ${textColor} hover:text-[var(--primary)]`}
            >
              {item}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Categories Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
              className={`inline-flex items-center gap-1 transition duration-300 ${textColor} hover:text-[var(--primary)]`}
              onMouseEnter={() => setCategoryOpen(true)}
              onMouseLeave={() => setCategoryOpen(false)}
            >
              Categories
              <ChevronDownIcon className={`w-5 h-5 transition-transform ${categoryOpen ? "rotate-180" : "rotate-0"}`} />
            </Menu.Button>

            <Menu.Items
              static
              className={`absolute right-0 mt-3 w-56 origin-top-right bg-[var(--secondary)]/95 backdrop-blur-xl rounded-lg shadow-xl ring-1 ring-black/10 transform transition-all duration-300 ease-out ${
                categoryOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {categories.map((cat) => (
                <Menu.Item key={cat}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-5 py-2 text-sm rounded-md transition-all ${
                        active ? "bg-[var(--primary)] text-white scale-105" : "text-white"
                      }`}
                    >
                      {cat}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setMobileOpen(!mobileOpen)} className={textColor}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[var(--secondary)]/95 backdrop-blur-md flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/inverted.png"
                  alt="OPS Udyog"
                  width={150}
                  height={40}
                  className="filter invert transition-all duration-500"
                />
              </Link>
              <button
                className="text-[var(--primary)] text-3xl p-2 rounded-full hover:bg-[var(--primary)]/20 transition"
                onClick={() => setMobileOpen(false)}
              >
                &times;
              </button>
            </div>

            {/* Main Links */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              className="flex flex-col gap-8 text-2xl font-semibold"
            >
              {mainLinks.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-[var(--primary)] transition-all duration-300"
                  whileHover={{ x: 10, textShadow: "0 0 12px var(--primary)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>

            {/* Categories Toggle */}
            <div className="mt-12">
              <button
                className="flex items-center justify-between w-full text-xl font-semibold mb-4 hover:text-[var(--primary)] transition duration-300"
                onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
              >
                Categories
                <ChevronDownIcon
                  className={`w-6 h-6 transition-transform ${mobileCategoryOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              <AnimatePresence>
                {mobileCategoryOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col gap-4 pl-4"
                  >
                    {categories.map((cat) => (
                      <li key={cat}>
                        <a
                          href="#"
                          className="hover:text-[var(--primary)] transition duration-300"
                          onClick={() => setMobileOpen(false)}
                        >
                          {cat}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
