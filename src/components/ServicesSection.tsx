"use client";

import { useEffect, useRef, useState } from "react";
import { Monitor, Globe, Palette, Smartphone } from "lucide-react";
import TextPressure from "@/components/animations/Text-Pressure";

const services = [
  {
    icon: <Monitor size={32} color="white" />,
    title: "Client Software",
    description: "Custom desktop and enterprise applications tailored to your specific business needs with robust architecture.",
    features: ["Enterprise Solutions", "Data Management", "Automation Tools"],
  },
  {
    icon: <Globe size={32} color="white" />,
    title: "Web Development",
    description: "Full-stack web applications built with modern technologies for optimal performance and scalability.",
    features: ["Responsive Design", "Cross-Platform", "API Integration"],
  },
  {
    icon: <Palette size={32} color="white" />,
    title: "UI/UX Design",
    description: "User-centered design solutions that combine beautiful aesthetics with seamless functionality.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: <Smartphone size={32} color="white" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android with stunning interfaces.",
    features: ["iOS & Android", "React Native", "Flutter"],
  },
];

export default function ServicesSection() {
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
      id="services"
      ref={sectionRef}
      style={{
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      


      
      <div
        style={{
          padding: "120px 24px 80px 24px",
          textAlign: "center",
          position: "relative",
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
           Our Services
        </span>
        
<div style={{ position: "relative", height: "105px", width: "100%", maxWidth: "600px", margin: "0 auto", marginBottom: "20px" }}>
          <TextPressure
            text="What We Offer"
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
        <p
          style={{
            fontSize: "18px",
            color: "rgba(2, 0, 99, 0.5)",
            maxWidth: "550px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Comprehensive software solutions designed to elevate your business to new heights
        </p>
      </div>

      
      <div
        style={{
          padding: "0 24px 120px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                padding: "40px 32px",
                borderRadius: "24px",
                backgroundColor: hoveredIndex === index ? "white" : "#f8faff",
                border: hoveredIndex === index
                  ? "1px solid rgba(67, 56, 202, 0.2)"
                  : "1px solid rgba(2, 0, 99, 0.05)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                boxShadow: hoveredIndex === index
                  ? "0 20px 40px rgba(2, 0, 99, 0.12)"
                  : "none",
                position: "relative",
                overflow: "hidden",
              }}
            >
              
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "#ff8c00",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />

              
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  marginBottom: "28px",
                  backgroundColor: "#020063",
                  boxShadow: "0 12px 28px rgba(2, 0, 99, 0.25)",
                  transition: "transform 0.3s ease",
                  transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                }}
              >
                {service.icon}
              </div>

              
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#020063",
                  marginBottom: "12px",
                }}
              >
                {service.title}
              </h3>

              
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(2, 0, 99, 0.5)",
                  lineHeight: "1.7",
                  marginBottom: "24px",
                }}
              >
                {service.description}
              </p>

              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "rgba(2, 0, 99, 0.6)",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "rgba(67, 56, 202, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        color: "#4338ca",
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#4338ca",
                  opacity: hoveredIndex === index ? 1 : 0.7,
                  transition: "all 0.3s ease",
                }}
              >
                Learn More
                <span style={{
                  transition: "transform 0.3s ease",
                  transform: hoveredIndex === index ? "translateX(4px)" : "translateX(0)",
                }}>
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}