"use client";

import { useEffect, useRef, useState } from "react";

const partners = [
  {
    name: "Reeman Group",
    description: "Parent Company",
  },
  {
    name: "Flo Softwares",
    description: "Software Development",
  },
  {
    name: "Flo Security",
    description: "Cybersecurity Solutions",
  },
  {
    name: "Digital Pathshala",
    description: "EdTech Platform",
  },
];

export default function PartnershipsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0a0052]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#1a18a0]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-[#0a0052]/10 text-[#0a0052] rounded-full text-sm font-semibold mb-4">
            Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Ecosystem</span>
          </h2>
          <p className="text-lg text-[#0a0052] max-w-2xl mx-auto">
            Part of a strong network of innovative companies
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`glass p-8 rounded-2xl card-lift text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Logo Placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#0a0052] to-[#1a18a0] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {partner.name.split(" ").map((w) => w[0]).join("")}
                </span>
              </div>

              {/* Partner Name */}
              <h3 className="text-lg font-bold text-[#0a0052] mb-1">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#0a0052]">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
