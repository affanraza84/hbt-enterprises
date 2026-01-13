"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full flex items-center justify-center bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors focus:outline-none ring-offset-2 focus-visible:ring-2 ring-primary"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{ 
            scale: theme === "dark" ? 0 : 1,
            rotate: theme === "dark" ? 90 : 0
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center origin-center text-orange-500"
        >
          <Sun className="w-5 h-5 font-bold" strokeWidth={2.5} />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ 
            scale: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -90
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center origin-center text-blue-400"
        >
          <Moon className="w-5 h-5 font-bold" strokeWidth={2.5} />
        </motion.div>
      </div>
    </button>
  );
}
