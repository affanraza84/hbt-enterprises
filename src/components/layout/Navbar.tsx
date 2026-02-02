"use client";

import React from "react";
import { TopBar } from "./TopBar";
import { MainNavbar } from "./MainNavbar";

import { usePathname } from "next/navigation";

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/checkout")) return null;

  return (
    <>
      <TopBar />
      <MainNavbar />
    </>
  );
}
