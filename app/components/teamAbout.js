"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    image: "/team/ceo.jpg",
    bio: "Visionary leader driving OPS Udyog with innovation and precision engineering.",
  },
  {
    name: "Priya Mehta",
    role: "COO",
    image: "/team/coo.jpg",
    bio: "Expert in operations and supply chain, ensuring efficiency across projects.",
  },
  {
    name: "Amit Verma",
    role: "Head of Engineering",
    image: "/team/cto.jpg",
    bio: "Bringing technical excellence and leading product development strategies.",
  },
];

export default function Team() {
  return (
    <section className="relative py-20 overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* Animated background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#050b16] dark:via-[#0b1220] dark:to-[#050b16] animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Heading */}
        <motion.h2
  className="text-4xl md:text-5xl font-extrabold tracking-tight pb-5"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary)] bg-clip-text text-transparent">
    Meet the Experts
  </span>{" "}
  <span className="text-[var(--secondary)] dark:text-white">
    Driving OPS Udyog Forward
  </span>
</motion.h2>

<motion.p
  className="mt-6 text-lg max-w-3xl mx-auto"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  A team of <span className="text-[var(--primary)]">innovators</span>,{" "}
  <span className="text-[var(--primary)]">strategists</span>, and engineers shaping
  the future of industrial solutions with precision and passion.
</motion.p>


        {/* Team Grid */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-[var(--background)] dark:bg-[#071025] rounded-2xl shadow-xl p-8 transform transition-transform duration-500 hover:-translate-y-3 hover:rotate-1"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.3 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
            >
              {/* Gradient Halo Behind Image */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-tr from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Profile Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-[var(--background)] dark:ring-gray-700 relative z-10">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="mt-6 text-xl font-bold text-[var(--secondary)] dark:text-[var(--foreground)]">
                {member.name}
              </h3>
              <motion.span
                className="inline-block mt-1 px-3 py-1 text-sm rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--primary)] to-[var(--primary)] text-white shadow-md"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.4 }}
              >
                {member.role}
              </motion.span>

              {/* Bio */}
              <p className="mt-4 text-[var(--accent)] dark:text-gray-300 text-sm leading-relaxed">
                {member.bio}
              </p>

              {/* Floating Glow Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[var(--primary)]/5 via-[var(--primary)]/5 to-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
