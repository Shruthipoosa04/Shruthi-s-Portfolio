"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex items-center justify-between shadow-md">
      

      {/* Navigation Links */}
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`transition hover:text-purple-400 ${
                pathname === item.path ? "font-semibold" : "text-gray-300"
              }`}
              style={{
                color: pathname === item.path ? "#6B337E" : undefined,
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
