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
    { name: "Gallery", href: "/gallery" }, 
    // Add all sidebar + navbar links here
  ];

  return (
    <html lang="en">
      <body className="bg-black text-white flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-[320px] fixed top-0 left-0 h-full bg-[#0e0e0e] border-r border-gray-800 z-50">
          <Sidebar />
        </aside>

        {/* Mobile Sidebar Toggle */}
        <MobileNav links={links} />

        {/* Main Section */}
        <div className="flex-1 md:ml-[320px]">
          {/* Navbar */}
          <nav className="fixed top-0 left-0 md:left-[320px] right-0 bg-[#0e0e0e] border-b border-gray-800 z-40">
            <Navbar />
          </nav>

          {/* Main Content */}
          <main className="pt-[80px] px-8 overflow-y-auto h-screen scrollbar-thin scrollbar-thumb-gray-700">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
