"use client";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web", "AI", "Security", "Hardware"];

  const projects = [
    {
      title: "TwinTrap!",
      description: "A fake Wi-Fi detection system using NodeMCU that identifies Evil Twin attacks and alerts users in real-time.",
      image: "/projects/twintrap.png",
      repo: "https://github.com/yourusername/twintrap",
      category: "Security",
    },
    {
      title: "PixelForensics",
      description: "Deep learning model that analyzes uploaded images and shows AI-generated content percentage through pie chart visualization.",
      image: "/projects/pixelforensics.png",
      repo: "https://github.com/yourusername/pixelforensics",
      category: "AI",
    },
    {
      title: "ShadowTrace",
      description: "Digital footprint analyzer that evaluates a user's online exposure across platforms, generates verification results, and produces security reports.",
      image: "/projects/shadowtrace1.png",
      repo: "https://github.com/yourusername/shadowtrace",
      category: "Security",
      screenshots: ["/projects/shadowtrace1.png", "/projects/shadowtrace2.png"],
    },
    {
      title: "S.A.N.C.T.U.M",
      description: "Secure Air-Gapped Non-Contact Transmission using ultrasonic modulation, shortlisted at MSME Ideathon by a DRDO member.",
      image: "/projects/sanctum2.png",
      repo: "https://github.com/yourusername/sanctum",
      category: "Hardware",
      screenshots: ["/projects/sanctum1.png", "/projects/sanctum2.png"],
    },
    {
      title: "QueryLite",
      description: "AI-assisted interface that converts human language into SQL queries, making SQL practice simple and interactive.",
      image: "/projects/querylite.png",
      repo: "https://github.com/yourusername/querylite",
      category: "AI",
    },
    {
      title: "ClariPDF",
      description: "Telegram bot that compresses PDFs to custom sizes, merges multiple PDFs, and converts between PDF, DOC, and TXT formats.",
      image: "/projects/claripdf.png",
      repo: "https://github.com/yourusername/claripdf",
      category: "Web",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-black text-white p-8 text-center">
      <h1 className="text-5xl font-bold mb-8 text-[#E0B3FF] drop-shadow-lg">Projects</h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
          {categories.map(cat => (
  <button
  key={cat}
  onClick={() => setActiveFilter(cat)}
  style={{
    background: activeFilter === cat
      ? `linear-gradient(to right, #420D4B, #8B337E)`
      : "#1f2937", // fallback gray (Tailwind bg-gray-800)
  }}
  className="px-4 py-2 rounded-full font-medium text-white transition"
>
  {cat}
</button>

  ))}
      </div>

      {/* Project Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {filteredProjects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}
