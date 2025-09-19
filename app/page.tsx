"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

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
  };

  const cards = [
    { title: "Skills", desc: "Cybersecurity, AI-driven security, Ethical Hacking, DevSecOps" },
    { title: "Projects", desc: "ShadowTrace, Honeypots Simulation, S.A.N.C.T.U.M" },
    { title: "Interests", desc: "Research, AI in Cybersecurity, Writing Tech Blogs, Storytelling" },
  ];

  const techStack = [
    { category: "Languages", skills: ["Java", "Python", "SQL"] },
    { category: "Frontend", skills: ["HTML", "CSS", "React"] },
    { category: "Backend", skills: ["Node.js", "Express"] },
    { category: "AI & Automation", skills: ["ML Models", "AI-driven Security"] },
    { category: "Tools & Platforms", skills: ["Git", "Docker", "AWS"] },
  ];

  const [activeTab, setActiveTab] = useState(techStack[0].category);

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: colors.mainBg, color: colors.white }}>
      {/* Sidebar */}
      <aside className="w-64 p-6 flex flex-col items-center text-center border-r"
             style={{ backgroundColor: colors.mainBg, borderColor: colors.border }}>
        {/* Profile */}
        <div className="w-32 h-32 rounded-lg overflow-hidden border-2 shadow-lg" style={{ borderColor: colors.border }}>
          <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h2 className="mt-4 text-lg font-bold" style={{ color: colors.gradientEnd }}>Shruthi Poosa</h2>
        <p className="text-sm" style={{ color: colors.grayText }}>Cybersecurity Enthusiast | Problem Solver</p>

        {/* Contact Links */}
        <div className="space-y-4 text-sm w-full mt-6">
          {[
            { icon: Linkedin, label: "shruthi_poosa", url: "https://linkedin.com/in/yourusername" },
            { icon: Github, label: "shruthipoosa04", url: "https://github.com/yourusername" },
            { icon: Mail, label: "shruthipoosa0404@gmail.com", url: "mailto:shruthipoosa0404@gmail.com" }
          ].map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-4 hover:opacity-80 transition"
               style={{ color: colors.subText }}>
              <item.icon className="w-5 h-5" /> {item.label}
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* About Section */}
        <section id="about" className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold" style={{ color: colors.white }}>
            Hi, I’m <span style={{ color: "#7A2E7D" }}>Shruthi Poosa</span>
          </h1>
          <p
            className="mt-4 text-lg"
            style={{
              color: colors.grayText,
              lineHeight: "1.8",
              textAlign: "justify",
              textJustify: "inter-word",
              textIndent: "2em",
              marginBottom: "2em",
              fontSize: "1.1rem",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            I am a passionate <span style={{ color: colors.subText, fontWeight: 600 }}>Cybersecurity Enthusiast</span> and{" "}
            <span style={{ color: colors.subText, fontWeight: 600 }}>Fullstack Developer</span>, with a strong foundation in Java, Python, SQL, and modern web technologies. My work spans securing digital systems, developing AI-driven solutions, and automating processes for efficiency and accuracy.
            <br /><br />
            I thrive at the intersection of technology and problem-solving, constantly exploring innovative approaches to safeguard systems while leveraging AI and automation to drive smarter solutions. Dedicated, detail-oriented, and collaborative, I aim to create impactful technology that balances functionality, security, and user experience.
          </p>

          {/* Cards Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {cards.map((card, i) => (
              <motion.div key={i} whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl shadow-lg border transition cursor-pointer"
                style={{ backgroundColor: colors.mainBg, borderColor: colors.border }}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.heading }}>{card.title}</h3>
                <p style={{ color: colors.grayText }}>{card.desc}</p>
              </motion.div>
            ))}
          </section>

          {/* Interactive Tech Stack Tabs */}
          <section className="text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6" style={{ color: colors.gradientEnd }}> Tech Stack</h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {techStack.map((tab, i) => (
              <button
  key={i}
  onClick={() => setActiveTab(tab.category)}
  className="px-4 py-2 rounded-lg text-white font-medium transition"
  style={{
    background: activeTab === tab.category
      ? `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`
      : colors.mainBg, // fallback for inactive tabs
    color: activeTab === tab.category ? colors.white : colors.grayText,
  }}
>
  {tab.category}
</button>

              ))}
            </div>

            {/* Active Tab Skills */}
            <div className="flex flex-wrap gap-3">
             {techStack.find(t => t.category === activeTab)?.skills?.map((skill, i) => (
  <span key={i}
        className="px-4 py-1 rounded-full text-sm font-medium text-white"
        style={{
          background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`
        }}>
    {skill}
  </span>
)) || []}

            </div>
          </section>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 mt-12 text-sm border-t" style={{ borderColor: colors.border, color: colors.footerText }}>
          © {new Date().getFullYear()} Shruthi Poosa. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
