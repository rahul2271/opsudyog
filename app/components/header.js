// components/Header.js
"use client";
import { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false); // 🔹 state for hover dropdown

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[var(--background)]/90 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/inverted.png"
            alt="OPS Udyog"
            width={200}
            height={50}
            className="transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 font-poppins font-medium text-[var(--foreground)]">
          {["Home", "About", "Contact"].map((item) => (
            <Link key={item} href="#" className="relative group tracking-wide">
              {item}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_8px_var(--primary)]"></span>
              <span className="absolute -right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500">
                <Image
                  src="/colorful-gears.png"
                  alt="gear"
                  width={18}
                  height={18}
                  className="animate-spin-slow"
                />
              </span>
            </Link>
          ))}

          {/* Categories Dropdown (Hover + Click) */}
          <div
            className="relative"
            onMouseEnter={() => setCategoryOpen(true)}
            onMouseLeave={() => setCategoryOpen(false)}
          >
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex items-center gap-1 hover:text-[var(--primary)] transition duration-300 group">
                Categories
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    categoryOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Menu.Button>

              <Menu.Items
                static // 🔹 keeps it mountable for hover
                className={`absolute right-0 mt-3 w-56 origin-top-right bg-[var(--secondary)]/95 backdrop-blur-xl rounded-lg shadow-xl ring-1 ring-black/10 transform transition-all duration-300 ease-out ${
                  categoryOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {["Machinery", "Spare Parts", "Services"].map((cat) => (
                  <Menu.Item key={cat}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-5 py-2 text-sm rounded-md transition-all ${
                          active
                            ? "bg-[var(--primary)] text-white scale-105"
                            : "text-white"
                        }`}
                      >
                        {cat}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[var(--primary)] focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-0 left-0 w-3/4 h-full bg-[var(--secondary)] text-white p-6 space-y-6 shadow-lg transition-transform animate-slideIn z-40">
          <Link href="#" className="block hover:text-[var(--primary)]">
            Home
          </Link>
          <Link href="#" className="block hover:text-[var(--primary)]">
            About
          </Link>
          <Link href="#" className="block hover:text-[var(--primary)]">
            Contact
          </Link>
          <div>
            <h4 className="mb-2 font-semibold">Categories</h4>
            <ul className="space-y-2">
              {["Machinery", "Spare Parts", "Services"].map((cat) => (
                <li key={cat}>
                  <a href="#" className="block hover:text-[var(--primary)]">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
