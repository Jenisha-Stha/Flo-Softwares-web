"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import PremiumHeading from "@/components/PremiumHeading";

import { useRive, useStateMachineInput, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { motion } from "framer-motion";

const riveFile = "/assets/24549-45842-magic-cat.riv";

import TextPressure from "@/components/animations/Text-Pressure";
 

const stats = [
  { number: 50, suffix: "+", label: "Projects" },
  { number: 30, suffix: "+", label: "Clients" },
  { number: 5, suffix: "+", label: "Years" },
  { number: 99, suffix: "%", label: "Satisfaction" },
];

// Animated Counter Component
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate the count
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        fontSize: "36px",
        fontWeight: "bold",
        background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {count}{suffix}
    </motion.div>
  );
}

function RiveAnimation() {
  const [stateMachineName, setStateMachineName] = useState<string | undefined>(undefined);

  const { RiveComponent, rive } = useRive({
    src: riveFile,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  // Get the first state machine name when rive loads
  useEffect(() => {
    if (rive && !stateMachineName) {
      const stateMachineNames = rive.stateMachineNames;
      if (stateMachineNames && stateMachineNames.length > 0) {
        const name = stateMachineNames[0];
        setStateMachineName(name);
        // Play the state machine
        rive.play(name);
      }
    }
  }, [rive, stateMachineName]);

  // Get the Hover input from the state machine
  const hoverInput = useStateMachineInput(rive, stateMachineName || "", "Hover", false);

  const onMouseEnter = useCallback(() => {
    // eslint-disable-next-line react-hooks/immutability
    if (hoverInput) hoverInput.value = true;
  }, [hoverInput]);

  const onMouseLeave = useCallback(() => {
    // eslint-disable-next-line react-hooks/immutability
    if (hoverInput) hoverInput.value = false;
  }, [hoverInput]);

  return (
    <motion.div
      className="relative mx-auto max-w-md mb-8"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ width: "300px", height: "300px", margin: "0 auto" }}
    >
      <div
        className="aspect-square w-full cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ width: "100%", height: "100%" }}
      >
        <RiveComponent />
      </div>
    </motion.div>
  );
}

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


          <RiveAnimation />



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

            backgroundColor: "white",
            padding: "40px",
            borderRadius: "32px",
            boxShadow: "0 8px 30px rgba(2, 0, 99, 0.1)",
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
                  background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 24px",
        }}
      >
        <PremiumHeading />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginTop: "32px",
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={`stat-${index}`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{
                textAlign: "center",
                padding: "28px 36px",
                backgroundColor: "white",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(2, 0, 99, 0.1)",
                minWidth: "120px",
                cursor: "pointer",
              }}
            >
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              <div
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "rgba(2, 0, 99, 0.5)",
                  marginTop: "8px",
                  fontWeight: "500",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
