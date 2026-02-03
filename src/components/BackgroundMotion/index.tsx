"use client";

import { BackgroundBlobs } from "./BackgroundBlobs";

export function BackgroundMotion() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <BackgroundBlobs />
    </div>
  );
}
