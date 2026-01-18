"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Target, Clock, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Skilled professionals with years of experience in cutting-edge technologies and software development.",
  },
  {
    icon: Target,
    title: "Client-Focused",
    description:
      "We prioritize your vision and goals, delivering customized solutions that align with your business objectives.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Committed to meeting deadlines without compromising on quality, ensuring your projects launch on schedule.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Future-proof architecture that grows with your business, adapting to evolving needs and technologies.",
  },
];

export default function WhyChooseUsSection() {
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
      className="section-padding bg-gradient-brand relative overflow-hidden"
    >
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full float"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-white/10 rounded-full float-delay-1"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/15 rounded-full float-delay-2"></div>
      <div className="absolute bottom-20 right-1/4 w-5 h-5 bg-white/20 rounded-full float"></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-white/25 rounded-full float-delay-1"></div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a18a0]/50 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We stand out through our commitment to excellence and innovative approach
          </p>
        </div>

        {/* Reasons Grid - Centered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`text-center group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Circular Icon with Gradient Border */}
              <div className="relative mx-auto mb-6 w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/5 rounded-full"></div>
                <div className="absolute inset-1 bg-[#0a0052] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
