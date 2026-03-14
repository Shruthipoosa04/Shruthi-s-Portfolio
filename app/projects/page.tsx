"use client";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web", "AI", "Cyber Security", "Hardware", "Research"];

  const projects = [
    // ----------------- Web Projects -----------------
    {
      title: "Personal Portfolio Website",
      description:
        "• Designed a responsive personal portfolio to showcase projects and skills with modern UI.\n• Built using Next.js, Tailwind CSS, and Framer Motion for animations and smooth navigation.\n• Implemented interactive project cards, gallery lightbox, and dynamic filtering system.",
      image: "/projects/portfolio.png",
      repo: "https://github.com/Shruthipoosa04/Shruthi-s-Portfolio",
      category: "Web",
      screenshots: ["/projects/portfolio1.png", "/projects/portfolio2.png"],
      isResearch: false,
    },
    {
      title: "ClariPDF",
      description:
        "• Managing large PDFs and format conversions is time-consuming for users.\n• Built using Python, Telegram Bot API, and document processing libraries.\n• Developed a Telegram bot that compresses, merges, and converts PDFs into multiple formats instantly.",
      image: "/projects/ClariPDF.png",
      repo: "https://github.com/Shruthipoosa04/ClariPDF",
      category: "Web",
      isResearch: false,
    },

    // ----------------- AI Projects -----------------
    {
      title: "SmartExpense Intel",
      description:
        "• Users struggle to track scattered UPI and digital payment transactions.\n• Built using React.js, Node.js, MongoDB, and Chart.js for financial visualization.\n• Created an AI-powered expense analytics dashboard that categorizes spending and predicts financial trends.",
      image: "/projects/expense.png",
      repo: "https://github.com/Shruthipoosa04/SmartExpenseIntel",
      category: "AI",
      screenshots: ["/projects/expense1.png", "/projects/expense2.png"],
      isResearch: true,
    },
    {
      title: "AURA-Lit",
      description:
        "• Researchers spend significant time manually searching and reviewing academic papers.\n• Developed using Python, NLP techniques, and research database APIs.\n• Built an AI assistant that retrieves relevant papers and summarizes authors, years, and contributions.",
      image: "/projects/AURA-lit.png",
      repo: "https://github.com/Shruthipoosa04/AURA-Lit",
      category: "AI",
      isResearch: true,
    },
    {
      title: "QueryLite",
      description:
        "• Beginners often struggle to convert natural language questions into SQL queries.\n• Developed using Python NLP models with a simple interactive frontend.\n• Built a system that translates human language into executable SQL queries for easier database learning.",
      image: "/projects/querylite.png",
      repo: "https://github.com/yourusername/querylite",
      category: "AI",
      isResearch: false,
    },
    {
      title: "PixelForensics",
      description:
        "• Addressed the growing challenge of detecting AI-generated or manipulated images.\n• Developed using deep learning models with Python and visualization using Chart.js.\n• Built a system that analyzes uploaded images and displays AI-generated probability through visual charts.",
      image: "/projects/Pixel.png",
      repo: "https://github.com/yourusername/pixelforensics",
      category: "AI",
      isResearch: false,
    },

    // ----------------- Cyber Security Projects -----------------
    {
      title: "TwinTrap!",
      description:
        "• Identified the risk of Evil Twin Wi-Fi attacks where attackers mimic legitimate networks.\n• Built using NodeMCU, Wi-Fi scanning modules, and embedded security logic.\n• Developed a real-time detection system that identifies rogue networks and alerts users instantly.",
      image: "/projects/Twin.png",
      repo: "https://github.com/Shruthipoosa04/TwinTrap-",
      category: "Cyber Security",
      isResearch: false,
    },
     
    {
      title: "RL-Honeypot",
      description:
        "• Traditional honeypots are static and easily detected by advanced attackers.\n• Implemented using Python, reinforcement learning models, and containerized environments.\n• Built an adaptive honeypot that dynamically changes behavior to engage attackers and learn attack strategies.",
      image: "/projects/rl.png",
      repo: "https://github.com/Shruthipoosa04/RL-Honeypot",
      category: "Cyber Security",
      isResearch: true,
    },

    // ----------------- Hardware Projects -----------------
    {
      title: "S.A.N.C.T.U.M",
      description:
        "• Air-gapped systems lack secure non-network communication methods.\n• Implemented using Python, ultrasonic signal processing, and audio modulation techniques.\n• Developed a secure one-way communication system using ultrasonic transmission for high-security environments.",
      image: "/projects/sanctum.png",
      repo: "https://github.com/Shruthipoosa04/project-S.A.N.C.T.U.M.git",
      screenshots: ["/projects/sanctum2.png", "/projects/sanctum1.png"],
      category: "Hardware",
      isResearch: true,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : activeFilter === "Research"
      ? projects.filter((p) => p.isResearch)
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