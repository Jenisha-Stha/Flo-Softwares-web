"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChromaGrid from "@/components/animations/ChromaGrid";
import TextPressure from "@/components/animations/Text-Pressure";

const teamMembers = [
  {
    image: "https://i.pravatar.cc/300?img=60",
    title: "Manish Basnet",
    subtitle: "Founder & CEO",
    handle: "@manish",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg,#4F46E5,#000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=60",
    title: "Sanjeev Shrestha",
    subtitle: "Lead Developer",
    handle: "@sanjeev",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg,#10B981,#000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=60",
    title: "Apeksha Parajuli",
    subtitle: "UI/UX Designer",
    handle: "@apeksha",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg,#F59E0B,#000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=60",
    title: "Arpana Sharma",
    subtitle: "Backend Architect",
    handle: "@arpana",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=60",
    title: "Ramesh Khatri",
    subtitle: "Project Manager",
    handle: "@ramesh",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg,#06B6D4,#000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=60",
    title: "Sita Sharma",
    subtitle: "QA Lead",
    handle: "@sita",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg,#EF4444,#000)",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* page wrapper */}
      <section className="pt-28 pb-24 px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-extrabold tracking-tight text-[#020063]">
            Meet The Experts
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            The talented individuals behind our innovative solutions.
          </p>

          {/* GRID AREA */}
          <div className="relative mx-auto mt-12 w-full max-w-6xl rounded-2xl bg-gray-100 p-6 md:p-8">
            {/* give the animation space + prevent footer collision */}
            <div className="relative ">
              <ChromaGrid
                items={teamMembers}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
