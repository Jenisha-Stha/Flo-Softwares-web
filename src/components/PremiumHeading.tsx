"use client";

import { motion } from "framer-motion";

export default function PremiumHeading() {
  return (
    <section className="relative flex flex-col items-center justify-center py-8 overflow-hidden">
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
    </section>
  );
}

