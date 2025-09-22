"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export default function About() {
  const colors = {
    mainBg: "#0a0a0a",
    border: "#420D4B",
    gradientStart: "#420D4B",
    gradientEnd: "#8B337E",
    heading: "#E0B3FF",
    subText: "#B37BD4",
    grayText: "#d1d5db",
    footerText: "#9ca3af",
    white: "#ffffff",
    skillBg: "#1f1f1f",
  };

  const cards = [
    {
      title: "Skills",
      desc: "Cybersecurity, AI-driven security, Ethical Hacking, DevSecOps",
    },
    {
      title: "Projects",
      desc: "ShadowTrace, Honeypots Simulation, S.A.N.C.T.U.M",
    },
    {
      title: "Interests",
      desc: "Research, AI in Cybersecurity, Writing Tech Blogs, Storytelling",
    },
  ];

  const techStack = [
    { category: "Languages", skills: ["Java", "Python", "SQL"] },
    { category: "Frontend", skills: ["HTML", "CSS", "React"] },
    { category: "Backend", skills: ["Node.js"] },
    { category: "Tools & Platforms", skills: ["Git", "Docker"] },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex"
      style={{ backgroundColor: colors.mainBg, color: colors.white }}
    >
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 p-6 flex flex-col justify-between text-center border-r 
        transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{ borderColor: colors.border, backgroundColor: colors.mainBg }}
      >
        {/* Close button (mobile only) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 md:hidden text-white"
        >
          <X size={28} />
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <img
            src="profile.jpg"
            alt="profile"
            className="w-28 h-28 rounded-2xl border-4 object-cover"
            style={{ borderColor: colors.border }}
          />
          <h2 className="text-lg font-bold" style={{ color: colors.heading }}>
            Shruthi Poosa
          </h2>
          <p className="text-sm" style={{ color: colors.grayText }}>
            Cybersecurity | Fullstack Dev
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="hover:text-purple-400 transition" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-purple-400 transition" />
          </a>
          <a href="mailto:shruthi@example.com">
            <Mail className="hover:text-purple-400 transition" />
          </a>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-10 md:ml-64 relative">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-6 left-4 md:hidden text-white z-30"
        >
          <Menu size={28} />
        </button>

        {/* About Section */}
        <section className="max-w-4xl px-4 sm:px-6 text-left">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: colors.white }}
          >
            Hi, I’m <span style={{ color: "#7A2E7D" }}>Shruthi Poosa</span>
          </h1>
          <p
            className="mt-4 text-lg"
            style={{
              color: colors.grayText,
              lineHeight: "1.8",
              marginBottom: "2em",
              fontSize: "1.1rem",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              textAlign: "left", // 👈 ensures no justify
            }}
          >
            I am a passionate{" "}
            <span style={{ color: colors.subText, fontWeight: 600 }}>
              Cybersecurity Enthusiast
            </span>{" "}
            and{" "}
            <span style={{ color: colors.subText, fontWeight: 600 }}>
              Fullstack Developer
            </span>
            , with a strong foundation in Java, Python, SQL, and modern web
            technologies...
          </p>
        </section>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl px-4 text-left">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl shadow-lg border transition cursor-pointer"
              style={{
                backgroundColor: colors.mainBg,
                borderColor: colors.border,
              }}
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: colors.heading }}
              >
                {card.title}
              </h3>
              <p style={{ color: colors.grayText }}>{card.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="text-left max-w-3xl px-4 mt-12">
          <h2
            className="text-3xl font-semibold mb-6"
            style={{ color: colors.gradientEnd }}
          >
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.flatMap((tab) =>
              tab.skills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between mb-1">
                    <span style={{ color: colors.subText }}>{skill}</span>
                  </div>
                  <div
                    className="w-full h-3 rounded-lg"
                    style={{ backgroundColor: colors.skillBg }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1.2 }}
                      className="h-3 rounded-lg"
                      style={{
                        background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                      }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Footer */}
        <footer
          className="text-center py-6 mt-12 text-sm border-t"
          style={{ borderColor: colors.border, color: colors.footerText }}
        >
          © {new Date().getFullYear()} Shruthi Poosa. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
