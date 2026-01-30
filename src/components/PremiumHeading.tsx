"use client";

import { motion } from "framer-motion";

export default function PremiumHeading() {
  return (
    <section className="relative flex flex-col items-center justify-center py-8 overflow-hidden">
{/* 
    <section className="relative flex items-center justify-center py-24 overflow-hidden"> */}
      
      {/* Ambient subtle dark-blue glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] rounded-full 
                        bg-[#020063]/5
                        blur-[120px]" />
      </div>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: "center" }}
      >

        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: "bold",
            color: "#020063",
            lineHeight: "1.2",
            margin: 0,
          }}
        >
          Transforming Ideas
        </h2>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: "bold",
            color: "#020063",
            lineHeight: "1.2",
            margin: 0,
          }}
        >
          Into Digital Solutions
        </h2>
      </motion.div>

        {lines.map((line, idx) => (
          <div key={idx} className="overflow-hidden">
            <span
              className="text-[#020063] block"
            >
              {line}
            </span>
          </div>
        ))}
      
 
    </section>
  );
  
}


