"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Jenisha Shrestha",
    role: "Client",
    review:" helped us communicate better with customers. Amazing experience!",
  },
  {
    name: "Prashant Karki",
    role: "Business Owner",
    review: "Very smooth and professional service. Loved the innovation!",
  },
  {
    name: "Apeksha Parajuli",
    role: "CEO",
    review: "The team did a great job. Simple, effective, and impactful.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeaving(active);

      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
        setLeaving(null);
      }, 700);
    }, 3500);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="w-full flex justify-center mt-24 px-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          What Our Clients Say
        </h2>

        
        <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden flex items-center justify-center">
          {testimonials.map((item, i) => {
            let position = "hidden";

            if (i === active) position = "active";
            else if (i === leaving) position = "leaving";
            else if (i === (active + 1) % testimonials.length)
              position = "next";

            return (
              <div
                key={i}
                className={`
                  absolute inset-0
                  flex items-center justify-center
                  transition-all duration-700 ease-in-out
                  ${cardStyles[position]}
                `}
              >
                
                <div className="
                  bg-white rounded-3xl shadow-2xl
                  w-full max-w-[340px] md:max-w-[520px]
                  h-[220px] md:h-[260px]
                  p-6 md:p-10
                  flex flex-col items-center justify-center
                  gap-4 md:gap-6
                  text-center
                ">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed line-clamp-3">
                    “{item.review}”
                  </p>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <span className="text-xs md:text-sm text-gray-400">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


const cardStyles: Record<string, string> = {
  active:
    "z-30 translate-x-0 rotate-0 scale-100 opacity-100",

  leaving:
    "z-20 -translate-x-20 md:-translate-x-40 -rotate-3 scale-95 opacity-100",

  next:
    "z-10 translate-x-20 md:translate-x-40 rotate-3 scale-95 opacity-100",

  hidden:
    "opacity-0 scale-90 pointer-events-none",
};
