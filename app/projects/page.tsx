"use client";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web", "AI", "Security", "Hardware"];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:"Responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion, featuring dynamic navigation and interactive project cards with lightbox gallery.",
      image: "/projects/portfolio.png",
      repo: "https://github.com/yourusername/portfolio",
      category: "Web",
      screenshots: ["/projects/portfolio1.png", "/projects/portfolio2.png"],
    },
    {
      title: "TwinTrap!",
      description:
       "TwinTrap!: Real-time detection system for fake Wi-Fi networks using NodeMCU, identifying Evil Twin attacks and alerting users instantly.",
      image: "/projects/twintrap.png",
      repo: "https://github.com/yourusername/twintrap",
      category: "Security",
    },
    {
      title: "PixelForensics",
      description:
        "Deep learning model that analyzes uploaded images and shows AI-generated content percentage through pie chart visualization.",
      image: "/projects/pixelforensics.png",
      repo: "https://github.com/yourusername/pixelforensics",
      category: "AI",
    },
    {
      title: "ShadowTrace",
      description: "ShadowTrace: A digital footprint analyzer that collects, visualizes, and evaluates online activity to identify potential security risks and privacy exposures.",
      image: "/projects/shadowtrace.png",
      repo: "https://github.com/yourusername/shadowtrace",
      category: "Security",
      screenshots: ["/projects/shadowTrace1.png", "/projects/shadowTrace2.png"],
    },
    {
      title: "S.A.N.C.T.U.M",
      description:"S.A.N.C.T.U.M: Secure Air-Gapped Non-Contact Transmission system enabling wireless, one-way communication using ultrasonic signals for high-security environments.",
      image: "/projects/sanctum.png",
      repo: "https://github.com/yourusername/sanctum",
      category: "Hardware",
      screenshots: ["/projects/sanctum2.png", "/projects/sanctum1.png"],
    },
    {
      title: "QueryLite",
      description:
        "AI-assisted interface that converts human language into SQL queries, making SQL practice simple and interactive.",
      image: "/projects/querylite.png",
      repo: "https://github.com/yourusername/querylite",
      category: "AI",
    },
    {
      title: "ClariPDF",
      description:
        "Telegram bot that compresses PDFs to custom sizes, merges multiple PDFs, and converts between PDF, DOC, and TXT formats.",
      image: "/projects/claripdf.png",
      repo: "https://github.com/yourusername/claripdf",
      category: "Web",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-16 py-8 text-center">
      <h1 className="text-5xl font-bold mb-8 text-[#E0B3FF] drop-shadow-lg">
        Projects
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              background:
                activeFilter === cat
                  ? `linear-gradient(to right, #420D4B, #8B337E)`
                  : "#1f2937",
            }}
            className="px-4 py-2 rounded-full font-medium text-white transition-all duration-300"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-8">
        {filteredProjects.map((project) => (
          <div key={project.title} className="w-full sm:w-64 md:w-72">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </main>
  );
}
