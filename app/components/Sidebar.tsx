"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export default function Sidebar() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail size={18} />,
      href: "mailto:shruthipoosa0404@gmail.com",
      label: "Email",
      color: "#B37BD4",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com/in/shruthipoosa",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: <Github size={18} />,
      href: "https://github.com/shruthipoosa",
      label: "GitHub",
      color: "#fff",
    },
  ];

  return (
    <aside className="hidden md:flex flex-col w-80 fixed h-full bg-[#0b0b0b] border-r border-[#1f1f1f] shadow-[4px_0_20px_rgba(139,51,126,0.15)] z-50 p-8">
      
      {/* Content Wrapper - Vertically Centered */}
      <div className="flex flex-col items-center justify-center flex-1 space-y-8">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-2xl overflow-hidden border border-[#8B337E] shadow-[0_0_10px_rgba(139,51,126,0.4)]">
            <img
              src="/profile.jpg"
              alt="Shruthi Poosa"
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-4 text-[#E0B3FF] tracking-wide text-center">
            Shruthi Poosa
          </h2>
          <p className="text-sm text-gray-400 mt-1 mb-4 text-center">
            Cybersecurity Enthusiast
          </p>

          {/* Resume Button */}
          <a
            href="resume/Shruthipoosa.pdf"
            target="_blank"
            className="w-full text-center bg-[#8B337E] hover:bg-[#A852B0] text-sm font-medium py-2.5 rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(139,51,126,0.5)] hover:shadow-[0_0_20px_rgba(139,51,126,0.6)]"
          >
            View Resume
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1f1f1f] w-full"></div>

        {/* Contact / Social Links */}
        <div className="flex flex-col gap-4 w-full">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-2 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#420D4B] hover:to-[#8B337E] hover:text-white"
              title={social.label}
            >
              <div
                className="p-2 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#151515" }}
              >
                {React.cloneElement(social.icon, { color: social.color })}
              </div>
              <span className="text-sm truncate">
                {social.label === "Email"
                  ? "shruthipoosa0404@gmail.com"
                  : social.href.replace(/https?:\/\/(www\.)?/, "")}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 border-t border-[#1f1f1f] pt-4">
        © {currentYear} Shruthi Poosa
      </div>
    </aside>
  );
}
