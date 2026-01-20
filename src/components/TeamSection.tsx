"use client";

import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Manish Basnet",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in software",
    initial: "MB",
    color: "#020063",
  },
  {
    name: "Sanjeev Shrestha",
    role: "Lead Developer",
    bio: "Full-stack expert in React and Node.js",
    initial: "SS",
    color: "#4338ca",
  },
  {
    name: "Priya Thapa",
    role: "UI/UX Designer",
    bio: "Creative designer for user experiences",
    initial: "PT",
    color: "#6366f1",
  },
  {
    name: "Raj Maharjan",
    role: "Backend Architect",
    bio: "Systems expert in cloud infrastructure",
    initial: "RM",
    color: "#020063",
  },
];

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      style={{ backgroundColor: "white" }}
    >
      {/* Header */}
      <div
        style={{
          padding: "100px 24px 48px 24px",
          textAlign: "center",
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
            marginBottom: "20px",
          }}
        >
          👥 Our Team
        </span>
        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: "bold",
            marginBottom: "12px",
            background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Meet the Experts
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(2, 0, 99, 0.5)",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          Talented individuals bringing your vision to life
        </p>
      </div>

      {/* Team Grid - Fixed 4 columns */}
      <div
        style={{
          padding: "0 24px 100px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {team.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                textAlign: "center",
                padding: "24px 16px",
                borderRadius: "20px",
                backgroundColor: hoveredIndex === index ? "#f8faff" : "transparent",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  margin: "0 auto 16px auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                  background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}cc 100%)`,
                  boxShadow: hoveredIndex === index
                    ? `0 12px 32px ${member.color}40`
                    : `0 6px 20px ${member.color}20`,
                  transition: "all 0.3s ease",
                  transform: hoveredIndex === index ? "scale(1.08)" : "scale(1)",
                }}
              >
                {member.initial}
              </div>

              {/* Name */}
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#020063",
                  marginBottom: "4px",
                }}
              >
                {member.name}
              </h3>

              {/* Role */}
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#4338ca",
                  marginBottom: "8px",
                }}
              >
                {member.role}
              </p>

              {/* Bio */}
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(2, 0, 99, 0.5)",
                  lineHeight: "1.4",
                }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
