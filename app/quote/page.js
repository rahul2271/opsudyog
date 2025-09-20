"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState([]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to SheetDB
    try {
      await fetch("https://sheetdb.io/api/v1/YOUR_SHEETDB_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Company: formData.company,
            Message: formData.message,
          },
        }),
      });

      // Mock AI suggestions
      const suggestions = [
        "Optimized Machinery Setup",
        "Essential Spare Parts Pack",
        "Custom Service Plan Recommendation",
      ];
      setAiSuggestions(suggestions);

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-28 md:pt-32 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 text-center py-32 px-6 md:px-12">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Request a Quote / Inquiry
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-[var(--foreground)]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Fill out the form below and get AI-powered recommendations instantly.
        </motion.p>

        {/* Hero Button with Gradient Animation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <Link
            href="#form-section"
            className="relative px-8 py-3 rounded-full bg-[var(--primary)] text-white font-semibold text-lg overflow-hidden group inline-block"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            Request Quote
          </Link>
        </motion.div>
      </section>

      {/* AI Recommendations */}
      <AnimatePresence>
        {aiSuggestions.length > 0 && (
          <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold mb-6 text-center text-[var(--primary)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              AI Recommendations
            </motion.h2>
            <p className="mb-12 text-center text-[var(--foreground)]/80">
              Based on your input, our AI suggests suitable services/products.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiSuggestions.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl shadow-2xl bg-[var(--secondary)] text-white text-center hover:scale-105 transition-transform cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <h3 className="font-semibold text-2xl mb-2">{item}</h3>
                  <p className="text-sm text-[var(--foreground)]/90">
                    AI predicts this solution is most relevant for your requirements.
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* Inquiry Form */}
      <section
        id="form-section"
        className="py-20 px-6 md:px-12 max-w-5xl mx-auto bg-[var(--background)] rounded-3xl shadow-2xl relative z-10"
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[var(--primary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Submit Your Inquiry
        </motion.h2>

        {submitted ? (
          <motion.div
            className="bg-green-100 text-green-800 px-6 py-6 rounded-xl shadow-md text-center text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you! Your inquiry has been submitted successfully.
          </motion.div>
        ) : (
          <form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 md:grid-cols-2 gap-6"
>
  <input
    type="text"
    name="name"
    placeholder="Name"
    value={formData.name}
    onChange={handleChange}
    required
    className="col-span-1 w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--foreground)]/60"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    required
    className="col-span-1 w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--foreground)]/60"
  />
  <input
    type="tel"
    name="phone"
    placeholder="Phone"
    value={formData.phone}
    onChange={handleChange}
    className="col-span-1 w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--foreground)]/60"
  />
  <input
    type="text"
    name="company"
    placeholder="Company"
    value={formData.company}
    onChange={handleChange}
    className="col-span-1 w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--foreground)]/60"
  />

  {/* Machinery Dropdown */}
  {/* Machinery Dropdown */}
<div className="col-span-1 w-full">
  <select
    name="machinery"
    value={formData.machinery || ""}
    onChange={(e) => setFormData({ ...formData, machinery: e.target.value })}
    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
               bg-white dark:bg-gray-800 text-[var(--foreground)] dark:text-white placeholder:text-[var(--foreground)]/60"
    required
  >
    <option value="" className="text-gray-400 bg-white dark:bg-gray-800">Select Machinery</option>
    <option value="Excavator">Excavator</option>
    <option value="Bulldozer">Bulldozer</option>
    <option value="Crane">Crane</option>
    <option value="Loader">Loader</option>
    <option value="Forklift">Forklift</option>
    <option value="Other">Other</option>
  </select>
</div>

{/* Conditional “Other” Text Input */}
{formData.machinery === "Other" && (
  <input
    type="text"
    name="otherMachinery"
    placeholder="Specify other machinery"
    value={formData.otherMachinery || ""}
    onChange={(e) => setFormData({ ...formData, otherMachinery: e.target.value })}
    className="col-span-1 w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
               bg-white dark:bg-gray-800 text-[var(--foreground)] dark:text-white placeholder:text-[var(--foreground)]/60"
    required
  />
)}


  <textarea
    name="message"
    placeholder="Message / Requirements"
    rows="5"
    value={formData.message}
    onChange={handleChange}
    required
    className="col-span-1 md:col-span-2 w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--foreground)]/60"
  />

  <button
    type="submit"
    className="col-span-1 md:col-span-2 relative px-8 py-3 rounded-full bg-[var(--primary)] text-white font-semibold text-lg overflow-hidden group inline-block"
  >
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
    Submit Inquiry
  </button>
</form>
        )}
      </section>
    </main>
  );
}
