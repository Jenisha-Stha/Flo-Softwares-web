"use client";

import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#" },
  ],
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
  ],
  support: [
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#020063",
        color: "white",
      }}
    >
      {/* Main Footer */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "64px 24px 48px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                F
              </div>
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>FLO Softwares</span>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: "1.7",
                maxWidth: "280px",
              }}
            >
              Transforming ideas into powerful software solutions. Based in Lalitpur, Nepal.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: "600", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.company.map((link, i) => (
                <li key={i} style={{ marginBottom: "12px" }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    className="hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: "600", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.services.map((link, i) => (
                <li key={i} style={{ marginBottom: "12px" }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.6)",
                      textDecoration: "none",
                    }}
                    className="hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: "600", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Support
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.support.map((link, i) => (
                <li key={i} style={{ marginBottom: "12px" }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.6)",
                      textDecoration: "none",
                    }}
                    className="hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.5)" }}>
            © 2024 FLO Softwares. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            {["Twitter", "LinkedIn", "GitHub"].map((social, i) => (
              <Link
                key={i}
                href="#"
                style={{
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.5)",
                  textDecoration: "none",
                }}
                className="hover:text-white"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
