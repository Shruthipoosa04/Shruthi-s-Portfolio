"use client";
import { motion } from "framer-motion";

export default function Certifications() {
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

  const certificates = [
    {
      title: "Cybersecurity Intern",
      org: "XYZ Company",
      date: "June 2025",
      img: "/images/internship.png",
      desc: "Hands-on experience in network security and system monitoring."
    },
    {
      title: "CCNA Certification",
      org: "Cisco",
      date: "April 2025",
      img: "/images/cisco.png",
      desc: "Certified in network fundamentals, routing & switching."
    },
    {
      title: "Microsoft Security Fundamentals",
      org: "Microsoft",
      date: "March 2025",
      img: "/images/microsoft.png",
      desc: "Completed core security concepts and cloud security principles."
    },
    {
      title: "CyberOps Associate",
      org: "Cisco",
      date: "May 2025",
      img: "/images/cyberops.png",
      desc: "Foundational knowledge in cybersecurity operations."
    },
  ];

  return (
    <section className="min-h-screen p-8" style={{ backgroundColor: colors.mainBg }}>
      <h2 className="text-4xl font-bold text-center mb-12" style={{ color: colors.heading }}>
        Certifications & Achievements
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-6 rounded-2xl shadow-lg border transition-shadow duration-300"
            style={{ backgroundColor: colors.mainBg, borderColor: colors.border }}
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-20 h-20 object-contain mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-1 text-center" style={{ color: colors.heading }}>
              {cert.title}
            </h3>
            <p className="text-center text-sm mb-1" style={{ color: colors.subText }}>
              {cert.org}
            </p>
            <p className="text-center text-xs mb-2" style={{ color: colors.grayText }}>
              {cert.date}
            </p>
            <p className="text-center text-sm" style={{ color: colors.grayText }}>
              {cert.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
