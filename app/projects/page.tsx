"use client";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 text-center">
      {/* Page Heading */}
      <h1 className="text-5xl font-bold mb-14 text-[#E0B3FF] drop-shadow-lg">
        Projects
      </h1>

      {/* Project Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        <ProjectCard
          title="TwinTrap!"
          description="A fake Wi-Fi detection system using NodeMCU that identifies Evil Twin attacks and alerts users in real-time."
          image="/projects/twintrap.png"
          repo="https://github.com/yourusername/twintrap"
         // screenshots={["/projects/twintrap1.png", "/projects/twintrap2.png"]}//
        />

        <ProjectCard
          title="PixelForensics"
          description="Deep learning model that analyzes uploaded images and shows AI-generated content percentage through pie chart visualization."
          image="/projects/pixelforensics.png"
          repo="https://github.com/yourusername/pixelforensics"
        //  screenshots={["/projects/pixel1.png", "/projects/pixel2.png"]}//
        />

        <ProjectCard
          title="ShadowTrace"
          description="Digital footprint analyzer that evaluates a user's online exposure across platforms, generates verification results, and produces security reports."
          image="/projects/shadowtrace1.png"
          repo="https://github.com/yourusername/shadowtrace"
          screenshots={["/projects/shadowtrace1.png", "/projects/shadowtrace2.png"]}
        />

        <ProjectCard
          title="S.A.N.C.T.U.M"
          description="Secure Air-Gapped Non-Contact Transmission using ultrasonic modulation, shortlisted at MSME Ideathon by a DRDO member."
          image="/projects/sanctum2.png"
          repo="https://github.com/yourusername/sanctum"
          screenshots={["/projects/sanctum1.png", "/projects/sanctum2.png"]}
        />

        <ProjectCard
          title="QueryLite"
          description="AI-assisted interface that converts human language into SQL queries, making SQL practice simple and interactive."
          image="/projects/querylite.png"
          repo="https://github.com/yourusername/querylite"
         // screenshots={["/projects/query1.png", "/projects/query2.png"]}//
        />

        <ProjectCard
          title="ClariPDF"
          description="Telegram bot that compresses PDFs to custom sizes, merges multiple PDFs, and converts between PDF, DOC, and TXT formats."
          image="/projects/claripdf.png"
          repo="https://github.com/yourusername/claripdf"
         // screenshots={["/projects/clari1.png", "/projects/clari2.png"]}//
        />
      </div>
    </main>
  );
}
