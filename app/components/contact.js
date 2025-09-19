"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://sheetdb.io/api/v1/YOUR_SHEETDB_ID", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    });

    setStatus(response.ok ? "success" : "error");
    form.reset();
  };

  return (
    <section id="contact" className="py-16 relative">
      {/* Background machinery gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-500 dark:from-[var(--primary)] dark:via-gray-800 dark:to-black opacity-90 rounded-2xl shadow-xl" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left side: Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-[var(--foreground)] space-y-6"
        >
          <h2 className="text-4xl font-heading font-bold">
            Get in <span className="text-[var(--primary)]">Touch</span>
          </h2>
          <p className="text-lg opacity-80">
            Have questions or want to collaborate? Reach out and we’ll get back to you.
          </p>
          <div className="space-y-3 text-base">
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-[var(--primary)]" /> Lathe Machine & Machinery Manufactureres, G.T.Road, Near Amritsar Industries, Batala, Punjab 143505</p>
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-[var(--primary)]" /> +91 98765 43210</p>
            <p className="flex items-center gap-3"><FaEnvelope className="text-[var(--primary)]" /> contact@yuktiherbs.com</p>
          </div>
          <a
  href="https://wa.me/919876543210"
  target="_blank"
  className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-[var(--primary)] shadow-lg overflow-hidden group transition"
>
  {/* Shimmer Effect */}
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>

  {/* Button Content */}
  <span className="relative z-10 flex items-center gap-2">
    <FaWhatsapp /> Chat on WhatsApp
  </span>

  {/* Glow on Hover */}
  <span className="absolute inset-0 rounded-xl group-hover:shadow-[0_0_25px_rgba(255,107,0,0.7)] transition duration-500"></span>
</a>

        </motion.div>

        {/* Right side: Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 dark:bg-black/20 p-8 rounded-2xl shadow-2xl backdrop-blur-md"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input type="text" name="name" required
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" name="email" required
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input type="phone" name="phone" required
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea name="message" rows="4" required
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
              ></textarea>
            </div>
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  type="submit"
  className="relative w-full py-3 rounded-lg font-semibold text-white bg-[var(--primary)] overflow-hidden group shadow-lg"
>
  {/* Shimmer Effect */}
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>

  {/* Button Text */}
  <span className="relative z-10">
    {status === "loading"
      ? "Sending..."
      : status === "success"
      ? "Sent!"
      : "Send Message"}
  </span>

  {/* Glow on Hover */}
  <span className="absolute inset-0 rounded-lg group-hover:shadow-[0_0_25px_rgba(255,107,0,0.7)] transition duration-500"></span>
</motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}

