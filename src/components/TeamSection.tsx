"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextPressure from "@/components/TextPressure";

const team = [
  { name: "Manish Basnet", role: "Founder & CEO", bio: "Visionary leader with 10+ years in software", initial: "MB" },
  { name: "Sanjeev Shrestha", role: "Lead Developer", bio: "Full-stack expert in React and Node.js", initial: "SS" },
  { name: "Apeksha Parajuli", role: "UI/UX Designer", bio: "Creative designer for user experiences", initial: "PT" },
  { name: "Arpana Sharma", role: "Backend Architect", bio: "Systems expert in cloud infrastructure", initial: "RM" },
  { name: "Ramesh Khatri", role: "Project Manager", bio: "Keeps projects on track", initial: "RK" },
  { name: "Sita Sharma", role: "QA Lead", bio: "Ensures quality and smooth release", initial: "SS" },
];

export default function TeamSection() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const avatarColors = ["#020063", "#ff8c00"]; // Blue & Orange alternate

  useEffect(() => {
    if (rowRef.current) setWidth(rowRef.current.scrollWidth / 2);
  }, []);

  const loopTeam = [...team, ...team]; // duplicate for infinite scroll

  return (
    <section style={{ backgroundColor: "#f5f7ff", padding: "100px 0" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span style={{
          display: "inline-block",
          padding: "10px 24px",
          backgroundColor: "rgba(2,0,99,0.05)",
          color: "#020063",
          borderRadius: "100px",
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "20px"
        }}> Our Team</span>
<div style={{ position: "relative", height: "100px", width: "100%", maxWidth: "700px", margin: "0 auto", marginBottom: "16px" }}>
          <TextPressure
            text="Meet The Experts"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#020063"
            minFontSize={36}
          />
        </div>
        <p style={{ fontSize: "17px", color: "rgba(2,0,99,0.5)", maxWidth: "500px", margin: "0 auto" }}>
          Talented individuals bringing your vision to life
        </p>
      </div>

      {/* Single row infinite carousel */}
      <div style={{ overflow: "hidden", padding: "0 24px" }}>
        <motion.div
          ref={rowRef}
          style={{ display: "flex", gap: "36px", x: 0 }}
          animate={{ x: hovered === null ? [-width, 0] : 0 }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
        >
          {loopTeam.map((member, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: "320px",       
                height: "420px",      
                padding: "36px 24px",
                borderRadius: "20px",
                textAlign: "center",
                cursor: "pointer",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                background: hovered === index ? "#020063" : "#ffffff",
                color: hovered === index ? "white" : "inherit",
                boxShadow: "0 6px 24px rgba(0,0,0,0.08)"
              }}
              animate={{
                scale: hovered === index ? 1.25 : [0.97, 1.03, 0.97],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Avatar */}
              <div style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: "bold",
                color: "white",
                background: avatarColors[index % 2] === "#020063" && hovered === index ? "#4f6ef5" : avatarColors[index % 2],
                boxShadow: `0 6px 28px ${avatarColors[index % 2]}50`
              }}>{member.initial}</div>

              {/* Name */}
              <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "6px" }}>{member.name}</h3>

              {/* Role */}
              <p style={{ fontSize: "15px", fontWeight: "600", marginBottom: "10px" }}>{member.role}</p>

              {/* Bio */}
              <p style={{ fontSize: "14px", lineHeight: "1.5" }}>{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
