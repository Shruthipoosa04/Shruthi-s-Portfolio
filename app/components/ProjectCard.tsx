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
    grayText: "#d1d5db",
  };

  // Functions to navigate screenshots safely
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
      {/* Project Card */}
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="w-80 rounded-2xl shadow-lg border overflow-hidden cursor-pointer flex flex-col"
        style={{ backgroundColor: colors.mainBg, borderColor: colors.border }}
        onClick={() => screenshots.length > 0 && setShowGallery(true)}
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: colors.heading }}>
              {title}
            </h3>
            <p className="text-sm mb-4" style={{ color: colors.subText }}>
              {description}
            </p>
          </div>
          <div className="flex gap-3 justify-center mt-2">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:opacity-90"
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
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:opacity-90"
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
                  {/* Previous Button */}
                  <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 rounded-l text-[#E0B3FF]"
                    style={{
                      background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                    }}
                    onClick={prevScreenshot}
                  >
                    ‹
                  </button>

                  {/* Next Button */}
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
