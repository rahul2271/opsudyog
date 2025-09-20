"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Sun, Moon } from "lucide-react";

// Sample data (updated to reflect longer legacy)
const growthData = [
  { year: "1950", revenue: 5 },
  { year: "1970", revenue: 40 },
  { year: "1990", revenue: 120 },
  { year: "2000", revenue: 260 },
  { year: "2010", revenue: 480 },
  { year: "2020", revenue: 760 },
  { year: "2024", revenue: 1100 },
];

const deliveries = [
  { name: "Q1", count: 240 },
  { name: "Q2", count: 320 },
  { name: "Q3", count: 410 },
  { name: "Q4", count: 520 },
];

const productMix = [
  { name: "Packaging", value: 45 },
  { name: "Cutting", value: 25 },
  { name: "Forming", value: 20 },
  { name: "Custom", value: 10 },
];

const PIE_COLORS = [
  "url(#grad1)",
  "url(#grad2)",
  "url(#grad3)",
  "url(#grad4)",
];

const timelineEvents = [
  { year: "1950", title: "Foundation Era", text: "Started as a small family-owned workshop" },
  { year: "1975", title: "First Expansion", text: "Moved to larger facility & scaled operations" },
  { year: "1990", title: "National Growth", text: "Supplying across multiple states" },
  { year: "2005", title: "Global Standards", text: "Adopted ISO & lean manufacturing" },
  { year: "2020", title: "Innovation Hub", text: "Launched advanced R&D centre" },
  { year: "2024", title: "Nationwide Presence", text: "Serving 25+ cities with 100+ machines" },
];

export default function OurStory() {
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  // Custom tooltip styles
  const tooltipStyle = {
    backgroundColor: isDark ? "#0b1220" : "#ffffff",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    color: isDark ? "#f9fafb" : "#111827",
    padding: "8px 12px",
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#050b16] dark:via-[#0b1220] dark:to-[#050b16]">
      {/* Theme Toggle + Header */}
      <div className="flex items-center justify-between mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--secondary)] dark:text-white tracking-tight">
            Our Legacy — Since 1950
          </h2>
          <p className="mt-3 text-base md:text-lg text-[var(--accent)] dark:text-gray-300 max-w-2xl leading-relaxed">
            From a humble workshop in 1950 to a nationwide industrial leader today,
            OPS Udyog’s journey is built on trust, craftsmanship, and relentless
            innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <button
            aria-label="toggle theme"
            onClick={() => setIsDark((s) => !s)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-lg bg-white/60 backdrop-blur-md dark:bg-[#0b1220]/70 border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            <span className="text-sm font-medium text-[var(--secondary)] dark:text-gray-200">
              {isDark ? "Light" : "Dark"}
            </span>
          </button>
        </motion.div>
      </div>

      {/* Timeline + Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Timeline */}
        <div className="lg:col-span-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.2, duration: 0.8 },
              },
            }}
            className="space-y-10"
          >
            {timelineEvents.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-tr from-[var(--primary)] to-indigo-600 flex items-center justify-center text-white shadow-xl">
                  <span className="font-bold">{item.year}</span>
                </div>
                <div className="flex-1 bg-white/70 dark:bg-[#071025]/80 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-gray-100 dark:border-gray-800">
                  <h4 className="font-semibold text-xl text-[var(--secondary)] dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-[var(--accent)] dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Charts */}
        <div className="lg:col-span-6 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Growth */}
            <div className="col-span-1 bg-white/70 dark:bg-[#071025]/80 rounded-2xl p-5 shadow-lg backdrop-blur-md border border-gray-100 dark:border-gray-800 hover:scale-[1.02] transition-transform">
              <h4 className="font-semibold text-[var(--secondary)] dark:text-white mb-2">
                Revenue Growth
              </h4>
              <div style={{ width: "100%", height: 220 }}>
                <ResponsiveContainer>
                  <LineChart data={growthData}>
                    <XAxis dataKey="year" stroke="var(--accent)" />
                    <YAxis stroke="var(--accent)" />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      formatter={(value) => [`₹${value} Lakhs`, "Revenue"]}
                      labelFormatter={(label) => `Year: ${label}`}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="url(#grad1)"
                      strokeWidth={3}
                      dot={{ r: 3 }}
                    />
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.9} />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Deliveries */}
            <div className="col-span-1 bg-white/70 dark:bg-[#071025]/80 rounded-2xl p-5 shadow-lg backdrop-blur-md border border-gray-100 dark:border-gray-800 hover:scale-[1.02] transition-transform">
              <h4 className="font-semibold text-[var(--secondary)] dark:text-white mb-2">
                Quarterly Deliveries
              </h4>
              <div style={{ width: "100%", height: 220 }}>
                <ResponsiveContainer>
                  <BarChart data={deliveries}>
                    <XAxis dataKey="name" stroke="var(--accent)" />
                    <YAxis stroke="var(--accent)" />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      formatter={(value) => [`${value} Machines`, "Deliveries"]}
                      labelFormatter={(label) => `Quarter: ${label}`}
                    />
                    <Bar
                      dataKey="count"
                      fill="url(#grad2)"
                      radius={[8, 8, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f97316" stopOpacity={0.9} />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity={0.9} />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Product Mix */}
            <div className="col-span-1 md:col-span-2 bg-white/70 dark:bg-[#071025]/80 rounded-2xl p-5 shadow-lg backdrop-blur-md border border-gray-100 dark:border-gray-800 hover:scale-[1.02] transition-transform">
              <h4 className="font-semibold text-[var(--secondary)] dark:text-white mb-2">
                Product Mix
              </h4>
              <div style={{ width: "100%", height: 260 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={productMix}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={40}
                      paddingAngle={4}
                      label
                    >
                      {productMix.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={PIE_COLORS[index % PIE_COLORS.length]}
                        />
                      ))}
                      <defs>
                        <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#15803d" />
                        </linearGradient>
                        <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#1d4ed8" />
                        </linearGradient>
                      </defs>
                    </Pie>
                    <Legend />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      formatter={(value, name) => [`${value}%`, name]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-3xl text-white p-8 flex flex-col md:flex-row items-center justify-between shadow-xl"
      >
        <div>
          <h4 className="text-2xl font-bold">
            Celebrating 70+ Years of Excellence
          </h4>
          <p className="text-sm mt-2 opacity-90">
            Discover how OPS Udyog transformed from a 1950 workshop into a trusted
            nationwide brand.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <a
            href="/contact"
            className="px-8 py-3 rounded-full bg-black/80 hover:bg-black text-white font-semibold shadow-lg transition-all"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
