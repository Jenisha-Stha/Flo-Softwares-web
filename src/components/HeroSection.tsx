"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const TOTAL_FRAMES = 80;

// Text content for different scroll phases
const scrollTexts = [
  {
    startFrame: 1,
    endFrame: 20,
    title: "We Build Digital",
    subtitle: "Experiences",
    description: "Transforming ideas into powerful software solutions",
  },
  {
    startFrame: 21,
    endFrame: 40,
    title: "Crafting Modern",
    subtitle: "Applications",
    description: "Mobile apps that connect people and businesses",
  },
  {
    startFrame: 41,
    endFrame: 60,
    title: "Innovative",
    subtitle: "Technology",
    description: "Cutting-edge solutions for tomorrow's challenges",
  },
  {
    startFrame: 61,
    endFrame: 80,
    title: "Your Vision",
    subtitle: "Realized",
    description: "From concept to launch, we make it happen",
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new window.Image();
        img.src = `/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
        promises.push(
          new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          })
        );
      }
      await Promise.all(promises);
      setIsLoaded(true);
    };
    preloadImages();
  }, []);

  // Handle scroll-based frame animation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      const scrollStart = -windowHeight;
      const scrollEnd = containerHeight - windowHeight;
      const scrollRange = scrollEnd - scrollStart;

      const progress = Math.max(
        0,
        Math.min(1, (-containerTop - scrollStart) / scrollRange)
      );

      const frame = Math.max(1, Math.min(TOTAL_FRAMES, Math.ceil(progress * TOTAL_FRAMES)));
      setCurrentFrame(frame);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getFramePath = (frameNum: number) => {
    return `/frames/ezgif-frame-${String(frameNum).padStart(3, "0")}.jpg`;
  };

  // Get current text based on frame
  const getCurrentText = () => {
    for (const text of scrollTexts) {
      if (currentFrame >= text.startFrame && currentFrame <= text.endFrame) {
        // Calculate opacity based on position within this text's range
        const rangeSize = text.endFrame - text.startFrame;
        const positionInRange = currentFrame - text.startFrame;
        const progress = positionInRange / rangeSize;

        // Fade in for first 20%, full opacity for middle 60%, fade out for last 20%
        let opacity = 1;
        if (progress < 0.2) {
          opacity = progress / 0.2;
        } else if (progress > 0.8) {
          opacity = (1 - progress) / 0.2;
        }

        return { ...text, opacity };
      }
    }
    return { ...scrollTexts[0], opacity: 1 };
  };

  const currentText = getCurrentText();

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative"
      style={{ height: "400vh" }}
    >
      {/* Sticky Full-Page Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Full-Page Frame Image */}
        <div className="absolute inset-0 w-full h-full">
          {!isLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f8faff] to-[#e8ecff]">
              <div className="w-16 h-16 border-4 border-[#020063]/20 border-t-[#020063] rounded-full animate-spin"></div>
            </div>
          ) : (
            <Image
              src={getFramePath(currentFrame)}
              alt="Phone Assembly Animation"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          )}
        </div>

        {/* Text Overlay - Right Side */}
        {isLoaded && (
          <div
            className="absolute right-8 sm:right-16 lg:right-24 top-1/2 -translate-y-1/2 max-w-md text-right transition-all duration-300"
            style={{ opacity: currentText.opacity }}
          >
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#020063] leading-tight mb-2"
              style={{
                textShadow: "0 2px 20px rgba(255,255,255,0.8)",
              }}
            >
              {currentText.title}
            </h2>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{
                background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "none",
              }}
            >
              {currentText.subtitle}
            </h2>
            <p
              className="text-lg sm:text-xl text-[#020063]/70 font-medium"
              style={{
                textShadow: "0 1px 10px rgba(255,255,255,0.9)",
              }}
            >
              {currentText.description}
            </p>

            {/* CTA Button - Only on first phase */}
            {currentFrame <= 25 && (
              <div
                className="mt-8 transition-opacity duration-500"
                style={{ opacity: currentFrame <= 15 ? 1 : (25 - currentFrame) / 10 }}
              >
                <a
                  href="#contact"
                  style={{
                    background: "linear-gradient(135deg, #020063 0%, #3730a3 100%)",
                    boxShadow: "0 4px 20px rgba(2, 0, 99, 0.4)",
                  }}
                  className="inline-block text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all"
                >
                  Start Your Project →
                </a>
              </div>
            )}
          </div>
        )}

        {/* Left side small text indicator */}
        {isLoaded && (
          <div
            className="absolute left-8 sm:left-16 bottom-12 transition-opacity duration-300"
            style={{ opacity: 0.6 }}
          >
            <div className="text-sm text-[#020063]/60 font-medium">
              <span className="block text-xs uppercase tracking-widest mb-1">Scroll Progress</span>
              <span className="text-2xl font-bold text-[#020063]">
                {Math.round((currentFrame / TOTAL_FRAMES) * 100)}%
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
