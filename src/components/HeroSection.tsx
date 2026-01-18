"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const frameRef = useRef(1);
  const rafRef = useRef<number | null>(null);

  // Preload all images
  useEffect(() => {
    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = `/frames/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;
        img.onload = () => {
          setImagesLoaded(prev => {
            const newState = [...prev];
            newState[index - 1] = true;
            return newState;
          });
          resolve();
        };
        img.onerror = () => resolve();
      });
    };

    const preloadImages = async () => {
      // Load first few frames immediately for quick start
      await Promise.all([1, 2, 3, 4, 5].map(i => loadImage(i)));
      setIsLoaded(true);

      // Load rest in background
      for (let i = 6; i <= TOTAL_FRAMES; i++) {
        loadImage(i);
      }
    };

    preloadImages();
  }, []);

  // Smooth scroll-based frame animation using requestAnimationFrame
  const updateFrame = useCallback(() => {
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

    const targetFrame = Math.max(1, Math.min(TOTAL_FRAMES, Math.ceil(progress * TOTAL_FRAMES)));

    // Smoother interpolation towards target frame
    const currentFrameVal = frameRef.current;
    const diff = targetFrame - currentFrameVal;
    const step = diff * 0.08; // Lower = smoother

    if (Math.abs(diff) > 0.3) {
      frameRef.current = currentFrameVal + step;
      setCurrentFrame(Math.round(frameRef.current));
      rafRef.current = requestAnimationFrame(updateFrame);
    } else {
      frameRef.current = targetFrame;
      setCurrentFrame(targetFrame);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateFrame);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateFrame]);

  const getFramePath = (frameNum: number) => {
    return `/frames/ezgif-frame-${String(frameNum).padStart(3, "0")}.jpg`;
  };

  // Get current text based on frame
  const getCurrentText = () => {
    for (const text of scrollTexts) {
      if (currentFrame >= text.startFrame && currentFrame <= text.endFrame) {
        const rangeSize = text.endFrame - text.startFrame;
        const positionInRange = currentFrame - text.startFrame;
        const progress = positionInRange / rangeSize;

        let opacity = 1;
        if (progress < 0.15) {
          opacity = progress / 0.15;
        } else if (progress > 0.85) {
          opacity = (1 - progress) / 0.15;
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
        {/* Full-Page Frame Image with smooth transition */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transition: "opacity 0.1s ease-out",
          }}
        >
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
              style={{
                transition: "opacity 0.15s ease-out",
              }}
              priority
              unoptimized
            />
          )}
        </div>

        {/* Text Overlay - Right Side */}
        {isLoaded && (
          <div
            className="absolute right-8 sm:right-16 lg:right-24 top-1/2 -translate-y-1/2 max-w-md text-right"
            style={{
              opacity: currentText.opacity,
              transition: "opacity 0.3s ease-out",
              transform: `translateY(-50%) translateX(${(1 - currentText.opacity) * 20}px)`,
            }}
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
                className="mt-8"
                style={{
                  opacity: currentFrame <= 15 ? 1 : (25 - currentFrame) / 10,
                  transition: "opacity 0.3s ease-out",
                }}
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
      </div>
    </section>
  );
}
