"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring configuration for an elegant, laggy follow effect
  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const cursorX = useSpring(-250, springConfig);
  const cursorY = useSpring(-250, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Offset by 250 to center the 500px orb on the cursor
      cursorX.set(e.clientX - 250);
      cursorY.set(e.clientY - 250);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[100]">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple/15 mix-blend-multiply blur-[100px] rounded-full"
      />
    </div>
  );
}
