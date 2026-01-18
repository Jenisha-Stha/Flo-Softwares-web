"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "50+", label: "Projects" },
  { number: "30+", label: "Clients" },
  { number: "5+", label: "Years" },
  { number: "99%", label: "Satisfaction" },
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
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
      id="about"
      ref={sectionRef}
      style={{ backgroundColor: "#f8faff" }}
    >
      {/* Block 1 - Title + Stats */}
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: "bold",
            marginBottom: "16px",
            background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Who We Are
        </h2>
        <p
          style={{
            fontSize: "20px",
            color: "rgba(2, 0, 99, 0.5)",
            marginBottom: "48px",
            maxWidth: "500px",
          }}
        >
          Transforming ideas into powerful software solutions
        </p>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
            flexWrap: "wrap",
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: "center", minWidth: "100px" }}>
              <div
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: "bold",
                  marginBottom: "4px",
                  background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "rgba(2, 0, 99, 0.4)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Block 2 - Description */}
      <div
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
          backgroundColor: "white",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <h3
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "bold",
              color: "#020063",
              marginBottom: "24px",
              lineHeight: "1.2",
            }}
          >
            Building Tomorrow's{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Technology Today
            </span>
          </h3>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(2, 0, 99, 0.5)",
              lineHeight: "1.7",
            }}
          >
            We are a cutting-edge software development company specializing in
            creating innovative digital solutions that help businesses thrive
            in the modern digital landscape.
          </p>
        </div>
      </div>

      {/* Block 3 - Values */}
      <div
        style={{
          padding: "80px 24px",
          backgroundColor: "#f8faff",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "48px",
            flexWrap: "wrap",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            { title: "Mission", text: "Deliver innovative software solutions that empower businesses to achieve their digital transformation goals." },
            { title: "Vision", text: "Become a global leader in software innovation, recognized for excellence and cutting-edge technology." },
            { title: "Values", text: "Innovation, integrity, collaboration, and excellence guide every project we undertake." },
          ].map((card, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                flex: "1 1 280px",
                maxWidth: "300px",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  margin: "0 auto 24px auto",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
                  boxShadow: "0 8px 30px rgba(2, 0, 99, 0.25)",
                }}
              >
                <span style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
                  {card.title[0]}
                </span>
              </div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#020063",
                  marginBottom: "12px",
                }}
              >
                Our {card.title}
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(2, 0, 99, 0.5)",
                  lineHeight: "1.6",
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
