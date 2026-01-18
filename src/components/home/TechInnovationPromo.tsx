"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function TechInnovationPromo() {
  const videoRefLight = useRef<HTMLVideoElement>(null);
  const videoRefDark = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Slow down both videos
    if (videoRefLight.current) videoRefLight.current.playbackRate = 0.8;
    if (videoRefDark.current) videoRefDark.current.playbackRate = 0.8;
  }, []);

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden bg-neutral-100 dark:bg-black transition-colors duration-300">
      
      {/* Light Theme Video (Visible in light mode) */}
      <video
        ref={videoRefLight}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100 dark:hidden block"
      >
        {/* Abstract Light Tech/Network */}
        <source
          src="https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Theme Video (Visible in dark mode) */}
      <video
        ref={videoRefDark}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90 hidden dark:block"
      >
        {/* Cyberpunk/Future Tech */}
        <source
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Shadow for depth only */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] z-10 pointer-events-none" />
    </section>
  );
}
