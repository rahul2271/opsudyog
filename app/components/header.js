"use client";
import { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [textColor, setTextColor] = useState("text-[var(--primary)]"); // initial orange

  useEffect(() => {
    const lightSection = document.getElementById("light-section"); // the first light section
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTextColor(entry.isIntersecting ? "text-[var(--foreground)]" : "text-[var(--primary)]");
      },
      { threshold: 0.1 }
    );

    if (lightSection) observer.observe(lightSection);

    return () => {
      if (lightSection) observer.unobserve(lightSection);
    };
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
        <nav className={`hidden md:flex items-center space-x-10 font-poppins font-medium ${textColor}`}>
          {mainLinks.map((item) => (
            <Link
              key={item}
              href="#"
              className={`relative group tracking-wide transition-colors duration-300 hover:text-[var(--secondary)]`}
            >
              {item}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Categories Dropdown */}
          <div className="relative" onMouseEnter={() => setCategoryOpen(true)} onMouseLeave={() => setCategoryOpen(false)}>
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className={`inline-flex items-center gap-1 transition duration-300 hover:text-[var(--secondary)]`}>
                Categories
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${categoryOpen ? "rotate-180" : "rotate-0"}`} />
              </Menu.Button>
            </Menu>
          </div>
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
    </header>
  );
}
