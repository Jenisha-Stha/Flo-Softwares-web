"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured online shopping platform with real-time inventory management.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#4338ca",
  },
  {
    title: "Healthcare Management",
    category: "Enterprise Software",
    description: "Comprehensive hospital management system for patient records and scheduling.",
    tags: ["Python", "PostgreSQL", "Docker"],
    color: "#020063",
  },
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "Real-time financial analytics dashboard with advanced data visualization.",
    tags: ["Next.js", "D3.js", "AWS"],
    color: "#6366f1",
  },
  {
    title: "Learning Platform",
    category: "EdTech",
    description: "Interactive e-learning platform with video courses and progress tracking.",
    tags: ["React", "Node.js", "WebRTC"],
    color: "#4338ca",
  },
  {
    title: "Inventory System",
    category: "Client Software",
    description: "Desktop inventory and warehouse management with barcode integration.",
    tags: ["Electron", "SQLite", "React"],
    color: "#020063",
  },
  {
    title: "Social Media App",
    category: "Mobile Development",
    description: "Feature-rich social networking app with real-time messaging.",
    tags: ["React Native", "Firebase", "WebSocket"],
    color: "#6366f1",
  },
];

export default function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      style={{
        backgroundColor: "#f8faff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "120px 24px 80px 24px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "10px 24px",
            backgroundColor: "rgba(2, 0, 99, 0.05)",
            color: "#020063",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "24px",
            letterSpacing: "0.5px",
          }}
        >
          🚀 Our Projects
        </span>
        <h2
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: "bold",
            marginBottom: "20px",
            background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Recent Work
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "rgba(2, 0, 99, 0.5)",
            maxWidth: "550px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Explore our portfolio of successful projects across various industries
        </p>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          padding: "0 24px 120px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                borderRadius: "24px",
                backgroundColor: "white",
                border: "1px solid rgba(2, 0, 99, 0.05)",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                boxShadow: hoveredIndex === index
                  ? "0 20px 40px rgba(2, 0, 99, 0.1)"
                  : "0 2px 8px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Project Image Placeholder */}
              <div
                style={{
                  height: "200px",
                  background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Pattern overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.1,
                    background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                />
                {/* Category badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    padding: "6px 14px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    borderRadius: "100px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {project.category}
                </span>
                {/* Icon */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "36px",
                    transition: "transform 0.3s ease",
                    transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {"</>"}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "28px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#020063",
                    marginBottom: "10px",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(2, 0, 99, 0.5)",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "#f8faff",
                        color: "#4338ca",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
