"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
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
          gap: "8px",
        }}
      >
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
            className="hover:bg-[#020063]/20 "
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
