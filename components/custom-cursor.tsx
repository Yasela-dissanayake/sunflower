"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";

export function CustomCursor() {
  const [isClient, setIsClient] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Softer spring configuration so it smoothly follows the default cursor like a small trailing companion
  const springConfig = { damping: 20, stiffness: 180, mass: 0.8 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Calculate velocity to make it "wave"
  const velocityX = useVelocity(smoothX);
  // Transform horizontal velocity into a slight rotation angle (waving back and forth)
  const rotation = useTransform(velocityX, [-800, 800], [-45, 45]);

  useEffect(() => {
    setIsClient(true);
    const moveCursor = (e: MouseEvent) => {
      // Offset slightly to the bottom right of the actual cursor so the default pointer is visible,
      // and the sunflower acts as a nice flexible companion following it.
      cursorX.set(e.clientX + 10);
      cursorY.set(e.clientY + 10);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!isClient) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center filter drop-shadow-lg"
        style={{
          x: smoothX,
          y: smoothY,
          rotate: rotation,
        }}
        whileHover={{ scale: 1.1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="36"
          height="36"
          className="relative z-10"
        >
          <defs>
            <linearGradient id="petalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#FFD700", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FFA500", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#654321", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#3D2817", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <g transform="translate(32,32)">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
              (angle) => (
                <ellipse
                  key={angle}
                  cx="0"
                  cy="-18"
                  rx="5"
                  ry="14"
                  fill="url(#petalGrad)"
                  transform={`rotate(${angle})`}
                />
              ),
            )}
            <circle cx="0" cy="0" r="8" fill="url(#centerGrad)" />
            <circle cx="0" cy="0" r="6" fill="#D2B48C" opacity="0.8" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
