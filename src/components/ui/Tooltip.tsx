"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  offset?: number;
}

export const Tooltip = ({
  content,
  children,
  side = "bottom",
  offset = 10,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: side === "top" ? 10 : -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: side === "top" ? 10 : -10, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            style={{
              [side === "top" ? "bottom" : side === "bottom" ? "top" : side === "left" ? "right" : "left"]: "100%",
              [side === "left" || side === "right" ? "top" : "left"]: "50%",
              translate:
                side === "left" || side === "right"
                  ? "0 -50%"
                  : "-50% 0",
              margin: side === "top" || side === "bottom" ? `${offset}px 0` : `0 ${offset}px`,
            }}
            className={`
              absolute z-50 whitespace-nowrap px-3 py-1.5 text-xs font-bold rounded-full pointer-events-none
              ${theme === "dark" 
                ? "bg-white text-neutral-900 shadow-[0_0_15px_rgba(255,255,255,0.3)] border border-white/20" 
                : "bg-neutral-900/90 text-white backdrop-blur-md shadow-xl border border-white/10"
              }
            `}
          >
            {content}
            {/* Arrow */}
            <div 
              className={`absolute w-2 h-2 rotate-45 
                ${theme === "dark" ? "bg-white" : "bg-neutral-900/90"}
                ${side === "top" ? "-bottom-1" : ""}
                ${side === "bottom" ? "-top-1" : ""}
                ${side === "left" ? "-right-1" : ""}
                ${side === "right" ? "-left-1" : ""}
                left-1/2 -translate-x-1/2
              `} 
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
