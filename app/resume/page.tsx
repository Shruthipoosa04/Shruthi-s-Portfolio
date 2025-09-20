"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ResumePage() {
  const colors = {
    mainBg: "#0a0a0a",
    border: "#420D4B",
    gradientStart: "#420D4B",
    gradientEnd: "#8B337E",
    heading: "#E0B3FF",
    subText: "#B37BD4",
    grayText: "#d1d5db",
    white: "#ffffff",
  };

  const sections = [
    {
      heading: "Education",
      items: [
        {
          title: "B.Tech in Cybersecurity",
          place: "Institute of Aeronautical Engineering, Hyderabad",
          date: "2023 – Present",
          description:
            "Currently pursuing 3rd year with focus on Cybersecurity, AI-driven security, and ethical governance.",
        },
        {
          title: "Intermediate – MPC",
          place: "New Vision Junior College",
          date: "2021 – 2023",
          description:
            "Completed studies with focus on Mathematics, Physics, and Chemistry.",
        },
      ],
    },
    {
      heading: "Internships",
      items: [
        {
          title: "Fullstack Developer – Ignite (CC)",
          place: "Remote",
          date: "May 2024",
          description:
            "Worked on scalable web applications and optimized backend APIs.",
        },
        {
          title: "Summer Research Internship",
          place: "IARE",
          date: "May 2025 – July 2025",
          description:
            "Focused on cybersecurity research, AI-driven intrusion detection, and network defense.",
        },
      ],
    },
    {
      heading: "Projects",
      items: [
        {
          title: "S.A.N.C.T.U.M",
          place: "MSME Ideathon (Shortlisted)",
          date: "2025",
          description:
            "Secure Air-gapped Non-Contact Transmission using Ultrasonic Modulation.",
        },
        {
          title: "AIREN",
          place: "Academic Project",
          date: "2024",
          description:
            "AI-Driven Framework for Multilayered IoT Security with Ethical Governance and Regulatory Compliance.",
        },
      ],
    },
    {
      heading: "Achievements & Certifications",
      items: [
        {
          title: "Certified Ethical Hacker (CEH)",
          place: "EC-Council",
          date: "2025",
          description:
            "Obtained professional certification in ethical hacking and network security.",
        },
        {
          title: "Hackathon Winner – CyberSecure 2024",
          place: "IARE",
          date: "2024",
          description:
            "Awarded 1st place for developing an AI-driven intrusion detection system.",
        },
      ],
    },
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
    <main
      className="min-h-screen text-white p-8"
      style={{ backgroundColor: colors.mainBg, color: colors.white }}
    >
      {/* Page Title & Download Button */}
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-5xl font-bold" style={{ color: colors.heading }}>
          Resume
        </h1>
        <a
          href="/Resume.pdf" // put your PDF in public folder
          download
          className="px-4 py-2 rounded-lg font-semibold"
          style={{
            background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
            color: colors.white,
          }}
        >
          Download PDF
        </a>
      </div>

      {/* Timeline Sections */}
      {sections.map((section, secIndex) => (
        <div key={secIndex} className="mb-16">
          <h2
            className="text-2xl font-semibold mb-8 border-b pb-2"
            style={{ color: colors.subText, borderColor: colors.border }}
          >
            {section.heading}
          </h2>

          <div className="relative border-l ml-6" style={{ borderColor: colors.border }}>
            {section.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="mb-12 ml-6 relative"
              >
                <span
                  className="absolute -left-3 flex items-center justify-center w-6 h-6 
                  rounded-full ring-8 ring-black shadow-lg"
                  style={{
                    background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                  }}
                ></span>

                <div
                  className="p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition border"
                  style={{
                    backgroundColor: colors.mainBg,
                    borderColor: colors.border,
                  }}
                >
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.heading }}>
                    {item.title}
                  </h3>
                  <div
                    className="flex justify-between items-center text-sm"
                    style={{ color: colors.grayText }}
                  >
                    <span>{item.place}</span>
                    <span style={{ color: colors.subText, fontWeight: 600 }}>{item.date}</span>
                  </div>
                  <p className="mt-3 leading-relaxed" style={{ color: colors.grayText }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Tech Stack Section */}
      <div className="mb-16 max-w-3xl mx-auto">
        <h2
          className="text-2xl font-semibold mb-8 border-b pb-2 text-center"
          style={{ color: colors.subText, borderColor: colors.border }}
        >
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          {techStack.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab.category)}
              className="px-4 py-2 rounded-lg text-white font-medium transition"
              style={{
                background: activeTab === tab.category
                  ? `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`
                  : colors.mainBg,
                color: activeTab === tab.category ? colors.white : colors.grayText,
              }}
            >
              {tab.category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {techStack.find(t => t.category === activeTab)?.skills?.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-1 rounded-full text-sm font-medium text-white"
              style={{
                background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
              }}
            >
              {skill}
            </span>
          )) || []}
        </div>
      </div>
    </main>
  );
}
