"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Script from "next/script";

export default function CategoriesGrid({ categories }) {
  // Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Product Categories",
    description:
      "Browse Ops Udyog product categories including industrial, machinery, and more. Discover premium authentic solutions.",
    hasPart: categories.map((cat) => ({
      "@type": "Collection",
      name: cat.name,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/category/${cat.slug}`,
      description:
        cat.description ||
        "Explore premium quality products in this category.",
      numberOfItems: cat.count || 0,
    })),
  };

  return (
    <div className="container mx-auto px-6 pt-[180px] py-16">
      {/* Inject Schema.org */}
      <Script
        id="category-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold mb-14 text-center 
        bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 
        text-transparent bg-clip-text drop-shadow-lg"
      >
        Explore Our Categories
      </motion.h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map((cat, i) => (
          <Link key={cat.id} href={`/category/${cat.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border 
                border-gray-200 dark:border-gray-700 
                shadow-lg hover:shadow-2xl transition-all duration-500 
                bg-white/70 dark:bg-slate-900/70 
                backdrop-blur-lg hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              {cat.image?.src && (
                <div className="relative">
                  <img
                    src={cat.image.src}
                    alt={cat.name}
                    className="w-full h-64 object-cover rounded-t-3xl transform 
                      group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t 
                    from-slate-900/90 via-slate-900/40 to-transparent 
                    group-hover:from-orange-900/70 
                    transition-all duration-500" />
                </div>
              )}

              {/* Content */}
              <div className="p-6 relative z-10 space-y-3">
                <h2
                  className="text-2xl font-bold 
                  text-slate-900 dark:text-white 
                  group-hover:text-orange-500 transition-colors"
                >
                  {cat.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {cat.description ||
                    "Explore premium quality products carefully curated in this category."}
                </p>

                {/* Extra Info */}
                <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-900/40 text-orange-600 font-medium">
                    {cat.count || 0} Products
                  </span>
                  <span className="italic group-hover:text-amber-500 transition">
                    Discover More →
                  </span>
                </div>
              </div>

              {/* Glow Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-500/60 transition duration-500"
                whileHover={{
                  boxShadow:
                    "0 0 25px rgba(255,140,0,0.5), 0 0 50px rgba(255,200,100,0.2)",
                }}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
