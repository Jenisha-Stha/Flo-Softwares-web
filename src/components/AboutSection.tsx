"use client";

import { useEffect, useRef, useState } from "react";
import PremiumHeading from "@/components/PremiumHeading";
import TextPressure from "@/components/animations/Text-Pressure";

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
      {/* 🔹 UPPER PART — Description */}
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
<div style={{ position: "relative", height: "128px", width: "100%", marginBottom: "24px" }}>
            <TextPressure
              text="Who We Are"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#020063"
              minFontSize={48}
            />
          </div>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(2, 0, 99, 0.5)",
              lineHeight: "1.7",
            }}
          >
            We are a forward-thinking software development company delivering
            innovative, scalable, and reliable digital solutions that transform
            ideas into impactful technology—driving growth, efficiency, and
            measurable business outcomes.
          </p>
        </div>
      </div>

      {/* 🔹 UPPER PART — Mission / Vision / Values */}
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
      {
        title: "Mission",
        text: "To design and deliver secure, scalable, and high-quality software solutions that enable organizations to operate efficiently and achieve sustainable digital transformation.",
      },
      {
        title: "Vision",
        text: "To become a globally trusted technology partner, setting benchmarks in software excellence, innovation, and long-term client value.",
      },
      {
        title: "Values",
        text: "Innovation, integrity, collaboration, and excellence define our culture and guide every solution we build.",
      },
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
            backgroundColor: "#020063",
            boxShadow: "0 8px 30px rgba(2, 0, 99, 0.25)",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
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


      {/* 🔹 DOWN PART — Premium Heading + Stats */}
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
        <PremiumHeading />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
            flexWrap: "wrap",
            marginTop: "48px",
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: "center", minWidth: "100px" }}>
              <div
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: "bold",
                  marginBottom: "4px",
                  color: "#020063",
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
    </section>
  );
}
