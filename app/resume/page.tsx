"use client";
import { motion } from "framer-motion";

export default function ResumePage() {
  // Color palette from ProjectCard
  const colors = {
    mainBg: "#0a0a0a",
    border: "#420D4B",
    gradientStart: "#420D4B",
    gradientEnd: "#8B337E",
    heading: "#E0B3FF",
    subText: "#B37BD4",
    grayText: "#d1d5db",
    white: "#ffffff",
    shadowHover: "#8B337E",
    skillBg: "#1f1f1f",
    skillFill: "#8B337E",
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
  ];

  // Skills data
   
   const skills = [
  { name: "Java", level: 85 },
  { name: "Python", level: 90 },
  { name: "SQL", level: 80 },
  { name: "Frontend Development", level: 80 },
  { name: "Backend Development", level: 75 },
  { name: "AI & Automation", level: 70 },
];
  
  return (
    <main
      className="min-h-screen text-white p-8"
      style={{ backgroundColor: "#000000", color: colors.white }}
    >
      {/* Page Title */}
      <h1
        className="text-5xl font-bold text-center mb-16"
        style={{ color: colors.heading }}
      >
        Resume
      </h1>

      {sections.map((section, secIndex) => (
        <div key={secIndex} className="mb-16">
          {/* Section Heading */}
          <h2
            className="text-2xl font-semibold mb-8 border-b pb-2"
            style={{ color: colors.subText, borderColor: colors.border }}
          >
            {section.heading}
          </h2>

          {/* Timeline */}
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
                {/* Timeline Marker */}
                <span
                  className="absolute -left-3 flex items-center justify-center w-6 h-6 
                  rounded-full ring-8 ring-black shadow-lg"
                  style={{
                    background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                  }}
                ></span>

                {/* Card */}
                <div
                  className="p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition border"
                  style={{
                    backgroundColor: colors.mainBg,
                    borderColor: colors.border,
                  }}
                >
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.heading }}
                  >
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm" style={{ color: colors.grayText }}>
                    <span>{item.place}</span>
                    <span style={{ color: colors.subText, fontWeight: 600 }}>
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-3 leading-relaxed" style={{ color: colors.grayText }}>
                    {item.description}
                  </p>

                  {/* Example button using gradient from ProjectCard */}
                  <button
                    className="mt-4 px-4 py-2 rounded-lg text-sm font-medium text-white hover:opacity-90 transition"
                    style={{
                      background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Skills Section */}
      <div className="mb-16 max-w-3xl mx-auto">
        <h2
          className="text-2xl font-semibold mb-8 border-b pb-2 text-center"
          style={{ color: colors.subText, borderColor: colors.border }}
        >
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between mb-1">
                <span style={{ color: colors.subText }}>{skill.name}</span>
                <span style={{ color: colors.grayText }}>{skill.level}%</span>
              </div>
              <div className="w-full h-3 rounded-lg" style={{ backgroundColor: colors.skillBg }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-3 rounded-lg"
                  style={{ backgroundColor: colors.skillFill }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
