"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Sidebar() {
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

  return (
    <aside
      className="fixed top-0 left-0 h-full w-64 flex flex-col items-center p-6 text-center border-r"
      style={{
        backgroundColor: colors.mainBg,
        borderColor: colors.border,
        color: colors.white,
      }}
    >
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="profile"
        className="w-28 h-28 rounded-2xl border-4 object-cover mb-4"
        style={{ borderColor: colors.border }}
      />

      {/* Name */}
      <h2 className="text-xl font-bold mb-1" style={{ color: colors.heading }}>
        Shruthi Poosa
      </h2>
      <p className="text-sm mb-6" style={{ color: colors.grayText }}>
        Cybersecurity | Fullstack Dev
      </p>

      {/* Social Links */}
      <div className="flex gap-4">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <Github className="transition" style={{ color: colors.grayText }} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="transition" style={{ color: colors.grayText }} />
        </a>
        <a href="mailto:shruthi@example.com">
          <Mail className="transition" style={{ color: colors.grayText }} />
        </a>
      </div>
    </aside>
  );
}
