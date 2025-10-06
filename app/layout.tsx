import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { name: "About", href: "/" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Certifications", href: "/certifications" },
  ];

  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white flex flex-col min-h-screen overflow-x-hidden">
        {/* ✅ Mobile Navigation */}
        <MobileNav links={links} />

        {/* ✅ Desktop Sidebar */}
        <aside className="hidden md:flex fixed top-0 left-0 w-[320px] h-screen bg-[#0e0e0e] border-r border-gray-800 z-50">
          <Sidebar />
        </aside>

        {/* ✅ Main Layout */}
        <div className="flex-1 flex flex-col md:ml-[320px] min-h-screen transition-all duration-300">
          {/* Navbar */}
          <nav className="fixed top-0 left-0 md:left-[320px] right-0 bg-[#0e0e0e]/95 border-b border-gray-800 z-40 backdrop-blur-md">
            <Navbar />
          </nav>

          {/* Main Content */}
          <main className="pt-[80px] px-6 md:px-10 pb-10 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <div className="max-w-6xl mx-auto w-full">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
