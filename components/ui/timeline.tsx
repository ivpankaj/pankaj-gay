"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 85%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans relative"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-5xl mx-auto pb-24">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-16 md:gap-10"
          >
            {/* Left Sticky Node (Monochrome Social Media Brand) */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-24 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Timeline Dot */}
              <div className="h-9 absolute left-3.5 md:left-3.5 w-9 rounded-full bg-black flex items-center justify-center border border-zinc-700 shadow-sm">
                <div className="h-3 w-3 rounded-full bg-white ring-2 ring-zinc-800" />
              </div>

              {/* Social Media Brand Display (Left Side) */}
              <div className="hidden md:flex items-center gap-3 md:pl-20">
                {item.title}
              </div>
            </div>

            {/* Right Content Side */}
            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              {/* Mobile Title display */}
              <div className="md:hidden block mb-4 text-left">
                {item.title}
              </div>

              {/* Profiles Content */}
              <div className="w-full">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Animated Monochrome Vertical Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[1.5px] bg-zinc-900"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[1.5px] bg-gradient-to-t from-white via-zinc-400 to-transparent rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          />
        </div>
      </div>
    </div>
  );
};
