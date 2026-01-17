"use client";

import React from "react";
import { TopBar } from "./TopBar";
import { MainNavbar } from "./MainNavbar";

export function Navbar({ className }: { className?: string }) {
  return (
    <>
      <TopBar />
      <MainNavbar />
    </>
  );
}
