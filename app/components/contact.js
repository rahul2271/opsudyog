"use client";
import { useState } from "react";
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-500 dark:from-[var(--primary)] dark:via-gray-800 dark:to-black opacity-90 rounded-2xl shadow-xl" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left side: Info */}
        <div className="text-[var(--foreground)] space-y-6">
          <h2 className="text-4xl font-heading font-bold">
            Get in <span className="text-[var(--primary)]">Touch</span>
          </h2>
          <p className="text-lg opacity-80">
            Have questions or want to collaborate? Reach out and we’ll get back to you.
          </p>
          <div className="space-y-3 text-base">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[var(--primary)]" /> Lathe Machine & Machinery Manufacturers, G.T.Road, Near Amritsar Industries, Batala, Punjab 143505
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[var(--primary)]" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[var(--primary)]" /> contact@yuktiherbs.com
            </p>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-[var(--primary)] shadow-lg overflow-hidden relative group transition"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaWhatsapp /> Chat on WhatsApp
            </span>
          </a>
        </div>

        {/* Right side: Form */}
        <div className="bg-white/10 dark:bg-black/20 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="text" name="name" placeholder="Name" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none" />
            <input type="email" name="email" placeholder="Email" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none" />
            <input type="text" name="phone" placeholder="Phone" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none" />
            <input type="text" name="industry" placeholder="Industry / Requirement" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none" />
            <textarea name="message" placeholder="Message" rows="4" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none"></textarea>

            <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white bg-[var(--primary)] hover:bg-orange-600 transition">
              {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
