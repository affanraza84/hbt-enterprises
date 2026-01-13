"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
} as const;

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative group/menu-item">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-primary font-medium text-sm transition-colors relative"
      >
        {item}
        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover/menu-item:w-full"></span>
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-neutral-light/95 backdrop-blur-xl border border-neutral-default rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-4 w-max"
              >
                <div className="w-full h-full relative z-20">
                     {children}
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent bg-transparent flex justify-center space-x-6 px-4 py-3"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-4 max-w-sm group">
      <div className="flex-shrink-0 rounded-lg overflow-hidden border border-neutral-default group-hover:border-accent/50 transition-colors w-28 h-20 relative bg-neutral-default">
           {/* Fallback for Image if src is not valid or just a placeholder */}
           <div className="w-full h-full flex items-center justify-center bg-neutral-default text-neutral-400 text-xs">
                IMG
           </div>
          {/* Using next/image requires host configuration, using a simple img tag or div placeholder for stability if src is arbitrary URL without config */}
          {/* <Image
            src={src}
            width={140}
            height={70}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
          /> */}
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <h4 className="text-sm font-bold text-primary mb-1 group-hover:text-accent transition-colors">
          {title}
        </h4>
        <p className="text-neutral-dark text-xs max-w-[10rem] line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
};

// Simple link component for non-dropdown items
export const HoveredLink = ({ children, ...rest }: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...rest}
      className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors text-sm block py-1"
    >
      {children}
    </Link>
  );
};
