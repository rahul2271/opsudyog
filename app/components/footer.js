"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = ["Home", "About", "Products", "Industries", "Services", "Contact"];
  const resources = ["Privacy Policy", "Terms & Conditions", "Brochures", "Careers"];

  return (
    <footer className="relative bg-gray-900 text-gray-200 pt-16 pb-12 overflow-hidden">
      {/* Decorative Background Orbs */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-purple-500/30 to-pink-400/30 opacity-20 blur-3xl top-10 left-10 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-indigo-400/20 to-blue-500/20 opacity-20 blur-3xl bottom-0 right-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-start gap-4">
          <div className="relative w-20 h-20 md:w-[150px] md:h-[150px]">
            <Image
              src="/opslogo1.png"
              alt="OPS Udyog Logo"
              fill
              className="object-contain filter brightness-80 dark:brightness-120"
            />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-orange-500">OPS Udyog</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mt-1">
              Engineering Tomorrow’s Machinery, Today.
              <br />
              <span className="text-orange-500 font-medium">Precision • Innovation • Reliability</span>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link} className="group relative">
                <Link
                  href="#"
                  className="transition-all duration-300 hover:text-orange-400"
                >
                  {link}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Resources</h3>
          <ul className="space-y-2">
            {resources.map((link) => (
              <li key={link} className="group relative">
                <Link
                  href="#"
                  className="transition-all duration-300 hover:text-orange-400"
                >
                  {link}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe for latest industry insights & updates.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 flex-1 transition-all duration-300 hover:bg-gray-700"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-orange-500 text-gray-900 font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Divider & Credits */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} OPS Udyog.
        <br />
        Developed with ⚙️ by{" "}
        <a
          href="https://www.rctechsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 font-semibold hover:underline"
        >
          RC Tech Solutions
        </a>
      </div>
    </footer>
  );
}
