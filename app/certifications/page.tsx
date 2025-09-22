"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const colors = {
    mainBg: "#0a0a0a",
    cardBg: "#111111",
    border: "#420D4B",
    gradientStart: "#420D4B",
    gradientEnd: "#8B337E",
    heading: "#E0B3FF",
    subText: "#B37BD4",
    grayText: "#d1d5db",
    white: "#ffffff",
  };

  const categories = [
    {
      name: "Technical Certifications",
      items: [
        {
          title: "Introduction to Cybersecurity",
          org: "Cisco Networking Academy",
          date: "Sept 22, 2025",
          img: "/certifications/Cisco.png",
          desc: "Learned cybersecurity fundamentals, threats, and safe practices.",
          link: "/certifications/introduction to cybersecurity.pdf",
        },
        {
          title: "Networking Basics",
          org: "Cisco Networking Academy",
          date: "Sept 22, 2025",
          img: "/certifications/Cisco.png",
          desc: "Completed fundamentals of computer networks, IP addressing, and routing.",
          link: "/certifications/networking Basics.pdf",
        },
        {
          title: "Problem Solving (Basic)",
          org: "HackerRank",
          date: "Sept 22, 2025",
          img: "/certifications/Hackerrank..jpg",
          desc: "Certified in basic algorithmic problem-solving skills.",
          link: "/certifications/problem_solving_basic certificate.pdf",
        },
        {
          title: "Problem Solving (Intermediate)",
          org: "HackerRank",
          date: "Sept 22, 2025",
          img: "/certifications/Hackerrank..jpg",
          desc: "Certified in intermediate data structures and algorithms.",
          link: "/certifications/problem_solving_intermediate certificate.pdf",
        },
        {
          title: "SQL (Basic)",
          org: "HackerRank",
          date: "Sept 22, 2025",
          img: "/certifications/Hackerrank..jpg",
          desc: "Proven ability to write SQL queries, filters, and aggregations.",
          link: "/certifications/sql_basic certificate.pdf",
        },
        {
          title: "SQL (Intermediate)",
          org: "HackerRank",
          date: "Sept 22, 2025",
          img: "/certifications/Hackerrank..jpg",
          desc: "Validated knowledge of complex joins, subqueries, and optimization.",
          link: "/certifications/sql_intermediate certificate.pdf",
        },
      ],
    },
    {
      name: "Experience / Internships",
      items: [
        {
          title: "CyberSecurity Internship",
          org: "ShadowFox",
          date: "March, 2025",
          img: "/certifications/shadowfox.png",
          desc: "Hands-on internship experience in applied cybersecurity projects.",
          link: "/certifications/ShadowFox internship.pdf",
        },
        {
          title: "Summer Research Internship",
          org: "IARE",
          date: "July 03, 2025",
          img: "/certifications/SRI.png",
          desc: "Participated in summer research internship, exploring innovative approaches to cybersecurity challenges.",
          link: "/certifications/SRI.pdf",
        },
        {
          title: "Hackathon",
          org: "Udgham",
          date: "Feb 20, 2025",
          img: "/certifications/Udhgam Hackathon.png",
          desc: "Participated in Udgham Hackathon and worked on innovative solutions.",
          link: "/certifications/Udhgam Hackton.pdf",
        },
      ],
    },
    {
      name: "Community & Leadership",
      items: [
        {
          title: "IEEE Membership Certificate",
          org: "IEEE",
          date: "July 28, 2025",
          img: "/certifications/IEEE.png",
          desc: "Active member of IEEE community, engaging in research and networking.",
          link: "/certifications/IEEE.pdf",
        },
        {
          title: "Innovation Ambassador",
          org: "Innovation Program",
          date: "Sept 22, 2025",
          img: "/certifications/Innovation Amabasador.png",
          desc: "Represented as Innovation Ambassador, promoting tech-driven initiatives.",
          link: "/certifications/Innovation.pdf",
        },
      ],
    },
  ];

  // state for active filter
  const [activeCategory, setActiveCategory] = useState("All");

  // get certificates based on filter
  const filteredCategories =
    activeCategory === "All"
      ? categories
      : categories.filter((c) => c.name === activeCategory);

  return (
    <section
      className="min-h-screen p-8"
      style={{ backgroundColor: colors.mainBg }}
    >
      <h2
        className="text-4xl font-bold text-center mb-8"
        style={{ color: colors.heading }}
      >
        Certifications & Achievements
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["All", ...categories.map((c) => c.name)].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeCategory === cat
                ? "bg-gradient-to-r from-[#420D4B] to-[#8B337E] text-white"
                : "bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Certificates Grid */}
      {filteredCategories.map((category, idx) => (
        <div key={idx} className="mb-16">
          <h3
            className="text-2xl font-semibold mb-8 text-center"
            style={{ color: colors.subText }}
          >
            {category.name}
          </h3>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {category.items.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 rounded-2xl border transition duration-300 relative group"
                style={{
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                }}
              >
                {/* Gradient hover effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#420D4B] to-[#8B337E] blur-md"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                 <img
  src={cert.img}
  alt={cert.title}
  className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
/>

                  <h4
                    className="text-xl font-semibold mb-1"
                    style={{ color: colors.heading }}
                  >
                    {cert.title}
                  </h4>
                  <p
                    className="text-sm mb-1"
                    style={{ color: colors.subText }}
                  >
                    {cert.org}
                  </p>
                  <p
                    className="text-xs mb-2"
                    style={{ color: colors.grayText }}
                  >
                    {cert.date}
                  </p>
                  <p
                    className="text-sm mb-4"
                    style={{ color: colors.grayText }}
                  >
                    {cert.desc}
                  </p>

                  {/* View Certificate Button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-[#420D4B] to-[#8B337E] text-white font-medium hover:opacity-90 transition"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
