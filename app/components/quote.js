"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaIndustry, FaCommentDots } from "react-icons/fa";

export default function QuoteSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://sheetdb.io/api/v1/YOUR_SHEETDB_ID", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });

      setStatus(response.ok ? "success" : "error");
      if (response.ok) form.reset();
      else alert("Something went wrong. Please try again.");
    } catch (err) {
      setStatus("error");
      alert("Network error. Please try again.");
    }
  };

  return (
    <section
      id="quote"
      className="relative py-20 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-gray-700 to-gray-900 dark:from-[var(--primary)] dark:via-gray-800 dark:to-black opacity-95 rounded-2xl" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Request a <span className="text-[var(--primary)]">Quote</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          Share your requirements and our team will get back with the best
          solution tailored for you.
        </motion.p>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 dark:bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-left"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                <FaUser className="inline mr-2 text-[var(--primary)]" /> Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[var(--primary)] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                <FaEnvelope className="inline mr-2 text-[var(--primary)]" /> Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[var(--primary)] outline-none"
              />
            </div>

            {/* Industry / Requirement */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                <FaIndustry className="inline mr-2 text-[var(--primary)]" /> Industry / Requirement
              </label>
              <input
                type="text"
                name="industry"
                placeholder="e.g. Lathe Machine, Custom Machinery"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[var(--primary)] outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                <FaCommentDots className="inline mr-2 text-[var(--primary)]" /> Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[var(--primary)] outline-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === "loading"}
              className="relative w-full py-3 rounded-lg font-semibold text-white bg-[var(--primary)] overflow-hidden group shadow-lg"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              <span className="relative z-10">
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                  ? "Sent!"
                  : "Request Quote"}
              </span>
              <span className="absolute inset-0 rounded-lg group-hover:shadow-[0_0_25px_rgba(255,107,0,0.7)] transition duration-500"></span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
