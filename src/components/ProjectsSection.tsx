"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "title",
    category: "Web Development",
    description: "Social networking app with real-time messaging.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#4338ca",
  },
  {
    title: "title",
    category: "Enterprise",
    description: "Social networking app with real-time messaging..",
    tags: ["Python", "PostgreSQL"],
    color: "#020063",
  },
  {
    title: "title",
    category: "Web App",
    description: "Social networking app with real-time messaging.",
    tags: ["Next.js", "D3.js"],
    color: "#6366f1",
  },
  {
    title: "title",
    category: "Web App",
    description: "Social networking app with real-time messaging.",
    tags: ["React", "WebRTC"],
    color: "#4338ca",
  },
  {
    title: "title",
    category: "Desktop",
    description: "Social networking app with real-time messaging.",
    tags: ["Electron", "SQLite"],
    color: "#020063",
  },
  {
    title: "title",
    category: "Mobile",
    description: "Social networking app with real-time messaging.",
    tags: ["React Native", "Firebase"],
    color: "#6366f1",
  },
];

const allProjects = [...projects, ...projects];

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
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
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          Explore our portfolio of successful projects
        </p>
      </div>

      {/* Carousel */}
      <div
        style={{ paddingBottom: "120px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          style={{
            display: "flex",
            gap: "48px",
            paddingLeft: "48px",
            animation: "scrollProjects 40s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
            width: "fit-content",
          }}
        >
          {allProjects.map((project, index) => (
            <div
              key={index}
              style={{
                minWidth: "320px",
                borderRadius: "20px",
                backgroundColor: "white",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                transition: "all 0.3s ease",
              }}
              className="hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Header */}
              <div
                style={{
                  height: "160px",
                  background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}bb 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    padding: "5px 12px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(8px)",
                    color: "white",
                    borderRadius: "100px",
                    fontSize: "11px",
                    fontWeight: "600",
                  }}
                >
                  {project.category}
                </span>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {"</>"}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#020063",
                    marginBottom: "8px",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(2, 0, 99, 0.5)",
                    lineHeight: "1.5",
                    marginBottom: "14px",
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "4px 10px",
                        backgroundColor: "#f8faff",
                        color: "#4338ca",
                        borderRadius: "6px",
                        fontSize: "11px",
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

      <style jsx>{`
        @keyframes scrollProjects {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
