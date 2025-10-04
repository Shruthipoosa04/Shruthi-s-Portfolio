"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface ImageItem {
  src: string;
  alt: string;
  title: string;
}

const images: ImageItem[] = [
  { src: "/gallery1.jpg", alt: "Image 1", title: "Project 1" },
  { src: "/gallery2.jpg", alt: "Image 2", title: "Project 2" },
  { src: "/gallery3.jpg", alt: "Image 3", title: "Project 3" },
  { src: "/gallery4.jpg", alt: "Image 4", title: "Project 4" },
  // Add more images
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-12 px-4 md:px-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>

      {/* Gallery Grid - Card Sized */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group cursor-pointer rounded-xl shadow-lg overflow-hidden"
            onClick={() => setSelectedImg(img.src)}
          >
            {/* Card with fixed aspect ratio */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white font-semibold text-center px-2">{img.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedImg(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img
            src={selectedImg}
            alt="Selected"
            className="max-h-[90%] max-w-[90%] object-contain rounded-lg shadow-2xl"
          />
        </motion.div>
      )}
    </section>
  );
}
