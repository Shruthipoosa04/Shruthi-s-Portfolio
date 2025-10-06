"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectCardProps = {
  title?: string;
  description?: string;
  image?: string;
  repo?: string;
  demo?: string;
  screenshots?: string[];
};

export default function ProjectCard({
  title = "Project Title",
  description = "Project description goes here.",
  image = "/projects/placeholder.png",
  repo = "",
  demo = "",
  screenshots = [],
}: ProjectCardProps) {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const colors = {
    mainBg: "#0a0a0a",
    gradientStart: "#420D4B",
    gradientEnd: "#8B337E",
    border: "#420D4B",
    heading: "#E0B3FF",
    subText: "#B37BD4",
  };

  const nextScreenshot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

 const prevScreenshot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <>
      {/* Card Wrapper */}
      <div className="flex justify-center items-stretch w-full">
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl shadow-lg border overflow-hidden cursor-pointer flex flex-col w-full sm:w-72 md:w-80 lg:w-96 h-full"
          style={{
            backgroundColor: colors.mainBg,
            borderColor: colors.border,
          }}
          onClick={() => screenshots.length > 0 && setShowGallery(true)}
        >
          {/* Image Section (fixed aspect ratio for consistency) */}
          <div className="aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-black/40">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "/projects/placeholder.png"; // fallback if image fails
              }}
            />
          </div>

          {/* Content Section */}
          <div className="p-5 flex flex-col flex-1 justify-between text-center">
            <div>
              <h3
                className="text-lg sm:text-xl font-semibold mb-2"
                style={{ color: colors.heading }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4 line-clamp-3"
                style={{ color: colors.subText }}
              >
                {description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center mt-auto">
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                    color: colors.heading,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                    color: colors.heading,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Screenshot Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowGallery(false)}
          >
            <div className="relative max-w-3xl w-full p-4">
              <img
                src={screenshots[currentIndex]}
                alt={`${title} screenshot`}
                className="w-full h-auto rounded-xl"
              />

              {screenshots.length > 1 && (
                <>
                  <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 rounded-l text-[#E0B3FF]"
                    style={{
                      background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                    }}
                    onClick={prevScreenshot}
                  >
                    ‹
                  </button>

                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 rounded-r text-[#E0B3FF]"
                    style={{
                      background: `linear-gradient(to left, ${colors.gradientStart}, ${colors.gradientEnd})`,
                    }}
                    onClick={nextScreenshot}
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
