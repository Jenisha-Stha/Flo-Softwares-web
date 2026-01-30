"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Team", href: "/team" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (




    <>

  
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-[500px] md:max-w-none">
        <div
          style={{
            background: scrolled
              ? "rgba(255, 255, 255, 0.25)"
              : "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            boxShadow: "0 8px 40px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.3)",
            borderRadius: "100px",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Changed for mobile layout
            gap: "8  px",
            width: "100%", // Full width of the container
          }}
        >
          {/* Mobile Menu Button - Left aligned on mobile, hidden on desktop */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#020063] hover:bg-[#020063]/10 rounded-full transition-colors"
          >
            <Menu size={24} />
          </button>

          {/* Desktop Links   */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  color: "#020063",
                  padding: "12px 20px",
                  borderRadius: "100px",
                  fontSize: "15px",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                className="hover:bg-[#020063]/20"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Placeholder for center alignment on mobile if needed, or just keep simple */}
          <span className="md:hidden text-[#020063] font-bold text-lg mx-auto">LOGO</span>
           {/* Invisible spacer to balance the Menu button for center text alignment */}
           <div className="md:hidden w-[40px]"></div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-3 text-[#020063] hover:bg-[#020063]/5 rounded-full transition-all"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#020063",
                  textDecoration: "none",
                }}
                className="hover:text-[#4338ca] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>


  );
}

  

