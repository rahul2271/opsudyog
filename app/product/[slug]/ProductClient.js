"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";

export default function ProductClient({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container mx-auto pt-[150px] p-6 md:p-12 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Product Image Gallery */}
        <div className="space-y-6">
          {product.images?.length > 0 && (
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              className="rounded-xl shadow-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-2"
            >
              {product.images.map((img, index) => (
                <SwiperSlide key={`${img.id}-${index}`}>
                  <Image
                    src={img.src}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="object-contain rounded-lg w-full max-h-[500px] mx-auto transition-transform duration-500 hover:scale-105"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Thumbnail Slider */}
          {product.images?.length > 1 && (
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Thumbs]}
              className="mt-4"
            >
              {product.images.map((img, index) => (
                <SwiperSlide
                  key={`${img.id}-thumb-${index}`}
                  className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-orange-500 transition"
                >
                  <Image
                    src={img.src}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-20 rounded-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-start space-y-6 sticky top-32">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {product.name}
          </h1>

          {/* SKU & Categories */}
          <div className="flex flex-wrap gap-3">
            {product.sku && (
              <span className="px-3 py-1 text-sm font-medium bg-slate-200 dark:bg-slate-800 rounded-full">
                SKU: {product.sku}
              </span>
            )}
            {product.categories?.length > 0 && (
              <span className="px-3 py-1 text-sm font-medium bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 rounded-full">
                {product.categories.map((cat) => cat.name).join(", ")}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <p
            className={`inline-block px-4 py-2 text-sm font-semibold rounded-full w-max ${
              product.stock_status === "instock"
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
            }`}
          >
            {product.stock_status === "instock" ? "In Stock" : "Out of Stock"}
          </p>

          {/* Short Description */}
          {product.short_description && (
            <div
              className="p-6 rounded-lg prose prose-lg max-w-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm"
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
          )}

          {/* CTA */}
          <a
            href={`mailto:info@yourcompany.com?subject=Enquiry about ${encodeURIComponent(
              product.name
            )}`}
            className="inline-block mt-4 px-10 py-4 text-lg font-bold rounded-lg shadow-md 
              bg-orange-600 text-white hover:bg-orange-700 hover:shadow-xl 
              transition-all duration-300 text-center"
          >
            Request a Quote
          </a>
        </div>
      </div>

      {/* Full Description */}
      <div className="mt-16 prose prose-lg max-w-none dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>

      {/* Key Features */}
      {product.attributes?.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.attributes.map((attr, index) => (
              <div
                key={`${attr.id}-${index}`}
                className="p-5 rounded-lg border border-slate-200 dark:border-slate-700 
                  bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  {attr.name}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {attr.options.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
