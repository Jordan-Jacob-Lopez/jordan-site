// components/icons/Pawn.tsx
"use client";
import * as React from "react";

export function PawnIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* head */}
      <circle cx="12" cy="7" r="3" />
      {/* collar/shoulders */}
      <path d="M9 14c0-2 1.5-3 3-3s3 1 3 3" />
      {/* base */}
      <path d="M8 18h8" />
      <path d="M7 21h10" />
    </svg>
  );
}
