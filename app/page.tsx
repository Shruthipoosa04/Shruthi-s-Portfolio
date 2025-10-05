"use client";
import { motion } from "framer-motion";

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
  {
    category: "Languages",
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", level: 80 },
      { name: "Docker", level: 60 },
    ],
  },
];


  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#d1d5db] px-4 md:px-10 py-10">
  {/* About Section */}
  <section className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Hi, I’m{" "}
      <span style={{ color: colors.gradientEnd }}>Shruthi Poosa</span>
    </h1>
    <p className="text-lg leading-relaxed mb-8">
      I’m a{" "}
      <span style={{ color: colors.subText, fontWeight: "600" }}>
        Cybersecurity Enthusiast
      </span>{" "}
      and{" "}
      <span style={{ color: colors.subText, fontWeight: "600" }}>
        Fullstack Developer
      </span>
      , passionate about building secure, intelligent, and scalable systems.
      With a strong foundation in Java, Python, SQL, and modern web
      technologies, I love transforming complex ideas into impactful digital
      experiences.
      <br />
      <br />
      My work revolves around bridging the gap between{" "}
      <span style={{ color: colors.gradientEnd }}>security</span> and{" "}
      <span style={{ color: colors.gradientEnd }}>innovation</span> — from
      developing AI-driven security frameworks to automating processes that
      enhance efficiency and reliability. I’m driven by curiosity, creativity,
      and the pursuit of smarter, safer technology.
    </p>
    
  </section>
 


      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 rounded-2xl shadow-lg border cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: colors.skillBg,
              borderColor: colors.border,
            }}
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: colors.heading }}
            >
              {card.title}
            </h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </section>

     {/* Technical Skills Section */}
<section>
  <h2
    className="text-3xl font-semibold mb-8"
    style={{ color: colors.gradientEnd }}
  >
    Technical Skills
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {techStack.map((group, idx) => (
      <div key={idx} className="space-y-6">
        <h3
          className="text-xl font-semibold"
          style={{ color: colors.heading }}
        >
          {group.category}
        </h3>
        {group.skills.map((skill, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between mb-1">
              <span style={{ color: colors.subText }}>{skill.name}</span>
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </div>
            <div
              className="w-full h-3 rounded-lg"
              style={{ backgroundColor: colors.skillBg }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-3 rounded-lg"
                style={{
                  background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
</section>

    
      {/* Footer */}
      <footer className="text-center py-6 mt-16 text-sm border-t border-[#420D4B] text-[#9ca3af]">
        © {new Date().getFullYear()} Shruthi Poosa. All rights reserved.
      </footer>
    </div>
  );
}
