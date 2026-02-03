"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function BackgroundBlobs() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blobs = [blob1.current, blob2.current, blob3.current];

    blobs.forEach((blob, i) => {
      if (!blob) return;

      gsap.set(blob, {
        xPercent: -50,
        yPercent: -50,
      });

      gsap.to(blob, {
        x: gsap.utils.random(-200, 200),
        y: gsap.utils.random(-200, 200),
        scale: gsap.utils.random(1, 1.15),
        duration: gsap.utils.random(2, 4),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 1.2,
      });
    });
  }, []);

  return (
    <>
      <div
        ref={blob1}
        className="absolute top-3/5 left-3/7 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
      />
      <div
        ref={blob2}
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-purple-500/15 blur-3xl"
      />
      <div
        ref={blob3}
        className="absolute top-2/5 right-1/5 w-56 h-56 rounded-full bg-pink-500/15 blur-3xl"
      />
    </>
  );
}
