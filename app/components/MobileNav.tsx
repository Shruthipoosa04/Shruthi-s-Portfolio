"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="md:hidden fixed top-4 left-4 z-[100]">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        className="p-2 text-[#E0B3FF] hover:text-[#C84BBA] transition-all duration-300 rounded-lg border border-[#8B337E]/40 shadow-[0_0_8px_rgba(139,51,126,0.4)] backdrop-blur-md"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
              onClick={() => setIsOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              style={{ willChange: "transform" }}
              className="fixed top-0 left-0 min-h-[100dvh] w-72 z-[99] p-[1px] rounded-r-2xl
                         bg-gradient-to-b from-[#420D4B]/60 to-[#8B337E]/60 shadow-[0_0_25px_rgba(139,51,126,0.5)]"
            >
              <div
                className="min-h-[100dvh] w-full bg-[#0a0a0a]/90 backdrop-blur-md
                           rounded-r-2xl p-6 flex flex-col justify-between overflow-y-auto
                           pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)]"
              >
                {/* PROFILE HEADER */}
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="w-28 h-28 rounded-2xl overflow-hidden border border-[#8B337E] shadow-[0_0_20px_rgba(139,51,126,0.4)]"
                  >
                    <img
                      src="/profile.jpg"
                      alt="Shruthi Poosa"
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                  <h2 className="text-2xl font-semibold mt-4 text-[#E0B3FF] tracking-wide">
                    Shruthi Poosa
                  </h2>
                  <p className="text-sm text-gray-400 mt-1 mb-4 tracking-wide">
                    Cybersecurity Enthusiast
                  </p>
                </motion.div>

                {/* NAV LINKS */}
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
                  }}
                  className="flex flex-col gap-4 mt-6 text-center"
                >
                  {links.map((link) => (
                    <motion.a
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.05, color: "#C84BBA" }}
                      whileTap={{ scale: 0.95 }}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="relative text-lg font-medium text-gray-300 hover:text-[#C84BBA] transition-colors duration-300 group"
                    >
                      {link.name}
                      {/* underline glow */}
                      <motion.span
                        layoutId="underline"
                        className="absolute bottom-[-3px] left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#8B337E] to-[#C84BBA] transition-all duration-300"
                      ></motion.span>
                    </motion.a>
                  ))}
                </motion.nav>

                {/* SOCIAL ICONS */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center gap-5 mt-10"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: "#C84BBA" }}
                      className="text-gray-400 hover:text-[#C84BBA] transition-all duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
