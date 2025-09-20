"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

export default function WhyChooseSection() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) setIsDark(true);
    const listener = (e) => setIsDark(e.matches);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
    return () =>
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
  }, []);

  const uspData = [
    { title: "Durability", icon: <FaShieldAlt />, stat: "70+ Years of Excellence" },
    { title: "Innovation", icon: <FaLightbulb />, stat: "150+ Patents & Projects" },
    { title: "Reliability", icon: <FaCheckCircle />, stat: "Trusted Worldwide" },
  ];

  const pieData = [
    { name: "Rolling Mill", value: 15 },
    { name: "Sugar Mill", value: 15 },
    { name: "Paper Mill", value: 15 },
    { name: "Automobile Industry", value: 15 },
    { name: "Oil & Gas Industry", value: 15 },
    { name: "General Engineering", value: 10 },
    { name: "Tool Room", value: 10 },
    { name: "Heavy Equipment Industry", value: 5 },
  ];

  // Define gradients for pie slices
  const PIE_GRADIENTS = [
    ["#FF6B00", "#FF9F1C"],
    ["#FFD166", "#FCA311"],
    ["#06D6A0", "#00B894"],
    ["#118AB2", "#0A84FF"],
    ["#073B4C", "#1B262C"],
    ["#EF476F", "#D62839"],
    ["#8338EC", "#5F0F40"],
    ["#FF006E", "#FB5607"],
  ];

  const lineData = [
    { year: "1950", growth: 5 },
    { year: "1970", growth: 20 },
    { year: "1990", growth: 40 },
    { year: "2010", growth: 70 },
    { year: "2020", growth: 85 },
    { year: "2025", growth: 95 },
  ];

  const [counters, setCounters] = useState({ products: 0, clients: 0, projects: 0 });

  useEffect(() => {
    const target = { products: 120, clients: 75, projects: 300 };
    const interval = setInterval(() => {
      setCounters((prev) => {
        const updated = { ...prev };
        let done = true;
        for (let key in target) {
          if (prev[key] < target[key]) {
            updated[key] = prev[key] + Math.ceil((target[key] - prev[key]) / 15);
            done = false;
          } else updated[key] = target[key];
        }
        if (done) clearInterval(interval);
        return updated;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 15;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="var(--foreground)"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={10}
        fontWeight={600}
      >
        {`${name} (${(percent * 100).toFixed(0)}%)`}
      </text>
    );
  };

  return (
    <section className="relative py-16 px-4 md:px-12 bg-background transition-colors duration-500 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12 md:mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-3 tracking-wide text-foreground"
        >
          Why Choose <span className="text-primary">OPS Udyog</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-accent"
        >
          Established in 1950, OPS Udyog has been a global leader in precision machinery, serving
          multiple industries with innovation, durability, and unmatched reliability.
        </motion.p>
      </div>

      {/* USP Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-20 relative z-10">
        {uspData.map((usp, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px var(--primary)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="backdrop-blur-lg border border-accent/20 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg flex flex-col items-center text-center bg-white/30 dark:bg-gray-800/70 transition-all duration-500"
          >
            <div className="text-primary text-5xl sm:text-6xl mb-4">{usp.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1 text-foreground">{usp.title}</h3>
            <p className="text-sm sm:text-lg font-semibold text-accent">{usp.stat}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20 relative z-10">
        {/* Pie Chart */}
        <div className="relative backdrop-blur-lg border border-accent/20 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg bg-white/30 dark:bg-gray-800/70 transition-all duration-500">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-center text-foreground">
            Industries Served
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <defs>
                {PIE_GRADIENTS.map(([from, to], idx) => (
                  <linearGradient key={idx} id={`pieGradient-${idx}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={from} />
                    <stop offset="100%" stopColor={to} />
                  </linearGradient>
                ))}
              </defs>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                labelLine={true}
                label={renderCustomizedLabel}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`url(#pieGradient-${index})`} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--secondary)",
                  borderRadius: 6,
                  color: "var(--foreground)",
                }}
                formatter={(value, name) => [`${value}%`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="relative backdrop-blur-lg border border-accent/20 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg bg-white/30 dark:bg-gray-800/70 transition-all duration-500">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-center text-foreground">
            Company Growth
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--secondary)" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--secondary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#4B5563" : "#E5E7EB"} />
              <XAxis dataKey="year" tick={{ fill: "var(--accent)", fontSize: 12 }} />
              <YAxis tick={{ fill: "var(--accent)", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--secondary)",
                  borderRadius: 6,
                  color: "var(--foreground)",
                }}
                formatter={(value, name, props) => [`${value}% Growth`, `Year: ${props.payload.year}`]}
              />
              <Area
                type="monotone"
                dataKey="growth"
                stroke="none"
                fill="url(#areaGradient)"
              />
              <Line
                type="monotone"
                dataKey="growth"
                stroke="url(#lineGradient)"
                strokeWidth={3}
                dot={{
                  r: 4,
                  stroke: "var(--primary)",
                  strokeWidth: 2,
                  fill: "var(--background)",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-center relative z-10">
        {Object.entries(counters).map(([key, value], idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, boxShadow: "0 0 15px var(--primary)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="backdrop-blur-lg border border-accent/20 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg flex flex-col items-center bg-white/30 dark:bg-gray-800/70 transition-all duration-500"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
              {value}+
            </h3>
            <p className="text-sm sm:text-lg font-medium text-accent mt-1">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
