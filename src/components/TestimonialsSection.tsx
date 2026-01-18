"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, TechVentures Nepal",
    content:
      "FLO Softwares delivered an exceptional e-commerce platform that exceeded our expectations. Their team's expertise and dedication made the entire process seamless. The attention to detail and commitment to quality is unmatched.",
    rating: 5,
    company: "TechVentures",
  },
  {
    name: "Priya Thapa",
    role: "Director, HealthCare Plus",
    content:
      "The healthcare management system they built has transformed our operations. Patient management is now efficient and our staff productivity has increased significantly. Highly recommended for enterprise solutions!",
    rating: 5,
    company: "HealthCare+",
  },
  {
    name: "Anil Gurung",
    role: "Founder, EduLearn Academy",
    content:
      "The LMS platform created by FLO Softwares has revolutionized how we deliver online education. The interface is intuitive and students love the interactive features. A game-changer for our institution!",
    rating: 5,
    company: "EduLearn",
  },
  {
    name: "Suman Shrestha",
    role: "CTO, FinanceHub",
    content:
      "Working with FLO Softwares on our fintech dashboard was a pleasure. They understood our complex requirements and delivered a solution that exceeded all benchmarks. Their technical expertise is truly impressive.",
    rating: 5,
    company: "FinanceHub",
  },
  {
    name: "Maya Rai",
    role: "Product Manager, RetailNow",
    content:
      "The inventory management system FLO built for us handles millions of SKUs flawlessly. Real-time tracking and barcode integration have streamlined our entire supply chain. Outstanding work!",
    rating: 5,
    company: "RetailNow",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");

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

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;

    const interval = setInterval(() => {
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible]);

  const goToPrev = useCallback(() => {
    setIsAutoPlaying(false);
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4ff] via-[#e8ecff] to-[#dce3ff]">
        {/* Morphing Blobs */}
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#0a0052]/10 rounded-full blur-3xl morph-bg" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#1a18a0]/10 rounded-full blur-3xl morph-bg" style={{ animationDelay: "4s" }} />
        
        {/* Floating Quote Icons */}
        <div className="absolute top-1/4 left-1/4 opacity-10 float">
          <Quote className="w-20 h-20 text-[#0a0052]" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 opacity-10 float-delay-2">
          <Quote className="w-16 h-16 text-[#1a18a0]" />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-[#0a0052]/10 particle"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0a0052]/10 to-[#1a18a0]/10 text-[#0a0052] rounded-full text-sm font-semibold mb-4 glow-effect">
            <Sparkles className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-lg text-[#0a0052] max-w-2xl mx-auto">
            Trusted by businesses across Nepal and beyond
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Carousel Container */}
          <div className="relative h-[400px] md:h-[350px] perspective-container">
            {testimonials.map((testimonial, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              const isActive = index === activeIndex;
              
              // Calculate 3D transform based on position
              let transform = "";
              let zIndex = testimonials.length - absOffset;
              let opacity = 1;
              let scale = 1;

              if (offset === 0) {
                transform = "translateX(0) rotateY(0deg) scale(1)";
                zIndex = 10;
              } else if (offset === 1 || offset === -(testimonials.length - 1)) {
                transform = "translateX(80%) rotateY(-15deg) scale(0.85)";
                opacity = 0.6;
                scale = 0.85;
                zIndex = 5;
              } else if (offset === -1 || offset === (testimonials.length - 1)) {
                transform = "translateX(-80%) rotateY(15deg) scale(0.85)";
                opacity = 0.6;
                scale = 0.85;
                zIndex = 5;
              } else {
                opacity = 0;
                zIndex = 0;
              }

              return (
                <div
                  key={testimonial.name}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                    isActive ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                  style={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                >
                  <div
                    className={`w-full max-w-3xl mx-4 glass p-8 md:p-10 rounded-3xl transition-all duration-500 ${
                      isActive ? "glow-effect shadow-2xl" : ""
                    }`}
                    style={{
                      transform: `scale(${scale})`,
                    }}
                  >
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#0a0052] to-[#1a18a0] rounded-2xl flex items-center justify-center shadow-xl">
                      <Quote className="w-8 h-8 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 fill-[#fbbf24] text-[#fbbf24] transition-all duration-300 ${
                            isActive ? "animate-pulse" : ""
                          }`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-[#0a0052] text-lg md:text-xl mb-8 leading-relaxed italic text-center">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#0a0052] to-[#1a18a0] flex items-center justify-center text-white font-bold text-2xl transition-all duration-500 ${
                          isActive ? "scale-110 glow-effect" : ""
                        }`}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-[#0a0052] text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-[#0a0052]">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Company Badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#0a0052] to-[#1a18a0] text-white text-sm font-medium rounded-full shadow-lg">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-[#0a0052] hover:bg-[#0a0052] hover:text-white transition-all duration-300 z-20 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-[#0a0052] hover:bg-[#0a0052] hover:text-white transition-all duration-300 z-20 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "dot-active w-8"
                    : "bg-[#0a0052]/20 hover:bg-[#0a0052]/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                isAutoPlaying
                  ? "bg-[#0a0052]/10 text-[#0a0052]"
                  : "bg-[#0a0052]/5 text-[#0a0052]/50"
              }`}
            >
              {isAutoPlaying ? "⏸ Auto-playing" : "▶ Paused"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
