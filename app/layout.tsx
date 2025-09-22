import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Shruthi's Portfolio",
  description: "Cybersecurity & Fullstack Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-[#0a0a0a] text-white">
        <Sidebar />
        <div className="flex-1 min-h-screen ml-64">
          <Navbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
