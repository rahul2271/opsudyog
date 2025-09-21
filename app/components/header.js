"use client";
import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainLinks = ["Home", "About", "Services", "Contact"];
  const categories = ["Machinery", "Spare Parts", "Services"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md shadow-lg h-auto">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/opslogo1.png"
            alt="OPS Udyog"
            width={150}
            height={50}
            className="transition-transform duration-700 hover:rotate-[-8deg] hover:scale-110"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 font-poppins font-medium text-gray-200">
          {mainLinks.map((item) => (
            <Link
              key={item}
              href="#"
              className="relative group transition-colors duration-300 hover:text-[var(--primary)]"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Categories Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="inline-flex items-center gap-1 transition-colors duration-300 hover:text-[var(--primary)]">
              Categories
              <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-2"
            >
              <Menu.Items className="absolute mt-2 w-48 rounded-md shadow-xl bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {categories.map((cat) => (
                    <Menu.Item key={cat}>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={`block px-4 py-2 text-sm text-gray-200 transition-colors duration-200 ${
                            active ? "bg-gray-700" : ""
                          }`}
                        >
                          {cat}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-200">
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

      {/* Mobile Menu */}
      <Transition
        show={mobileOpen}
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-y-5"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-5"
      >
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md shadow-lg w-full absolute top-full left-0 z-40">
          <div className="flex flex-col px-6 py-4 space-y-2 text-gray-200">
            {mainLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="py-2 text-lg font-medium hover:text-[var(--secondary)]"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Mobile Categories */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-full py-2 font-medium hover:text-[var(--secondary)]">
                Categories
                <ChevronDownIcon className="w-5 h-5" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 max-h-0"
                enterTo="opacity-100 max-h-60"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 max-h-60"
                leaveTo="opacity-0 max-h-0"
              >
                <Menu.Items className="flex flex-col px-4 py-2 space-y-1">
                  {categories.map((cat) => (
                    <Menu.Item key={cat}>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={`block py-2 transition-colors duration-200 ${
                            active ? "bg-gray-700" : ""
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {cat}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </Transition>
    </header>
  );
}
