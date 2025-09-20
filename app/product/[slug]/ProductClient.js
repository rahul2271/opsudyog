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
    <div
      className="container mx-auto md:pt-[200px] p-6 md:p-12 font-sans"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Images */}
        <div className="space-y-6">
          {product.images?.length > 0 && (
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              className="rounded-lg shadow-lg"
              style={{
                borderColor: "var(--secondary)",
                borderWidth: "1px",
              }}
            >
              {product.images.map((img, index) => (
                <SwiperSlide key={`${img.id}-${index}`}>
                  <Image
                    src={img.src}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="object-cover rounded-lg w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Thumbnails */}
          {product.images?.length > 1 && (
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Thumbs]}
              className="mt-4"
            >
              {product.images.map((img, index) => (
                <SwiperSlide
                  key={`${img.id}-thumb-${index}`}
                  className="cursor-pointer"
                  style={{
                    borderColor: "var(--secondary)",
                    borderWidth: "1px",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="rounded hover:scale-105 transition-transform w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-start space-y-6 sticky top-32">
          <h1
            className="text-4xl md:text-5xl font-extrabold"
            style={{ color: "var(--foreground)" }}
          >
            {product.name}
          </h1>

          {product.sku && (
            <p>
              <span className="font-semibold">SKU:</span> {product.sku}
            </p>
          )}

          {product.categories?.length > 0 && (
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.categories.map((cat) => cat.name).join(", ")}
            </p>
          )}

          <p
            className="font-semibold text-lg"
            style={{
              color:
                product.stock_status === "instock"
                  ? "var(--primary)"
                  : "var(--accent)",
            }}
          >
            {product.stock_status === "instock" ? "In Stock" : "Out of Stock"}
          </p>

          {product.short_description && (
            <div
  className="p-6 rounded-lg prose prose-lg max-w-none"
  style={{
    backgroundColor: "black", // CSS variable handles light/dark automatically
    color: "white",
  }}
  dangerouslySetInnerHTML={{ __html: product.short_description }}
/>
          )}

          <a
            href={`mailto:info@yourcompany.com?subject=Enquiry about ${encodeURIComponent(
              product.name
            )}`}
            className="inline-block mt-4 px-10 py-4 font-bold rounded-lg shadow-lg transition-all"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--foreground)",
            }}
          >
            Request a Quote
          </a>
        </div>
      </div>

      {/* Full Description & Features */}
      <div className="mt-16 prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: product.description }} />

        {product.attributes?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.attributes.map((attr, index) => (
                <li key={`${attr.id}-${index}`}>
                  <span className="font-semibold">{attr.name}:</span>{" "}
                  {attr.options.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
