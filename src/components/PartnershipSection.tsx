"use client";

import { useEffect, useState } from "react";
import { Cpu, Cloud, Shield, Zap, Anchor, Box } from "lucide-react";

// Placeholder partners - in a real app, these would be logos
const partners = [
  { name: "Reeman", icon: <Cpu /> },
  { name: "Flosecurity", icon: <Cloud /> },
  { name: "Digital Pathshala", icon: <Shield /> },
  { name: "Reeman", icon: <Zap /> },
  { name: "Reeman", icon: <Anchor /> },
  { name: "Reeman", icon: <Box /> },
  // Duplicate for seamless loop
  { name: "Reeman", icon: <Cpu /> },
  { name: "Flosecurity", icon: <Cloud /> },
  { name: "Digital Pathshala", icon: <Shield /> },
  { name: "Reeman", icon: <Zap /> },
  { name: "Reeman", icon: <Anchor /> }, 
  { name: "Reeman", icon: <Box /> },
];

export default function PartnershipSection() {
  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
          padding: "0 24px",
        }}
      >
        <span
          style={{
             display: "inline-block",
             padding: "8px 20px",
             backgroundColor: "rgba(2, 0, 99, 0.05)",
             color: "#020063",
             borderRadius: "100px",
             fontSize: "14px",
             fontWeight: "600",
             marginBottom: "16px",
             letterSpacing: "0.5px",
          }}
        >
           Partnership
        </span>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "bold",
            color: "#020063",
          }}
        >
          Trusted by Industry Leaders
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Gradient Masks for fade effect */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "150px",
            background: "linear-gradient(to right, white, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "150px",
            background: "linear-gradient(to left, white, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Marquee Container */}
        <div
          className="marquee-container"
          style={{
            display: "flex",
            width: "max-content",
          }}
        >
          {/* First set of partners */}
          <div style={{ display: "flex", gap: "60px", paddingRight: "60px" }}>
            {partners.map((partner, index) => (
              <div
                key={`p1-${index}`}
                className="partner-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  opacity: 0.6,
                  filter: "grayscale(100%)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    color: "#4338ca",
                    padding: "12px",
                    background: "rgba(67, 56, 202, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  {partner.icon}
                </div>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#020063",
                    whiteSpace: "nowrap",
                  }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          
           {/* Second set of partners (cloned for seamless loop) */}
           <div style={{ display: "flex", gap: "60px", paddingRight: "60px" }}>
            {partners.map((partner, index) => (
              <div
                key={`p2-${index}`}
                className="partner-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  opacity: 0.6,
                  filter: "grayscale(100%)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    color: "#4338ca",
                    padding: "12px",
                    background: "rgba(67, 56, 202, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  {partner.icon}
                </div>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#020063",
                    whiteSpace: "nowrap",
                  }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          animation: scroll 40s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
        .partner-item:hover {
          opacity: 1 !important;
          filter: grayscale(0%) !important;
          transform: scale(1.05);
        }
      `}} />
    </section>
  );
}
