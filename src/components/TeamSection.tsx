"use client";

import { useEffect, useRef, useState } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

const team = [
  {
    name: "Hari Prasad",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in software development",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Sita Rani",
    role: "CTO",
    bio: "Technical architect specializing in scalable systems",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Ram Kumar",
    role: "Lead Developer",
    bio: "Full-stack expert with passion for clean code",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Maya Devi",
    role: "UI/UX Lead",
    bio: "Creative designer focused on user-centered experiences",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      className="section-padding bg-gradient-to-b from-[#f0f4ff] to-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#0a0052]/5 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#1a18a0]/5 rounded-full blur-3xl float-delay-1"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-[#0a0052]/10 text-[#0a0052] rounded-full text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Meet the Experts</span>
          </h2>
          <p className="text-lg text-[#0a0052] max-w-2xl mx-auto">
            A talented team of professionals dedicated to your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group glass p-6 rounded-2xl text-center card-lift transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Profile Image */}
              <div className="relative mx-auto mb-6 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0052] to-[#1a18a0] rounded-full"></div>
                <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#e8ecff] to-[#dce3ff] flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                {/* Hover Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#1a18a0] scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-[#0a0052] mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm font-medium gradient-text mb-3">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-sm text-[#0a0052] mb-4">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a
                  href={member.linkedin}
                  className="w-9 h-9 rounded-full bg-[#0a0052]/10 flex items-center justify-center hover:bg-[#0a0052] hover:text-white text-[#0a0052] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.twitter}
                  className="w-9 h-9 rounded-full bg-[#0a0052]/10 flex items-center justify-center hover:bg-[#0a0052] hover:text-white text-[#0a0052] transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={member.github}
                  className="w-9 h-9 rounded-full bg-[#0a0052]/10 flex items-center justify-center hover:bg-[#0a0052] hover:text-white text-[#0a0052] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
