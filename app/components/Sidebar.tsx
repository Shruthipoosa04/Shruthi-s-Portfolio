"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Sidebar() {
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

          <h2 className="text-2xl font-semibold mt-4 text-[#E0B3FF] tracking-wide">
            Shruthi Poosa
          </h2>
          <p className="text-sm text-gray-400 mt-1 mb-4">
            Cybersecurity Enthusiast
          </p>

          {/* Resume Button */}
          <a
            href="resume\Shruthipoosa.pdf"
            target="_blank"
            className="w-full text-center bg-[#8B337E] hover:bg-[#A852B0] text-sm font-medium py-2.5 rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(139,51,126,0.5)] hover:shadow-[0_0_20px_rgba(139,51,126,0.6)]"
          >
            View Resume
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1f1f1f] w-full"></div>

        {/* Contact Links */}
        <div className="space-y-4 w-full">
          <a
            href="mailto:shruthipoosa0404@gmail.com"
            className="flex items-center gap-3 text-gray-300 hover:text-[#E0B3FF] transition-all duration-200"
          >
            <div className="bg-[#151515] p-2 rounded-lg border border-[#2a2a2a]">
              <Mail size={18} className="text-[#B37BD4]" />
            </div>
            <span className="text-sm">shruthipoosa0404@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/shruthipoosa"
            target="_blank"
            className="flex items-center gap-3 text-gray-300 hover:text-[#E0B3FF] transition-all duration-200"
          >
            <div className="bg-[#151515] p-2 rounded-lg border border-[#2a2a2a]">
              <Linkedin size={18} className="text-[#B37BD4]" />
            </div>
            <span className="text-sm">linkedin.com/in/shruthipoosa</span>
          </a>

          <a
            href="https://github.com/shruthipoosa"
            target="_blank"
            className="flex items-center gap-3 text-gray-300 hover:text-[#E0B3FF] transition-all duration-200"
          >
            <div className="bg-[#151515] p-2 rounded-lg border border-[#2a2a2a]">
              <Github size={18} className="text-[#B37BD4]" />
            </div>
            <span className="text-sm">github.com/shruthipoosa</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 border-t border-[#1f1f1f] pt-4">
        © {new Date().getFullYear()} Shruthi Poosa
      </div>
    </aside>
  );
}
