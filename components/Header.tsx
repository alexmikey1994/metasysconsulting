"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { useRouter } from "next/navigation";

export default function Header() {
  const [showServices, setShowServices] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#13051F]/90 backdrop-blur-md border-b border-white/10 text-white py-4 px-10 md:px-20 flex items-center justify-between">
      <a href="#hero">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      </a>
      <nav className="hidden md:flex space-x-8 text-sm uppercase font-medium">
        <Link to="hero" smooth duration={500} className="cursor-pointer hover:underline">Home</Link>
        <div className="relative group">
          <button
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
            className="cursor-pointer hover:underline"
          >
            Services
          </button>
          {showServices && (
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white text-black rounded-lg shadow-xl w-[720px] flex p-6 z-50"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <div className="w-1/2 pr-6 border-r border-gray-300">
                <h3 className="text-2xl font-bold mb-4">
                  Accelerate<br />to market<br />
                  <span className="text-cyan-500">and go live in just weeks</span>
                </h3>
              </div>
              <div className="w-1/2 pl-6 flex flex-col justify-center space-y-4">
                {["data-analytics", "product-management", "project-management", "talent-resourcing", "web-development", "custom-solutions"].map(
                  (slug, idx) => (
                    <span
                      key={idx}
                      className="hover:underline text-sm cursor-pointer"
                      onClick={() => {
                        setShowServices(false);
                        router.push(`/services/${slug}`);
                      }}
                    >
                      {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </div>
        <Link to="about" smooth duration={500} className="cursor-pointer hover:underline">About</Link>
        <Link to="book-online" smooth duration={500} className="cursor-pointer hover:underline">Book Online</Link>
        <Link to="contact" smooth duration={500} className="cursor-pointer hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
