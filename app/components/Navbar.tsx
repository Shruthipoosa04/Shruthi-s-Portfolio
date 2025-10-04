"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex justify-end px-6 md:px-8 py-4 transition-all duration-300 z-50 ${
        scrolled
          ? "bg-[#0b0b0b]/90 backdrop-blur-md border-b border-[#420D4B] shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Desktop Links */}
      <div className="hidden md:flex items-end gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`relative text-sm font-bold transition-all duration-300 ${
              pathname === link.href
                ? "text-[#E0B3FF] hover:shadow-[0_0_8px_#8B337E]"
                : "text-gray-400 hover:text-[#E0B3FF]"
            }`}
          >
            {link.name}
            {pathname === link.href && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#8B337E] rounded-full shadow-[0_0_6px_#8B337E]"></span>
            )}
          </Link>
        ))}
      </div>
 
    </nav>
  );
}
