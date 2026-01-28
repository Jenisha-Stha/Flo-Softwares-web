"use client";

import { motion } from "framer-motion";

interface PremiumHeadingProps {
  lines?: string[];
}

export default function PremiumHeading({
  lines = ["Transforming Ideas", "Into Digital Solutions"],
}: PremiumHeadingProps) {
  return (
    <section className="relative flex items-center justify-center py-24 overflow-hidden">
      
      {/* Ambient subtle dark-blue glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] rounded-full 
                        bg-[#020063]/5
                        blur-[120px]" />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative text-center font-extrabold tracking-tight
                   text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      >
        {lines.map((line, idx) => (
          <div key={idx} className="overflow-hidden">
            <span
              className="text-[#020063] block"
            >
              {line}
            </span>
          </div>
        ))}
      </motion.h1>
    </section>
  );
}
