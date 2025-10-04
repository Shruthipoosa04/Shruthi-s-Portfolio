"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";

interface Link {
  name: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
}

export default function MobileNav({ links }: { links: Link[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks: SocialLink[] = [
    { icon: <Github size={20} />, href: "https://github.com/yourusername" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/yourusername" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/yourusername" },
  ];

  return (
    <div className="md:hidden fixed top-4 left-4 z-50">
      {/* Hamburger Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Drawer */}
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          className="fixed top-0 left-0 h-screen w-64 bg-[#0e0e0e] border-r border-gray-800 z-50 p-6 flex flex-col justify-between"
        >
          {/* Top: Profile */}
            <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-2xl overflow-hidden border border-[#8B337E] shadow-[0_0_10px_rgba(139,51,126,0.4)]">
            <img
              src="/profile.jpg"
              alt="Shruthi Poosa"
              className="object-cover w-full h-full"
            />
        </div>
</div>
  <h2 className="text-2xl font-semibold mt-4 text-[#E0B3FF] tracking-wide">
            Shruthi Poosa
          </h2>
          <p className="text-sm text-gray-400 mt-1 mb-4">
            Cybersecurity Enthusiast
          </p>
          {/* Middle: Navigation Links */}
          <nav className="flex flex-col gap-4 mt-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-pink-500 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Bottom: Social Links */}
          <div className="flex justify-center gap-4 mt-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
